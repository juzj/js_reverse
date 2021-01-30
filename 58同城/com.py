from types import FunctionType
import requests
import re
from lxml import etree
import base64
from fontTools.ttLib import TTFont

headers = {
    'authority': 'sz.58.com',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'referer': 'https://sz.58.com/searchjob/',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cookie': 'f=n; commontopbar_new_city_info=4%7C%E6%B7%B1%E5%9C%B3%7Csz; commontopbar_ipcity=bj%7C%E5%8C%97%E4%BA%AC%7C0; id58=c5/nfF/DuntGZxWeG6p9Ag==; sessionid=fa44983b-00ae-4233-8273-43caf8eb87e7; param8616=1; param8716kop=1; wmda_uuid=462078f7ae545c38c4d2c127e6ac65c4; wmda_new_uuid=1; xxzl_deviceid=oPVZoaVKTqxO4IoDlk9kbOt2uhYFJribbr0dZFpqCBrXdX%2Fs2T5yEdxF%2BvvdTuW0; city=quanguo; 58home=quanguo; 58tj_uuid=61c89316-7b30-4f19-9e19-08593313e31f; als=0; xxzl_cid=fb3274d395274a15b1ce4d695eee68e3; xzuid=6b9abbc1-df4b-41fa-8506-2bdffc3e3148; www58com="UserID=41943840554510&UserName=Smilef5186"; 58cooper="userid=41943840554510&username=Smilef5186"; 58uname=Smilef5186; wmda_visited_projects=%3B10104579731767%3B11187958619315%3B1731916484865; f=n; isSmartSortTipShowed=true; Hm_lvt_a3013634de7e7a5d307653e15a0584cf=1606662903,1606662989; PPU="UID=41943840554510&UN=Smilef5186&TT=9178e8877f7644dfe58614066061bdb9&PBODY=Dbnxsah7Htbcbd1a6gMadMNPOG6peN9T-0d8YfXU3ZQ0JDSMa_s3HOqoQkD0VJRcHJqrFnl3DLUwh-RO_YhaMH6cQ40Yqh8RoPhGNhFL9YTEuZNhZF-FuuQ-tlTExOFwCQiZBjnG51-k8cFNYWZrkxy1CaLgdAfvybBoMUA2ipc&VER=1"; JSESSIONID=5FF9C5B15CBFC3753BCA4D2FEBE23261; new_session=1; new_uv=2; utm_source=; spm=; init_refer=; jl_list_left_banner=1; Hm_lpvt_a3013634de7e7a5d307653e15a0584cf=1606746937; wmda_session_id_1731916484865=1606746937196-64927874-b5f1-4b3c',
}

params = (
    ('PGTID', '0d302409-0000-4dcb-eeee-e2f53765004b'),
    ('ClickID', '5'),
)

response = requests.get('https://sz.58.com/searchjob/pn2/', headers=headers, params=params)
response.encoding = response.apparent_encoding
# 查找字体路径
woff_xml = re.findall("base64,(.*) ", response.text)
# 保存字体文件
result = "".join(woff_xml).replace(')', "").strip()
# with open('/Users/juzhijie/reverse_spider/58同城/ziti1.woff', "wb") as f:
#     f.write(base64.b64decode(result))

font_path = "/Users/juzhijie/reverse_spider/58同城/ziti1.woff"
# 把字体文件改成能看懂的xml文件
fonts = TTFont(font_path)
# fonts.saveXML('/Users/juzhijie/reverse_spider/58同城/ziti1.xml')
print(fonts.getGlyphName)


fond_mapt = {
    (0, 1549): "B",
    (1588, 0): "男",
    (868, 0): "王",
    (825, 367): "大",
    (-110, -150): "女",
    (1460, 0): "吴",
    (156, 262): "硕",
    (0, 1325): "1",
    (0, 134): "8",
    (0, 144): "经",
    (0, 125): "2",
    (1944, 0): "下",
    (0, -227): "5",
    (146, 78): "应",
    (228, 306): "科",
    (-224, -426): "7",
}


