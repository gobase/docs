# Webhook

NFT作成成功時、所有者変更時にwebhookでリクエスを送ります。

Webhook URLとCredentialは [開発者ページ](https://developer.gobase.io) から設定します。

### Webhook request header

```
X-Gobase-Webhook-Credential: {Credential}
```

### Webhook request body
1. NFT作成後

```json
{
  "event": "create",
  "address": {address},
  "token_id": {token_id},
  "mapping_id": {mapping_id},
  "tx_hash": {transaction_hash},
  "from": {from},
  "to": {to}
}
```

2. 所有者変更後

```json
{
  "event": "transfer",
  "address": {address},
  "token_id": {token_id},
  "mapping_id": {mapping_id},
  "tx_hash": {transaction_hash},
  "from": {from},
  "to": {to}
}
```
