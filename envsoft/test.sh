#!/bin/sh

##配置密钥并追加公钥
if [ ! -f ~/.ssh/id_rsa.spark ]
then
	ssh-keygen -t rsa -f ~/.ssh/id_rsa.spark -q -N ''
	if [ -f ~/.ssh/id_rsa.spark.pub ]
	then 
		cat ~/.ssh/id_rsa.spark.pub >> ~/.ssh/authorized_keys
		##追加config配置文件 如果config文件不存在 会自动新建
		echo "\nHost localhost\nIdentityFile ~/.ssh/id_rsa.spark\nUser root\n"	>> ~/.ssh/config
	else
		echo '公钥文件不存在'
		exit 11
	fi
else
	echo '密钥文件已存在'
	exit 10
fi
