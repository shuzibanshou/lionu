#!/bin/bash

if [ `service --status-all | grep 'php${php_version}-fpm' | wc -l` -gt 0 ]
then
	echo 'abc'
	service php${php_version}-fpm restart
fi
