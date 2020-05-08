# GP급여

GP付与APIは指定したイーサリアムアドレスにGPを付与するAPIです。

### パラメータ

|  パラメータ    |  型              | 説明                 |
| ------------ | ---------------- | ------------------- |
|  addresses   |  string array    | 複数アドレスの配列形式  |
|  point       |  integer         | 付与するポイント数     |

### レスポンス
```json
{"error": null, "status": "ok"}
```

### CURLサンプル
```js
curl -XPOST \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 123456789' \
-d '{"title":[{"lang":"en","text":"title"},{"lang":"ja","text":"タイトル"}],"body":[{"lang":"en","text":"text"},{"lang":"ja","text":"本文"}],"addresses":["0x8238818c3b40f431f38b12fe7ecc210aa2256fde"]}' \
https://api.gobase.io/v1/push/create
```

