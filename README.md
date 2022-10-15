# template
This folder is for quick set-up various project.

# author
zixiao.zhao@nokia.com

# common
1. web go to github in mainland
- go to https://ping.chinaz.com/github.com
- input github.com
- use the ip which < 1ms
2. web go to stackoverflow
3. make push github faster
- modify below
``` 
vim /etc/hosts
#github.global.ssl.fastly.net
github.com
git config --global http.proxy http://localhost:7890
```
- use https with gen code
4. ssh never timeout
- add time
```
vim /etc/ssh/sshd_config
ClientAliveInterval 60
ClientAliveCountMax 10800
```
5. RPC 35 error


