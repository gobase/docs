# Webhook

Send a request via webhook when NFT is created successfully or when the owner is changed.

The Webhook URL and Credential can be configured from the [Developer Page](https://developer.gobase.io).

### Webhook request header

```
X-Gobase-Webhook-Credential: {Credential}
```

### Webhook request body
1. After the completion of NFT

```json
{
  "event": "create",
  "status": "success | failure",
  "address": {address},
  "token_id": {token_id},
  "mapping_id": {mapping_id},
  "tx_hash": {transaction_hash},
  "from": {from},
  "to": {to}
}
```

2. After the owner changed

```json
{
  "event": "transfer",
  "status": "success | failure",
  "address": {address},
  "token_id": {token_id},
  "mapping_id": {mapping_id},
  "tx_hash": {transaction_hash},
  "from": {from},
  "to": {to}
}
```
