# Get Stripe information

Get Stripe information

### Path
```
POST /v1/nft/market/{address}/tokens/{token_id}/buy/stripe
```

### Parameters

|  Parameter   |  Type            | Description                             |
| ------------ | ---------------- | --------------------------------------- |
|  to          |  string          | Purchaser's ETH address                 |
|  currency    |  string          | usd, jpy                                |
|  amount      |  string          | Specify the amount                      |
|  success_url |  string          | Redirect URL after successful payment 　|
|  cancel_url  |  string          | Redirect URL for payment cancellation   |

Example:
```json
{
  "to": "0x12345...",
  "currency": "jpy",
  "amount": "1000",
  "success_url": "https://example.com/stripe/success",
  "cancel_url": "https://example.com/stripe/cancel"
}
```

### Responce
```json
Status Code: 200

{
  "error": null,
  "result": {
    "stripe_public_key": "XXXX",
    "stripe_session_id": "cs_test_XXX"
  }
}
```

### CURL Example
```bash
curl -XPOST \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 1589678198548' \
-d '{"to": "0x12345...", "success_url": "https://example.com/stripe/success", "cancel_url": "https://example.com/stripe/cancel"}' \
https://api.gobase.io/v1/nft/market/{address}/tokens/{token_id}/buy/stripe
```

### JS Example
```js
<script src="https://js.stripe.com/v3"></script>

<script>
  const stripe = Stripe('{stripe_public_key}');
  stripe.redirectToCheckout({
    sessionId: '{stripe_session_id}'
  }).then(function (result) {
    console.log(result)
  });
</script>
```
