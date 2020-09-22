#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time : 2020/8/22 18:47
# @Author : ZhiJieJu
# @File : baidu_spider.py
# @Software: PyCharm

import execjs

'''感兴趣的可以看一下execjs的官网查看如何使用'''


def decryption_params():
    f = open("decryption.js", encoding='UTF-8')
    line = f.readline()
    html_str = ''
    while line:
        html_str = html_str + line
        line = f.readline()
    return html_str


params = decryption_params()
ctx = execjs.compile(params)

print(ctx.call("e", '你好'))



