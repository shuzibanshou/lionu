#!/bin/bash
#检测linux发行版

pkg=""
get_release_pkg(){
	if [[ $(cat /proc/version | grep -i "Red Hat") != "" ]]
	then
		pkg="yum"
	elif [[ $(cat /proc/version | grep -i "Ubuntu" ) != ""  ]] || [[ $(cat /proc/version | grep -i "Debian" ) != "" ]]
	then
		pkg="apt"
	elif [[ $(cat /proc/version | grep -i "SUSE") != "" ]]
	then
		pkg="zypper"
	fi
}
get_release_pkg
echo ${pkg}
