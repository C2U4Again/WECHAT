import requests
import json
from bs4 import BeautifulSoup

url = 'https://www.scwdwl.com/n/47333.html'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36'
    }
html = requests.get(url=url, headers=headers)
html.encoding = html.apparent_encoding
html = html.text
soup = BeautifulSoup(html, features='lxml')
x = (soup.find_all('p'))
for i in x:
    print(i.text)

