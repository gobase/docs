# 認証

開発者ページ において発行した API key と API secret を使用します。

以下の情報を HTTP リクエストヘッダに含めます。

* X-Gobase-Access-Key: 開発者ページで発行した API key
* X-Gobase-Access-Timestamp: リクエスト時の Unix Timestamp
* X-Gobase-Access-Signature: 以下の方法でリクエストごとに生成した署名

`X-Gobase-Access-Signature` は、TIMESTAMP, HTTP メソッド, リクエストのパス, リクエストボディ を文字列として連結したものを、 API secret で HMAC-SHA256 署名を行った結果です。

```js
// Node.js サンプル
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
