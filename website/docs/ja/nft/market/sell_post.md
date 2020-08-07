# NFT出品ー金額変更

出品したNFTの金額変更

### パス
```
PUT /nft/{address}/market/{token_id}/publisher/sell
```

### パラメータ

|  パラメータ    |  型              | 説明                 |
| ------------ | ---------------- | ------------------- |
|  value       |  string          | 出品ETH指定          |

例：
```json
{"value": "0.12"}
```

### レスポンス
```json
Status Code: 200

{"message":"OK"}
```

### CURLサンプル
```bash
curl -XPUT \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 1589678198548' \
-d '{"value": "0.12"}' \
https://api.gobase.io/v1/nft/{0x12345}/market/{12}/publisher/sell
```
