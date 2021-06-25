#!/bin/bash

if service --status-all | grep 'php${php_version}-fpm'
then
	echo 'abc'
	service php${php_version}-fpm restart
fi
