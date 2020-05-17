# プッシュ通知API

プッシュ通知APIはDApps側で指定したイーサリアムアドレスに対してプッシュ通知を送るAPIです。

### パス
```
POST /push/send
```

### パラメータ

|  パラメータ    |  型              | 説明                               |
| ------------ | ---------------- | --------------------------------- |
|  addresses   |  string array    | 複数アドレスの配列形式                |
|  title       |  object          | json形式で lang, text objectの配列  |
|  body        |  object          | json形式で lang, text objectの配列  |

例:
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

### レスポンス
```json
Status Code: 200

{"address_count": 2}
```

### CURLサンプル
```js
curl -XPOST \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 123456789' \
-d '{"title":[{"lang":"en","text":"title"},{"lang":"ja","text":"タイトル"}],"body":[{"lang":"en","text":"text"},{"lang":"ja","text":"本文"}],"addresses":["0x8238818c3b40f431f38b12fe7ecc210aa2256fde"]}' \
https://api.gobase.io/v1/push/send
```
