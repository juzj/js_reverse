#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time : 2021/1/12 3:35 下午
# @Author : ZhiJieJu
# @File : jscdn.py
# @Software: PyCharm

from loguru import logger
import execjs
import re
import requests
import time

cookies = {
    "Cookie": "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1610435418,1612448585,1612450572,1612516379; no-alert=true; sessionid=qgagxsxim6wqexmm9v814pcj8zxqgwna; __jsl_clearance=1612516730.304|0|clD4VpfqhdaLBWywKWy%2FZyfi6d_3bc64db3768545bf704a58c2de2cf2793D; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1612516733"
}

headers = {
    "Connection": "keep-alive",
    "Cache-Control": "max-age=0",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Referer": "http://www.python-spider.com/challenge/11",
    "Accept-Language": "zh-CN,zh;q=0.9",
}

response = requests.get(
    "http://www.python-spider.com/challenge/11", headers=headers, cookies=cookies
)

x1 = execjs.eval(re.findall("x=(.*),y=", response.text)[0])
y1 = re.findall("y=(.*),f", response.text)[0]


def decryption_params():
    f = open("jsparse.js", encoding="UTF-8")
    line = f.readline()
    html_str = ""
    while line:
        html_str = html_str + line
        line = f.readline()
    return html_str


ctx = execjs.compile(decryption_params())
a = ctx.call("getjs", x1, y1)
print(a)
print(re.findall(",'_(.*?)',\(-~\[-~-~", a)[0])

#
def decryption_params():
    f = open("cookie.js", encoding="UTF-8")
    line = f.readline()
    html_str = ""
    while line:
        html_str = html_str + line
        line = f.readline()
    return html_str
#
#
ctx = execjs.compile(decryption_params())
a = ctx.call("_N", str(time.time())[:14], re.findall(",'_(.*?)',\(-~\[-~-~", a)[0])
#
print(str(a).split("=")[1])
#
cookies = {
    "no-alert": "true",
    "sessionid": "qgagxsxim6wqexmm9v814pcj8zxqgwna",
    "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d": "1610435418,1612448585,1612450572,1612516379",
    "__jsl_clearance": str(a).split("=")[1],
    "Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d": "1612516733",
}

headers = {
    "Connection": "keep-alive",
    "Cache-Control": "max-age=0",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Referer": "http://www.python-spider.com/challenge/11",
    "Accept-Language": "zh-CN,zh;q=0.9",
}

response = requests.get(
    "http://www.python-spider.com/challenge/11",
    headers=headers,
    cookies=cookies,
    verify=False,
)
print(response.text)
