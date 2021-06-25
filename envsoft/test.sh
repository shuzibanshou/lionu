#!/bin/bash

if `service --status-all | grep 'php${php_version}-fpm'` | wl -gt 0
then
	echo 'abc'
	service php${php_version}-fpm restart
fi
