# ETH購入時Transaction情報を送信

ETH購入時Transaction情報を送信

### パス
```
POST /v1/nft/market/{address}/bundles/{bundle_id}/buy/transaction
```

### パラメータ

|  パラメータ    |  型              | 説明                     |
| ------------ | ---------------- | ----------------------- |
|  tx_hash     |  string          | トランザクションハッシュ値   |

例：
```json
{
  "tx_hash": "0x12345..."
}
```

### レスポンス
```json
Status Code: 200

{
  "error": null,
  "result": {
    "message": "success"
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
-d '{"tx_hash": "0x12345..."}' \
https://api.gobase.io/v1/nft/market/{address}/bundles/{bundle_id}/buy/transaction
```
