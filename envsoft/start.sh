#!/bin/sh
#CentOS7.9下使用编译安装方法配置环境软件
#假定所有支持软件(包括但不限于apache php等)都以yum方式安装为前提
#自行编译安装支持软件(包括但不限于apache php等)不在此脚本支持范围







#扩展配置写入php.ini
if [ `grep "extension=/usr/lib64/php/modules/zip.so" /etc/php.ini | wc -l` -eq 0 ]
then
	echo -e "\n[rdkafka]\nextension=/usr/lib64/php/modules/zip.so" >> /etc/php.ini
fi
#重启php-fpm和webserver httpd
#kill -USR2 $(ps -aux | grep php-fpm:\ master\ process | awk '{print $2}' | head -n 1)
service php-fpm restart
service httpd restart



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
