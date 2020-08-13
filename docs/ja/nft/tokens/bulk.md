# NFT作成

NFT作成するAPI

### パス
```
POST /nft/{address}/tokens/create/bulk
```

### パラメータ

|  パラメータ    |  型              | 説明                 |
| ------------ | ---------------- | ------------------- |
|  name        |  string          | NFT名前              |
|  description |  string          | NFT説明文            |
|  image       |  string          | 画像ファイルURL       |

例：
```json
[
  {
    "name": "NFT Name",
    "description": "NFT Description",
    "image": "https://example.com/images/nft1.png"
  },
  {
    "name": "NFT Name2",
    "description": "NFT Description2",
    "image": "https://example.com/images/nft2.png"
  }
]
```

### レスポンス
```json
Status Code: 200

{
  "result": "OK",
  "error": null
}
```

### CURLサンプル
```bash
curl -XPOST \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 1589678198548' \
-d '{"name": "", "point": 100}' \
https://api.gobase.io/v1/nft/{0x12345}/tokens/create/bulk
```
