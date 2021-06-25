#!/bin/bash
#检测linux发行版

pkg=""
get_release_pkg(){
	if [[ $(cat /proc/version | grep -i "Red Hat") != "" ]]
	then
		pkg="yum"
	elif [[ $(cat /proc/version | grep -i "Ubuntu" ) != "" ]] ||  [[ $(cat /proc/version | grep -i "Debian" ) != "" ]]
	then
		pkg="apt"
	elif [[ $(cat /proc/version | grep -i "SUSE") != "" ]]
	then
		pkg="zypper"
	fi
}
get_release_pkg
if [ ${pkg} == "yum" ]
then
	if [ `rpm -qa | grep httpd | wc -l` -eq 0 ] && [ `rpm -qa | grep nginx | wc -l` -eq 0 ]
	then
		echo "还未安装任何 Web Server,请先安装 Apache 或者 Nginx"
		exit 1
	elif [ `rpm -qa | grep php | wc -l` -eq 0 ]
	then
		echo "还未安装 PHP,请先安装 PHP"
		exit 1
	fi
elif [ ${pkg} == "apt" ]
then
	if [ `dpkg -l | grep apache2 | wc -l` -eq 0 ] && [ `dpkg -l | grep nginx | wc -l` -eq 0 ]
	then
		echo "还未安装任何 Web Server,请先安装 Apache 或者 Nginx"
		exit 1
	elif [ `dpkg -l | grep php | wc -l` -eq 0 ]
	then
		echo "还未安装 PHP,请先安装 PHP"
		exit 1
	fi
elif [ ${pkg} == "zypper" ]
then
	echo ""
else
	echo "未能识别该Linux发行版"
	exit 1
fi
