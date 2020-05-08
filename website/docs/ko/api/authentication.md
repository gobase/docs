# 기본인증

개발자 페이지에서 발행 한 API key와 API secret을 사용합니다.

다음 정보를 HTTP 요청 헤더에 포함합니다.

* X-Gobase-Access-Key: 개발자 페이지에서 발행 한 API key
* X-Gobase-Access-Timestamp: 요청시 Unix Timestamp
* X-Gobase-Access-Signature: 다음의 방법으로 요청마다 생성 한 서명

`X-Gobase-Access-Signature`은 TIMESTAMP, HTTP 메소드, 요청 경로 응답 본문을 문자열로 연결 한 것을, API secret에서 HMAC-SHA256 서명을 한 결과입니다.

```js
// Node.js 예
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
