# 某名片 加密参数分析

#### 需求文档

> 地址：aHR0cHM6Ly93d3cucWltaW5ncGlhbi5jbi9maW5vc2RhL3Byb2plY3QvcGludmVzdG1lbnQ=

![](https://tva1.sinaimg.cn/large/0081Kckwly1gl63czy5hxj31fu0u0naf.jpg)

要求采集红色框里面的企业信息


#### 页面分析

> 根据网络请求判断出这个是一个js请求，通过会在XHR里面，在这个里面找到疑似链接，追进去看看

![](https://tva1.sinaimg.cn/large/0081Kckwly1gl63czy5hxj31fu0u0naf.jpg)

> 通过请求可以看出页面的请求结果是json,并对返回的结果做了一个加密

![](https://tva1.sinaimg.cn/large/0081Kckwly1gl63jimbv3j31q60naq6s.jpg)
![](https://tva1.sinaimg.cn/large/0081Kckwly1gl63kuqj53j31ys0p4wh9.jpg)

> 找出加密数据位置，使用全局搜索关键字 `encrypt_data` 寻找可疑加密位置



![](https://tva1.sinaimg.cn/large/0081Kckwly1gl63n1clqwj31x70u0qdb.jpg)

> 通过仔细分析js页面中的六个关键字参数，找到最可疑的地方，打上断点



![](https://tva1.sinaimg.cn/large/0081Kckwly1gl63nur0ggj31mm0u0qg6.jpg)

> 打上断点后，重新发起请求，追进去找到数据加密位置，可疑看到这个地方就是加密的位置，找到方法`s`,`decode`，即刻完成数据解密,
> 其它参数是固定参数

![](https://tva1.sinaimg.cn/large/0081Kckwly1gl63nur0ggj31mm0u0qg6.jpg)

> 找函数方法，只需要把鼠标放到函数名上不动，出现详情后，点进去，把完整方法拿出来就可以使用了，如果使用过程中缺少变量，在源码中找到关键字补上即可。

![](https://tva1.sinaimg.cn/large/0081Kckwly1gl63x3nsxfj31x70u0n7n.jpg)

> 找到关键的三个函数，直接用python调用函数，传入要解密的值即可。 

![](https://tva1.sinaimg.cn/large/0081Kckwly1gl63zbrkj9j31c40segqu.jpg)

> 最后结果如图显示