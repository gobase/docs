# APP推送

APP推送API是向DApps端指定的多个Ethereum地址发送推送的API。

### PATH
```
POST /push/send
```

### 参数

|  参数         |  类型            | 说明                               |
| ------------ | ---------------- | --------------------------------- |
|  addresses   |  string array    | 多个地址的数组                      |
|  title       |  object          | json格式的lang、text对象的数组       |
|  body        |  object          | json格式的lang、text对象的数组       |

例:
```json
{
	"title": [{
		"lang": "en",
		"text": "title"
	}, {
		"lang": "cn",
		"text": "主题"
	}],
	"body": [{
		"lang": "en",
		"text": "text"
	}, {
		"lang": "cn",
		"text": "内容"
	}],
	"addresses": ["0x1***", "0x2***"]
}
```

### 响应
```json
Status Code: 200

{"address_count": 2}
```

### CURL 例子
```
curl -XPOST \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 123456789' \
-d '{"title":[{"lang":"en","text":"title"},{"lang":"ja","text":"タイトル"}],"body":[{"lang":"en","text":"text"},{"lang":"ja","text":"本文"}],"addresses":["0x8238818c3b40f431f38b12fe7ecc210aa2256fde"]}' \
https://api.gobase.io/v1/push/send
```
