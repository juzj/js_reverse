var c = require("crypto-js");

function Encrypt(l) {
    var n = c.enc.Utf8.parse("t171420100302rsa")
        , t = c.enc.Utf8.parse("t171420100302rsa")
        , e = c.enc.Utf8.parse(l)
        , a = c.AES.encrypt(e, n, {
        iv: t,
        mode: c.mode.CBC,
        padding: c.pad.Pkcs7
    });
    return c.enc.Base64.stringify(a.ciphertext)
}

function test() {
    var l = '{"body":{"loginMethod":"1","name":"13520296692","password":"12312123qq"},"head":{"userCode":null,"channelCode":"101","transTime":1598183451888,"transToken":"","customerId":null,"transSerialNumber":""}}'
    // var l = '{"body":{"loginMethod":"1","name":"15555555555","password":"11111111"},"head":{"userCode":null,"channelCode":"101","transTime":1576301342700,"transToken":"","customerId":null,"transSerialNumber":""}}'
    return Encrypt(l)
}


console.log(test())






