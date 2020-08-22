### [有道翻译](http://fanyi.youdao.com/)

破解有道翻译js加密，分享一下过程

1、打开网页控制台输入你要翻译的文字

![](https://tva1.sinaimg.cn/large/007S8ZIlly1ghyuqk5isdj31n30u0tiq.jpg)



2、通过观察【图一】`post`可以看到body里面有很多加密的文本，对于刚入门爬虫的新手来说可能要打退堂鼓了，但是通过【图二】`Preview`可以看到我们输入的文本已经翻译成我们想要的数据了，这对我们来说是一个好事情，因为我们找对接口了，只需要把`Form Data`里面的加密内容搞明白就可以了直接拿到我们想要的数据了，接下来分析参数是哪里来的

![](https://tva1.sinaimg.cn/large/007S8ZIlly1ghyurlo63mj327u0twdos.jpg)

​																					【图一】

![](https://tva1.sinaimg.cn/large/007S8ZIlly1ghyuvyrsm0j31qg0kywjo.jpg)

​																					【图二】

3、多次请求，观察每次请求变化的参数。

> 通过对比对比拿到以下数据

| Key         | Value                            | Desc               |
| ----------- | -------------------------------- | ------------------ |
| i           | 您好                             | `您好`要翻译的文本 |
| from        | AUTO                             | 固定值             |
| to          | AUTO                             | 固定值             |
| smartresult | dict                             | 固定值             |
| client      | fanyideskweb                     | 固定值             |
| salt        | 15980236354298                   | ？                 |
| sign        | 28377c3b7d0e2dd39564f9c9180ce9f9 | ？                 |
| lts         | 1598023635429                    | 时间戳             |
| bv          | 4528a62d863566fd6a5f17ef6be59308 | 固定值             |
| doctype     | json                             | 固定值             |
| version     | 2.1                              | 固定值             |
| keyfrom     | fanyi.web                        | 固定值             |
| action      | FY_BY_REALTlME                   | 固定值             |

> 多次请求的`Form Data`数据对比结果，我们可以看到只有`?`的`value`发生变化了，其它的没有发生变化

| Key         | Value                            | Desc                              |
| ----------- | -------------------------------- | --------------------------------- |
| i           | hello world                      | `hello world`就是我们要翻译的文本 |
| from        | AUTO                             | 固定值                            |
| to          | AUTO                             | 固定值                            |
| smartresult | dict                             | 字典类型 固定值                   |
| client      | fanyideskweb                     | 固定值                            |
| salt        | 15980249210284                   | ？                                |
| sign        | b84ac4054836d111bcf2e17b5b119af5 | ？                                |
| lts         | 1598024921028                    | 时间戳                            |
| bv          | 4528a62d863566fd6a5f17ef6be59308 | 固定值                            |
| doctype     | json                             | 返回类型 固定值                   |
| version     | 2.1                              | 固定值                            |
| keyfrom     | fanyi.web                        | 固定值                            |
| action      | FY_BY_REALTlME                   | 固定值                            |

4、现在我们可以知道`Form Data`哪些值是变化的，哪些值是不变的，我们就找一下这两个值怎么生成的，全局搜索关键字：`salt`，`sign`看看有没有我们想要的数据

![](https://tva1.sinaimg.cn/large/007S8ZIlly1ghyvj2yx06j327s0tkdr4.jpg)

> 全局搜索我们想要的关键字，可以看到搜索到一个相关的JS，我们点进去看一下

![](https://tva1.sinaimg.cn/large/007S8ZIlly1ghyvjqs96oj327w0tq0zb.jpg)

> 格式化一下JS代码，搜索一下我们的`关键字`可以看到有多个匹配项，但是通过查看这些匹配项我们看到在`8369`看到对`sign`的一个加密，这个位置可能是处理关键字的位置，我们在这个地方打上断点，然后在输入框重新输入一个文本看看有没有断上

![](https://tva1.sinaimg.cn/large/007S8ZIlly1ghzqh6r30dj31ye0u07hp.jpg)

>输入`hello`，我们可以看到在我们标记的位置成功的断上了，现在就一步一步分析这些值是怎么生成吧

![](https://tva1.sinaimg.cn/large/007S8ZIlly1ghzqk768vlj31kd0u0tnp.jpg)

> 点击下一步，直到我们要的值后，看看这个是怎么来的，通过断点可以看到，`sign`是由`md5`hash出来的，其中有两个字符串是固定的，`e`是我们输入的文本，`i`是一个随机数，好了；基本上我们的爬虫到这里就完成90%了，只需要把对应的代码写出来即可。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1ghzqmfv5tsj31yo0u0nbi.jpg)



