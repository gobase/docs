# API認証

開発者ページ において発行した API key と API secret を使用します。[開発者ページ](https://developer.gobase.io) から取得可能。

以下の情報をHTTPリクエストヘッダに含める。

* X-Gobase-Access-Key: 開発者ページで発行した API Key
* X-Gobase-Access-Timestamp: リクエスト時の Unix Timestamp
* X-Gobase-Access-Signature: リクエストごとに生成した署名

`X-Gobase-Access-Signature` は、Timestamp, HTTP Method, Request path, Request body を文字列として連結したものを、 API Secret で `HMAC-SHA256` 署名を行った結果です。
下の例を参考してください。

### Nodejsサンプル
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

### Go言語サンプル
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

### Python言語サンプル
```py
import os
import time
import json
import requests
import hmac
import hashlib

ENDPOINT_URL='https://api.gobase.io'

def make_hmac_sha256(key, message):
  signature = hmac.new(bytes(key, 'UTF-8'), bytes(message, 'UTF-8'), digestmod=hashlib.sha256).hexdigest()
  return signature

if __name__ == '__main__':
  api_key = os.environ.get('API_KEY')
  api_secret = os.environ.get('API_SECRET')

  timestamp= str(int(time.time()))
  method = 'POST'
  path = '/v1/point/send'
  body = {"addresses": ["0x7***", "0x8***"], "point":100}

  message = timestamp + method + path + json.dumps(body)
  signature = make_hmac_sha256(api_secret, message)

  headers = {
    'Content-Type': 'application/json',
    'X-Gobase-Access-Key': api_key,
    'X-Gobase-Access-Timestamp': timestamp,
    'X-Gobase-Access-Signature': signature
  }

  response = requests.post(ENDPOINT_URL + path, headers=headers, data= json.dumps(body).encode("utf-8"))
  print(response.status_code)
  print(response.text)
```
