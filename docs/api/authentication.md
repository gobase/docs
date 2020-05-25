# Authentication

Use the API key and API secret issued on the [developer](https://developer.gobase.io) page.

Include the following information in your HTTP request headers.

* X-Gobase-Access-Key: The API key issued on the developer page.
* X-Gobase-Access-Timestamp: Unix Timestamp at request
* X-Gobase-Access-Signature: Signatures generated on a per-request basis in the following way

`X-Gobase-Access-Signature` is the result of concatenating TIMESTAMP, HTTP method, Request path, and Request body as strings, and signing HMAC-SHA256 with API secret.

### Example for nodejs
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

var text = timestamp + method + path + body;
var signature = crypto.createHmac('sha256', secret).update(text).digest('hex');

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

### Example for golang
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