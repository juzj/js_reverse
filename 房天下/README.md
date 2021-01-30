# 房天下 https://www.fang.com/


#### 解析房天下登陆
> 在输入框随便输入一个电话号码，密码，点击登陆，可以看到密码是加密的

![](https://tva1.sinaimg.cn/large/0081Kckwly1gl69mlhae8j32390u0wow.jpg)


> 我们使用关键字`pwd`全局搜索，可以看到有一个`ajax`请求，对密码进行了一下加密，在这里打一个断点

![](https://tva1.sinaimg.cn/large/0081Kckwly1gl69oiw0uoj31n20u0dt5.jpg)

> 追进去看看，可以看到这个就是一个`RSA`加密，我们把整个js复制一下存到本地，再把key找到就可以直接生成密码了，

![](https://tva1.sinaimg.cn/large/0081Kckwly1gl69r1yidzj31ij0u0nag.jpg)

> 全局搜索`key_to_encode`，找到搜索参数即可

![](https://tva1.sinaimg.cn/large/0081Kckwly1gl69t3u93aj31ip0u04ez.jpg)

> 效果图

![](https://tva1.sinaimg.cn/large/0081Kckwly1gl69tvd3mgj31cu0mu0yi.jpg)

