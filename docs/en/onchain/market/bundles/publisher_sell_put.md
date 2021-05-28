# Change amount

Change amount

### Path
```
PUT /v1/nft/market/{address}/bundles/{bundle_id}/publisher/sell
```

### Parameters

|  Parameter   |  Type            | Description         |
| ------------ | ---------------- | ------------------- |
|  eth         |  string          | ETH                 |

Example:
```json
{
  "eth": "0.8",
}
```

### Responce
```json
Status Code: 200

{
  "error":null,
  "result": {
    "message":"success"
  }
}
```

### CURL Example
```bash
curl -XPUT \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: ******' \
-d '{"eth": "0.8"}' \
https://api.gobase.io/v1/nft/market/{address}/bundles/{bundle_id}/publisher/sell
```
