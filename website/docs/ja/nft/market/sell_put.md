# NFT出品

NFT出品するAPI

### パス
```
POST /nft/{address}/market/{token_id}/publisher/sell
```

### パラメータ

|  パラメータ    |  型              | 説明                |
| ------------ | ---------------- | ------------------- |
|  value       |  string          | 出品ETH指定           |

例：
```json
{"value": "0.01"}
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
-d '{"value": "0.01"}' \
https://api.gobase.io/v1/nft/{0x12345}//market/{token_id}/publisher/sell
```
