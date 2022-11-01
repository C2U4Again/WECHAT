=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
The MIT License (MIT)
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Copyright © 2022 <manyan.co>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
MORE
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
```
FastGithub

#### delete the content
D:\>notepad C:\\Users\\Admin/.ssh/known_hosts

#### one should have ssh
ssh:
root
Mysql1020
D:\>ssh root@120.77.205.222

#### install ubuntu18.04 -> lamp

sudo apt-get update
sudo -y apt-get install apache2

sudo apt-get install php
cd /var/www/html/
vi info.php
/etc/init.d/apache2 restart
120.77.205.222/info.php

sudo apt-get install mysql-server
mysql -uroot -p
root/ttanzuUO

### 
sudo apt-get install php7.2-mysqli
php -m

sudo apt-get install phpmyadmin
Myadmin10
#### password?????phpmyadmin/Myadmin10
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
120.77.205.222/phpmyadmin


#/etc/init.d/mysql restart
mysql -uroot -p
CREATE USER 'xcx' @'localhost' IDENTIFIED BY 'Mysql1020'; 
GRANT ALL PRIVILEGES ON * . * TO 'xcx' @'localhost';
SHOW GRANTS FOR 'xcx' @'localhost';

drop database bookdb;

create database bookdb;

use bookdb;

create table lunyu(c int, c2 char(30), c3 varchar(20000)) charset=utf8;

insert into lunyu (c,c2,c3) VALUES("0","0.0","论语全文");

select * from lunyu;

exit

#### database
<?php

// phpinfo();

//  exit();

  error_reporting(E_ALL);

  error_reporting(E_ALL & ~E_NOTICE);


  $link = mysqli_connect('localhost', 'xcx', 'Mysql1020');

  if (!$link) {
    die('Could not connect: ' . mysql_error()); }

  else{
    echo 'Connected successfully';  }

    mysqli_close($link);

?>

#### check error for php
cat /var/log/apache2/error.log


#### upload
chmod 777 upload

### php debug
locate php.ini
vi php.ini
display => on
