import requests

cookies = {
    'bush-20480-tech-M-web-release-01': 'NDACBOAKFAAA',
    'clientac': '1607929275570612158',
    'xywylastUrl': 'http%253A%252F%252Fjib.xywy.com%252Fhtml%252Fb.html',
    'xywylastRef': '',
    'ajsDataSession': '16079292755702441176@1@1607929275@1',
    'visit_dt': '2020-11-14',
    'tj_lastUrl': 'http%3A//jib.xywy.com/html/b.html',
    'tj_lastUrl_time': '1607929275603',
}

headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Language': 'zh-CN,zh;q=0.9',
}

response = requests.get('http://jib.xywy.com/html/b.html', headers=headers, cookies=cookies, verify=False)
response.encoding = 'gbk'
print(response.text)