# Bundle出品

Bundle出品するAPI

### パス
```
POST /v1/nft/market/{address}/bundles/publisher/sell
```

### パラメータ

|  パラメータ    |  型              | 説明                |
| ------------ | ---------------- | ------------------- |
|  token_ids   |  string array    | token_id配列        |
|  eth         |  string          | 出品ETH指定          |

例：
```json
{
  "token_ids": [
    "11",
    "12",
    "13",
    "14",
    "15"
  ],
  "eth": "0.5",
}
```

### レスポンス
```json
Status Code: 200

{
  "error":null,
  "result": {
    "bundle_id":58,
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
-d '{"token_ids": ["11","12","13","14","15"],"eth": "0.5"}' \
https://api.gobase.io/v1/nft/market/{address}/bundles/publisher/sell
```
