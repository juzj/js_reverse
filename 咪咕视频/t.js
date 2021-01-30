

function bodyRSA()
{
    var key = RSAUtils.getKeyPair("010001","","00833c4af965ff7a8409f8b5d5a83d87f2f19d7c1eb40dc59a98d2346cbb145046b2c6facc25b5cc363443f0f7ebd9524b7c1e1917bf7d849212339f6c1d3711b115ecb20f0c89fc2182a985ea28cbb4adf6a321ff7e715ba9b8d7261d1c140485df3b705247a70c28c9068caabbedbf9510dada6d13d99e57642b853a73406817");
    return key
}
function get_encrypt(password) {
    key = bodyRSA();
    var a = RSAUtils.encryptedString(key,password)

    //var b = RSAUtils.encryptedString(key,username)
    console.log(a)
    console.log('----------------------------------')
    //console.log(b)
    return a
}
get_encrypt('123456')
