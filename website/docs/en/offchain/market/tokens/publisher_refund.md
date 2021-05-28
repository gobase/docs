# Returns and Refunds

Returns and Refunds

### Path
```
POST /v1/nft/offchain/market/{address}/tokens/{token_id}/publisher/refund
```

### Parameters

|  Parameter   |  Type            | Description                               |
| ------------ | ---------------- | ----------------------------------------- |
|  tx_hash     |  string          | Transaction Hash at the time of purchase  |

Example:
```json
{"tx_hash": "0x12345..."}
```

### Responce
```json
Status Code: 200

{
  "error": null,
  "result": {
    "message": "success",
    "tx_hash": "0xc2e3a5663836bb60975ba21adf..."
  }
}
```

### CURL Example
```bash
curl -XPOST \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: ******' \
-d '{"tx_hash": "0x12345..."}' \
https://api.gobase.io/v1/nft/offchain/market/{address}/tokens/{token_id}/publisher/refund
```
