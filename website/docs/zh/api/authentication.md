# API认证

使用开发者页面上发布的API密钥和API秘密。

在HTTP请求标题中包含以下信息。

* X-Gobase-Access-Key: 开发者页面上发布的API密钥
* X-Gobase-Access-Timestamp: 发请求时的 Unix Timestamp
* X-Gobase-Access-Signature: 按以下方式每项请求生成的签名

`X-Gobase-Access-Signature` 是将TIMESTAMP、HTTP方法、请求路径和请求体作为字符串串串联起来，然后用API的秘密签署HMAC-SHA256。

```js
// Node.js 例子
var request = require('request');
var crypto = require('crypto');

var key = '{{ YOUR API KEY }}';
var secret = '{{ YOUR API SECRET }}';

var timestamp = Date.now().toString();
var method = 'GET';
var path = '/v1/status';
var body = JSON.stringify({
});

var text = timestamp + method + path + body;
var signature = crypto.createHmac('sha256', secret).update(text).digest('hex');

var options = {
    url: 'https://api.gobase.io' + path,
    method: method,
    body: body,
    headers: {
        'X-Gobase-Access-Key': key,
        'X-Gobase-Access-Timestamp': timestamp,
        'X-Gobase-Access-Signature': signature,
        'Content-Type': 'application/json'
    }
};
request(options, function (err, response, payload) {
    console.log(payload);
});
```
