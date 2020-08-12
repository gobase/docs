# ETH購入時のSignature取得

ETH購入時のSignature取得

### パス
```
GET /nft/{address}/market/{token_id}/buy/eth/signature
```

### パラメータ

なし

### レスポンス
```json
Status Code: 200

{
  "message": "0xb6eb778e61367e51d2bbb444d5a9b1b84532a385b13d50b25de717f22c07333c"
}
```

### CURLサンプル
```bash
curl -XGET \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 1589678198548' \
https://api.gobase.io/v1/nft/{0x12345...}/market/12/buy/eth/signature
```
