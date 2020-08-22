#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time : 2020/8/21 23:17
# @Author : ZhiJieJu
# @File : youdao_spider.py
# @Software: PyCharm

import random
import requests
import time
import hashlib

input_value = "hello"

url = "http://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule"

headers = {
    "Cookie": "自己的cookie",
    "Host": "fanyi.youdao.com",
    "Origin": "http://fanyi.youdao.com",
    "Referer": "http://fanyi.youdao.com/?keyfrom=dict2.index",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36",
}

post_data = {
    "i": f"{input_value}",
    "from": "AUTO",
    "to": "AUTO",
    "smartresult": "dict",
    "client": "fanyideskweb",
    "doctype": "json",
    "version": "2.1",
    "keyfrom": "fanyi.web",
    "action": "FY_BY_REALTlME"
}


def parse_parameter():
    ''':arg
    lts  时间戳
    salt 时间戳 + 随机数
    bv header头
    sign 固定字符 + 翻译文本 + salt + 固定字符
    '''
    lts = int(time.time() * 1000)
    salt = str(lts) + str(random.randint(0, 9))
    ua = '5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36'
    bv = hashlib.md5(ua.encode(encoding='utf-8')).hexdigest()
    sign_params = "fanyideskweb" + input_value + salt + "]BjuETDhU)zqSxf-=B#7m"
    sign = hashlib.md5(sign_params.encode(encoding='utf-8')).hexdigest()
    data = {
        "lts": f"{lts}",
        "salt": f"{salt}",
        "bv": f"{bv}",
        "sign": f"{sign}",
    }
    return data


def start_request():
    data = parse_parameter()
    post_data.update(data)
    rep = requests.post(url=url, headers=headers, data=post_data)
    print(rep.text)


if __name__ == '__main__':
    start_request()
