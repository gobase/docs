# NFT作成

NFT作成するAPI

### パス
```
POST /v1/nft/offchain/create/{address}/tokens
```

### パラメータ

|  パラメータ    |  型              | 説明                 |
| ------------ | ---------------- | ------------------- |
|  name        |  string          | NFT名前              |
|  description |  string          | NFT説明文            |
|  image       |  string          | 画像ファイルURL       |
|  mapping_id  |  string          | マッピング用ID        |

例：
```json
[
  {
    "name": "NFT Name",
    "description": "NFT Description",
    "image": "https://example.com/images/nft1.png",
    "mapping_id": "t123"
  },
  {
    "name": "NFT Name2",
    "description": "NFT Description2",
    "image": "https://example.com/images/nft2.png",
    "mapping_id": "t456"
  }
]
```

### レスポンス
```json
Status Code: 200

{
  "error":null,
  "result": {
    "message":"success"
  }
}
```

### CURLサンプル
```bash
curl -XPOST \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: ******' \
-d '[{"name": "NFT Name", "description": "NFT Description", "image": "https://example.com/images/nft1.png"}]' \
https://api.gobase.io/v1/nft/offchain/create/{address}/tokens
```
