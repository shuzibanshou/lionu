#!/bin/bash

if service --status-all | grep 'php7.0-fpm'
then
	echo 'abc'
	service php7.0-fpm restart
fi
