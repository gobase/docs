# Transfer bundle

Transfer bundle

### Path
```
POST /v1/nft/offchain/market/{address}/bundles/{bundle_id}/publisher/transfer
```

### Parameters

|  Parameter   |  Type            | Description                           |
| ------------ | ---------------- | ------------------------------------- |
|  from        |  string          | ETH address from                      |
|  to          |  string          | ETH address to                        |

Example:
```json
{
  "from": "0x12345...",
  "to": "0x54321..."
}
```

### Responce
```json
Status Code: 200

{
  "error": null,
  "result": {
    "tx_hash": "0xf6e0f181023..."
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
-d '{"from": "0x12345...", "to": "0x54321..."}' \
https://api.gobase.io/v1/nft/offchain/market/{address}/bundles/{bundle_id}/publisher/transfer
```
