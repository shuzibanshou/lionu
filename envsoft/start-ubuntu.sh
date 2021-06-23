#!/bin/sh
#Ubuntu20.04下使用编译安装方法配置环境软件
#假定所有支持软件(包括但不限于apache php等)都以apt方式提前安装
#自行编译安装支持软件(包括但不限于apache php等)不在此脚本支持范围


################### 第一部分 检查并安装php扩展rdkafka ###################

if [ `whoami` != 'root' ]
then
    echo "编译需要root用户"
    exit 1
fi

currdir=$(cd $(dirname $0); pwd)
#删除旧文件
if [ -d '/tmp/rdkafka' ] || [ -f '/tmp/rdkafka']
then
	rm -rf /tmp/rdkafka
fi
mkdir /tmp/rdkafka

if [ ! -f  /tmp/rdkafka-4.1.2.tgz ]
	then
		cp ${currdir}/rdkafka-4.1.2.tgz /tmp/rdkafka-4.1.2.tgz
fi

if [ -d /tmp/rdkafka ]
then
tar -zxvf  /tmp/rdkafka-4.1.2.tgz -C /tmp/rdkafka
else
exit 1
fi

#查找依赖软件是否已安装
apt update
if [ `dpkg -l | grep re2c | wc -l` -eq 0 ]
then
	apt -y install re2c
fi
if [ `dpkg -l | grep unzip | wc -l` -eq 0 ]
then
        apt -y install unzip
fi
if [ `dpkg -l | grep "ii  make" | wc -l` -eq 0 ]
then
	apt -y install make
fi
#查找依赖软件php-devel是否已安装
if [ `dpkg -l | grep php-dev | wc -l` -eq 0 ]
then
	apt -y install php-dev
fi

echo "/usr/local/lib" >>/etc/ld.so.conf
ldconfig
if [ `ldconfig -p | grep librdkafka | wc -l` -eq 0 ]
#编译rdkafka
then
	if [ ! -f  /tmp/librdkafka-master.zip ]
	then
		cp ${currdir}/librdkafka-master.zip /tmp/librdkafka-master.zip
	fi
	#删除旧文件夹
	if [ -d /tmp/librdkafka-master ]
	then
	rm -rf /tmp/librdkafka-master
	fi
	unzip -d /tmp /tmp/librdkafka-master.zip
    	cd /tmp/librdkafka-master
	./configure
	make && make install
	ldconfig
fi


cd /tmp/rdkafka/rdkafka-4.1.2
phpize=`which phpize`
${phpize}
with_php_config=`which php-config`
./configure --with-php-config=${with_php_config} 
make && make install
#扩展配置写入php.ini
if [ `grep "extension=/usr/lib64/php/modules/rdkafka.so" /etc/php.ini | wc -l` -eq 0 ]
 then
	echo -e "\n[rdkafka]\nextension=/usr/lib64/php/modules/rdkafka.so" >> /etc/php.ini
fi
#重启php-fpm和webserver httpd
#####kill -SIGUSR2 `cat /var/run/php-fpm.pid`
#kill -USR2 $(ps -aux | grep php-fpm:\ master\ process | awk '{print $2}' | head -n 1)
#service httpd restart

################### 第二部分 检查并安装php-zip ###################

if [ `dpkg -l | grep  php-pecl-zip | wc -l` -eq 0 ]
then
	apt -y install php-zip 
fi

#获取php版本
php_version = `php -r 'echo PHP_VERSION;' | grep '^[[:digit:]].[[:digit:]]'`
echo php_version
exit

#
if [ `grep "extension=/usr/lib64/php/modules/zip.so" /etc/php.ini | wc -l` -eq 0 ]
 then
	echo -e "\n[rdkafka]\nextension=/usr/lib64/php/modules/zip.so" >> /etc/php.ini
fi
#重启php-fpm和webserver httpd
#kill -USR2 $(ps -aux | grep php-fpm:\ master\ process | awk '{print $2}' | head -n 1)
if service --status-all | grep -Fq 'php-fpm'
then
service php-fpm restart
fi
if service --status-all | grep -Fq 'apache2'
then
service apache2 restart
fi
################### 第三部分 检查并安装JAVA环境 ###################
if [ `dpkg -l | grep  default-jdk | wc -l` -eq 0 ]
then
	apt -y install default-jdk
fi

################### 第四部分 启动zookeeper ###################
cd ${currdir}
./kafka_2.12-2.6.0/bin/zookeeper-server-start.sh  -daemon ./kafka_2.12-2.6.0/config/zookeeper.properties&
##TODO 使用exec调用shell脚本来收集执行结果
sleep 5
################### 第五部分 启动kafka     ###################
if [ `netstat -tnlp | grep  2181 | wc -l` -eq 0 ]
then
#echo '请先启动zookeeper'
#如果zookeeper启动失败 则使用普通模式再启动一次以便输出启动日志
./kafka_2.12-2.6.0/bin/zookeeper-server-start.sh ./kafka_2.12-2.6.0/config/zookeeper.properties&
exit 2
fi

./kafka_2.12-2.6.0/bin/kafka-server-start.sh -daemon ./kafka_2.12-2.6.0/config/server.properties&

sleep 5
################### 第六部分 启动spark     ###################
if [ `netstat -tnlp | grep  9092 | wc -l` -eq 0 ]
then
#echo '请先启动kafka'
#如果kafka启动失败 则使用普通模式再启动一次以便输出启动日志
./kafka_2.12-2.6.0/bin/kafka-server-start.sh ./kafka_2.12-2.6.0/config/server.properties&
exit 3
fi

./spark-2.4.7-bin-hadoop2.7/sbin/start-all.sh
