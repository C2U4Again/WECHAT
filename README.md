# template
This folder is for quick set-up various project.

# author
clear@clear.com

# license 
The MIT License (MIT)
Copyright © 2021 <myan.ltd>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

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


