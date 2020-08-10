# NFT返品、返金

NFTの返品処理

### パス
```
POST /nft/{address}/market/{token_id}/publisher/refund
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

{"message":"OK"}
```

### CURLサンプル
```bash
curl -XPOST \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 1589678198548' \
-d '{"tx_hash": "0x12345..."}' \
https://api.gobase.io/v1/nft/{0x12345}/market/{12}/publisher/refund
```
