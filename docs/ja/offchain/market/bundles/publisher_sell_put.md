# Bundle出品ー金額変更

出品したBundleの金額変更

### パス
```
PUT /v1/nft/offchain/market/{address}/bundles/{bundle_id}/publisher/sell
```

### パラメータ

|  パラメータ    |  型              | 説明                |
| ------------ | ---------------- | ------------------- |
|  eth         |  string          | 出品ETH指定          |

例：
```json
{
  "eth": "0.8",
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
curl -XPUT \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: ******' \
-d '{"eth": "0.8"}' \
https://api.gobase.io/v1/nft/offchain/market/{address}/bundles/{bundle_id}/publisher/sell
```
