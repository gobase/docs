# Fiat API

## Session

API for purchasing with Fiat

### Path
```
POST /v1/fiat/session
```

### Parameter

|  Parameters        |  Type            | Description                                            |
| ------------------ | ---------------- | ------------------------------------------------------ |
|  logo_image_url    |  string          | Logo image displayed on the payment confirmation screen|
|  item_name         |  string          | Item Name                                              |
|  item_value        |  integer         | Number of items                                        |
|  jpy_value         |  integer         | Use when settling in yen                               |
|  usd_value         |  float           | Use when settling in usd                               |
|  eth_value         |  string          | Used for ETH settlement, specified in wei              |
|  tax_included      |  boolean         | Consumption tax included flag                          |
|  user_address      |  string          | User address                                           |
|  success_url       |  string          | URL to do after successful Fiat payment                |
|  cancel_url        |  string          | URL to do after Fiat payment cancellation              |

Example:
```json
{
	"logo_image_url": "https://example.com/images/dapp_logo.png",
	"item_name": "GUM",
	"item_value": 100,
	"jpy_value": 1100,
	"tax_included": true,
	"user_address": "0x1234",
	"success_url": "https://example.com/fiat/success",
	"cancel_url": "https://example.com/fiat/cancel",
}
```

### Response
```json
Status Code: 200

{
	"order_name": "go_xxxxx",
	"redirect_url": "https://api.gobase.io/xxxx",
	"error": null
}
```

### CURL Example
```sh
curl -XPOST \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 123456789' \
-d '{ "logo_image_url": "https://example.com/images/dapp_logo.png", "item_name": "GUM", "item_value": 100, "jpy_value": 10998, "tax_included": true, "user_address": "0x1234", "success_url": "https://example.com/fiat/success", "cancel_url": "https://example.com/fiat/cancel", }' \
https://api.gobase.io/v1/fiat/session
```

## Webhook
Webhook URL and HTTP header credentials are registered with Dapps at https://developer.gobase.io. If the payment is successful, you will be notified via Webhook.

### Webhook header
```json
"Content-Type": "application/json"
"X-Gobase-Authorization": "xxxxxxx"
```

### Webhook parameter
```json
{
	"order_name": "go_xxxx",
	"nonce": 1,
	"user_address": "0x1234",
	"item_name": "GUM",
	"item_value": 100,
	"jpy_value": 1100,
	"tax_included": true,
}
```
