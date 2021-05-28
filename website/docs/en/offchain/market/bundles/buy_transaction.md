# Send TxHash at the time of purchase

Send TxHash at the time of purchase

### Path
```
POST /v1/nft/offchain/market/{address}/bundles/{bundle_id}/buy/transaction
```

### Parameters

|  Parameter   |  Type            | Description             |
| ------------ | ---------------- | ----------------------- |
|  tx_hash     |  string          | Transaction hash value  |

Example:
```json
{
  "tx_hash": "0x12345..."
}
```

### Responce
```json
Status Code: 200

{
  "error": null,
  "result": {
    "message": "success"
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
https://api.gobase.io/v1/nft/offchain/market/{address}/bundles/{bundle_id}/buy/transaction
```
