# GP付与API

GP = GO!Wallet Point

GP付与APIは指定したイーサリアムアドレスにGPを付与するAPIです。

### パス
```
POST /point/send
```

### パラメータ

|  パラメータ    |  型              | 説明                 |
| ------------ | ---------------- | ------------------- |
|  addresses   |  string array    | 複数アドレスの配列形式  |
|  point       |  integer         | 付与するポイント数     |

例：
```json
{
	"addresses": ["0x7***", "0x8***"],
	"point": 100
}
```

### レスポンス
```json
Status Code: 200

{"address_count": 2, "point": 100}
```

### CURLサンプル
```bash
curl -XPOST \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 1589678198548' \
-d '{"addresses": ["0x7***", "0x8***"], "point": 100}' \
https://api.gobase.io/v1/points
```
