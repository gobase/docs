# 特定NFT取得

特定NFT取得

### パス
```
GET /nft/{address}/tokens/{token_id}
```

### パラメータ

なし

### レスポンス
```json
Status Code: 200

{
  "result": {
    "token": {
      "created": "2020-08-07T05:38:16.989Z",
      "description": "test2",
      "image": "https://example.com/image/nft2.png",
      "name": "test2",
      "owner": "0x12345...",
      "status": null,
      "token_id": 14,
      "updated": "2020-08-07T05:38:16.989Z",
      "wei": null
    }
  },
  "error": null
}
```

### CURLサンプル
```bash
curl -XGET \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 1589678198548' \
https://api.gobase.io/v1/nft/{0x12345...}/tokens/12
```
