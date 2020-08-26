# Webhook

NFT作成成功時、所有者変更時にwebhookでリクエスを送ります。

Webhook URLと認証キーは [開発者ページ](https://developer.gobase.io) から設定します。

### webhook request parameter
1. NFT作成後
```
{
  "event": "create",
  "address": {address},
  "token_id": {token_id},
  "tx_hash": {transaction_hash},
  "from": {from},
  "to": {to}
}
```

2. 所有者変更後
```
{
  "event": "transfer",
  "address": {address},
  "token_id": {token_id},
  "tx_hash": {transaction_hash},
  "from": {from},
  "to": {to}
}
```
