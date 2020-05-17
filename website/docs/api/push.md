# Push notification

Push Notification API

### PATH
```
POST /push/send
```

### Parameters

|  Parameter    |  Type           | Description                                 |
| ------------ | ---------------- | ------------------------------------------- |
|  addresses   |  string array    | address array format                        |
|  title       |  object          | Array of lang, text objects in json format  |
|  body        |  object          | Array of lang, text objects in json format  |

Example:
```json
{
	"title": [{
		"lang": "en",
		"text": "title"
	}, {
		"lang": "ja",
		"text": "タイトル"
	}],
	"body": [{
		"lang": "en",
		"text": "text"
	}, {
		"lang": "ja",
		"text": "本文"
	}],
	"addresses": ["0x1***", "0x2***"]
}
```

### Response
```json
Status Code: 200

{"address_count": 2}
```

### CURL Example
```js
curl -XPOST \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 123456789' \
-d '{"title":[{"lang":"en","text":"title"},{"lang":"ja","text":"タイトル"}],"body":[{"lang":"en","text":"text"},{"lang":"ja","text":"本文"}],"addresses":["0x8238818c3b40f431f38b12fe7ecc210aa2256fde"]}' \
https://api.gobase.io/v1/push/send
```
