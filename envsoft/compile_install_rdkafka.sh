#!/bin/sh
#CentOS7.9下使用编译安装方法安装 php扩展rdkafka
#假定所有支持软件(包括但不限于apache php等)都以yum方式安装为前提
#自行编译安装支持软件(包括但不限于apache php等)不在此脚本支持范围
if [ `whoami` != 'root' ]
then
    echo "编译需要root用户"
    exit 1
fi
cd /tmp
if [ ! -d './rdkafka' ]
then
	mkdir ./rdkafka
	if [ ! -f  rdkafka-4.1.2.tgz ]
	then
		cp ~/rdkafka-4.1.2.tgz ./rdkafka-4.1.2.tgz
	fi
 	tar -zxvf  rdkafka-4.1.2.tgz -C ./rdkafka
fi
#查找依赖软件是否已安装
if [ `rpm -qa | grep epel-release | wc -l` -eq 0 ]
then
	yum -y install epel-release
fi
if [ `rpm -qa | grep re2c | wc -l` -eq 0 ]
then
	yum install re2c
fi

echo "/usr/local/lib" >>/etc/ld.so.conf
ldconfig
if [ `ldconfig -p | grep librdkafka | wc -l` -eq 0 ]
#编译rdkafka
then
	if [ ! -f  librdkafka-master.zip ]
	then
		cp ~/librdkafka-master.zip ./librdkafka-master.zip
	fi
	unzip librdkafka-master.zip
	cd ./librdkafka-master
	 ./configure
	make && make install
	ldconfig
fi

#查找依赖软件php-devel是否已安装
if [ `rpm -qa | grep php-devel | wc -l` -eq 0 ]
then
	yum install php-devel
fi

cd ../rdkafka/rdkafka-4.1.2
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
kill -SIGUSR2 `cat /var/run/php-fpm.pid`
service httpd restart
