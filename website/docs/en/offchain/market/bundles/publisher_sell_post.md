# Sell bundle

Sell bundle

### Path
```
POST /v1/nft/offchain/market/{address}/bundles/publisher/sell
```

### Parameters

|  Parameter   |  Type            | Description         |
| ------------ | ---------------- | ------------------- |
|  token_ids   |  string array    | Array of token_id   |
|  eth         |  string          | ETH                 |

Example:
```json
{
  "token_ids": [
    "11",
    "12",
    "13",
    "14",
    "15"
  ],
  "eth": "0.5",
}
```

### Rexponce
```json
Status Code: 200

{
  "error":null,
  "result": {
    "bundle_id":58,
    "message":"success"
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
-d '{"token_ids": ["11","12","13","14","15"],"eth": "0.5"}' \
https://api.gobase.io/v1/nft/offchain/market/{address}/bundles/publisher/sell
```
