# ETH購入時のSignature取得

ETH購入時のSignature取得

### パス
```
POST /nft/{address}/market/{token_id}/buy/stripe/session
```

### パラメータ

|  パラメータ    |  型              | 説明                                  |
| ------------ | ---------------- | ------------------------------------- |
|  to          |  string          | 購入者ETHアドレス                       |
|  success_url |  string          | Stripe決済成功後のリダイレクトURL   　　　 |
|  cancel_url  |  string          | Stripe決済キャンセル時のリダイレクトURL    |

例：
```json
{"to": "0x12345...", "success_url": "https://example.com/stripe/success", "cancel_url": "https://example.com/stripe/cancel"}
```

### レスポンス
```json
Status Code: 200

{
  "session_id": "cs_test_RqglKe3bb7HFB4CWSBSMEGX2jnSa8rfLGanivOnvlRcw4IweRjjQyoVJ"
}
```

### CURLサンプル
```bash
curl -XPOST \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 1589678198548' \
-d '{"to": "0x12345...", "success_url": "https://example.com/stripe/success", "cancel_url": "https://example.com/stripe/cancel"}' \
https://api.gobase.io/v1/nft/{0x12345...}/markeet/12/buy/eth/signature
```
