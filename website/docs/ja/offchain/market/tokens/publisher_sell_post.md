# NFT出品

NFT出品するAPI

### パス
```
POST /v1/nft/offchain/market/{address}/tokens/{token_id}/publisher/sell
```

### パラメータ

|  パラメータ    |  型              | 説明                |
| ------------ | ---------------- | ------------------- |
|  eth         |  string          | 出品ETH指定          |

例：
```json
{
  "eth": "0.5",
}
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
-d '{"eth": "0.5"}' \
https://api.gobase.io/v1/nft/offchain/market/{address}/tokens/{token_id}/publisher/sell
```
