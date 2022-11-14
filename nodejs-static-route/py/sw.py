import json
import requests
from lxml import etree

import re
url = 'https://mp.weixin.qq.com/s?__biz=MzA4MjE0MjIxNA==&mid=2653420999&idx=3&sn=e6a9d7407310592ea20c190730bed916&chksm=845968aeb32ee1b80b257557905d89418c87527b7c971d68d27b16b55a4d6b5a3e18212c562d&scene=27'
#url = 'https://www.scwdwl.com/n/47333.html'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
}
page_text = requests.get(url=url, headers=headers).content.decode('utf-8')
tree = etree.HTML(page_text)

div_lists = tree.xpath('//div//span/text()') # 得到的是列表哦
list=[]
for div_list in div_lists:
    zj=[]

    c1 = re.split(r"\u3000|－|\xa0\xa0|，",div_list)
    for c in c1:
        c = c.replace(' ', '')

        if c!='':
            zj.append(c)

    if zj != ['\n']:
        list.append(zj)

# for i in list:
#     # 像论语数据一样插入
#     try:
#         print((i[0],i[1],str(i[2:]).replace("'","").replace("[","").replace("]","")))
#     except:
#         print(tuple(i))
# json格式
result=[]
for i in list:
    try:
        data = {}
        data['t1'] = i[0]
        data["t2"] = i[1]
        data["t3"] = str(i[2:]).replace("'","").replace("[","").replace("]","")
        result.append(data)
    except:
        continue
result = str(result).replace("'",'"')
print(result)
