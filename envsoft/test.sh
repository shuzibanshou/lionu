#!/bin/bash

if [ `service --status-all | grep 'php7.0-fpm' | wc -l` -gt 0 ]
then
	echo 'abc'
	service php${php_version}-fpm restart
fi
