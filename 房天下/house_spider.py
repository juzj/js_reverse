#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time : 2020/8/22 18:57
# @Author : ZhiJieJu
# @File : house_spider.py
# @Software: PyCharm

import requests
import execjs


url = "https://passport.fang.com/login.api"
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36"
}
data = {
    "uid": "",
    "pwd": "",
    "Service": "soufun-passport-web",
    "AutoLogin": "0"
}


def parse_body_js(password):
    f = open('params_js.js', encoding='utf-8')
    line = f.readline()
    html_str = ''
    while line:
        html_str = html_str + line
        line = f.readline()
    ctx = execjs.compile(html_str)
    pwd = ctx.call('pwd', f"{password}")
    return pwd


if __name__ == '__main__':
    # TODO xxxx 电话号码
    data.update({'uid': '123455'})
    # TODO xxxx 密码
    params = parse_body_js('12345678')
    data.update({'pwd': f"{params}"})
    print(data)

























