# Fiat API

Fiatで購入するAPI

### パス
```
POST /v1/fiat/session
```

### パラメータ

|  パラメータ          |  型              | 説明                               |
| ------------------ | ---------------- | --------------------------------- |
|  logo_image_url    |  string          | 決済確認画面に表示するロゴイメージ      |
|  item_name         |  string          | アイテム名                          |
|  item_value        |  integer         | 付与するアイテムの数                  |
|  jpy_value         |  integer         | 円決済時使用                        |
|  usd_value         |  float           | ドル決済時使用                      |
|  eth_value         |  string          | ETH決済時使用、weiで指定             |
|  tax_included      |  boolean         | 消費税込みか抜きか指定               |
|  user_address      |  string          | 付与対象ユーザーアドレス              |
|  success_url       |  string          | Fiat決済成功後のURL指定             |
|  cancel_url        |  string          | Fiat決済キャンセル時のURL指定        |

例:
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

### レスポンス
```json
Status Code: 200

{
	"order_name": "go_xxxxx",
	"redirect_url": "https://api.gobase.io/xxxx",
	"error": null
}
```

### CURLサンプル
```sh
curl -XPOST \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 123456789' \
-d '{ "logo_image_url": "https://example.com/images/dapp_logo.png", "item_name": "GUM", "item_value": 100, "jpy_value": 10998, "tax_included": true, "user_address": "0x1234", "success_url": "https://example.com/fiat/success", "cancel_url": "https://example.com/fiat/cancel", }' \
https://api.gobase.io/v1/fiat/session
```

## Webhook API
決済が成功するとwebhookで通知される。webhook URLと認証情報は https://developer.gobase.io で登録。

### webhook header
```json
"Content-Type": "application/json"
"X-Gobase-Webhook-Credential": "xxxxxxx"
```

### webhook parameter
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
