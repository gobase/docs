# NFT返品、返金

NFTの返品処理

### パス
```
POST /v1/nft/market/{address}/tokens/{token_id}/publisher/refund
```

### パラメータ

|  パラメータ    |  型              | 説明                          |
| ------------ | ---------------- | ---------------------------- |
|  tx_hash     |  string          | NFT購入時のTransaction Hash   |

例：
```json
{"tx_hash": "0x12345..."}
```

### レスポンス
```json
Status Code: 200

{
  "error": null,
  "result": {
    "message": "success",
    "tx_hash": "0xc2e3a5663836bb60975ba21adf..."
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
https://api.gobase.io/v1/nft/market/{address}/tokens/{token_id}/publisher/refund
```
