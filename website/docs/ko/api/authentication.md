# 기본인증

개발자 페이지에서 발행 한 API key와 API secret을 사용합니다.

다음 정보를 HTTP 요청 헤더에 포함합니다.

* X-Gobase-Access-Key: 개발자 페이지에서 발행 한 API key
* X-Gobase-Access-Timestamp: 요청시 Unix Timestamp
* X-Gobase-Access-Signature: 다음의 방법으로 요청마다 생성 한 서명

`X-Gobase-Access-Signature`은 TIMESTAMP, HTTP 메소드, 요청 경로 응답 본문을 문자열로 연결 한 것을, API secret에서 HMAC-SHA256 서명을 한 결과입니다.

### nodejs 예
```js
const request = require('request');
const crypto = require('crypto');

const EndPointURL = 'https://api.gobase.io';

const key = process.env.API_KEY;
const secret = process.env.API_SECRET;

const timestamp = Date.now().toString();
const method = 'POST';
const path = '/v1/point/send';
const body = JSON.stringify({
  "addresses": ["0x7***", "0x8***"],
  "point": 100
});

var message = timestamp + method + path + body;
var signature = crypto.createHmac('sha256', secret).update(message).digest('hex');

var options = {
  url: EndPointURL + path,
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
  if (err) {
    console.log(err)
  } else {
    console.log(payload);
  }
});
```

### Go 예
```go
package main

import (
	"bytes"
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"log"
	"net/http"
	"os"
	"strconv"
	"time"
)

// EndPointURL ...
const EndPointURL = "https://api.gobase.io"

func main() {
	apiKey := os.Getenv("API_KEY")
	apiSecret := os.Getenv("API_SECRET")

	timestamp := strconv.FormatInt(time.Now().Unix(), 10)
	method := http.MethodPost
	path := "/v1/point/send"
	body := `{"addresses":["0x7***", "0x8***"], "point":100}`
	msg := timestamp + method + path + body
	signature := makeHMACSha256(msg, apiSecret)

	req, err := http.NewRequest(
		method,
		EndPointURL+path,
		bytes.NewBuffer([]byte(body)),
	)
	if err != nil {
		log.Print(err)
		return
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-Gobase-Access-Key", apiKey)
	req.Header.Set("X-Gobase-Access-Timestamp", timestamp)
	req.Header.Set("X-Gobase-Access-Signature", signature)

	client := &http.Client{}
	res, err := client.Do(req)
	if err != nil {
		log.Print(err)
		return
	}
	defer res.Body.Close()
	var resBody interface{}
	if err := json.NewDecoder(res.Body).Decode(&resBody); err != nil {
		log.Print(err)
		return
	}
	bytes, err := json.Marshal(resBody)
	if err != nil {
		log.Print(err)
		return
	}
	log.Print(string(bytes))
}

func makeHMACSha256(msg, secret string) string {
	mac := hmac.New(sha256.New, []byte(secret))
	mac.Write([]byte(msg))
	return hex.EncodeToString(mac.Sum(nil))
}
```
