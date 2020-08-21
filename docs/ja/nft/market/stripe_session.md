# Stripeセッション取得

Stripeセッション取得

### パス
```
POST /nft/{address}/market/{token_id}/buy/stripe/session
```

### パラメータ

|  パラメータ    |  型              | 説明                                  |
| ------------ | ---------------- | ------------------------------------- |
|  to          |  string          | 購入者ETHアドレス                       |
|  currency    |  string          | usd, jpy                              |
|  success_url |  string          | Stripe決済成功後のリダイレクトURL   　　　 |
|  cancel_url  |  string          | Stripe決済キャンセル時のリダイレクトURL    |

例：
```json
{
  "to": "0x12345...",
  "currency": "jpy",
  "success_url": "https://example.com/stripe/success",
  "cancel_url": "https://example.com/stripe/cancel"
}
```

### レスポンス
```json
Status Code: 200

{
  "error": null,
  "result": {
    "stripe_session_id": "cs_test_XXX",
    "stripe_public_key": "XXXX"
  }
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
https://api.gobase.io/v1/nft/{0x12345...}/market/12/buy/eth/signature
```

### Stripe Javascriptサンプル
```
<script src="https://js.stripe.com/v3"></script>

<script>
  var stripe = Stripe('{stripe_public_key}');
  stripe.redirectToCheckout({
    sessionId: '{stripe_session_id}'
  }).then(function (result) {
    console.log(result)
  });
</script>
```
