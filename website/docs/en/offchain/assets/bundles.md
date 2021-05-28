# List of bundles

List of bundles

### Path
```
GET /v1/nft/offchain/assets/{address}/bundles
```

### Parameters

|  Parameter   |  Type            | Description                 |
| ------------ | ---------------- | --------------------------- |
|  page        |  integer         | Page number, start at 1     |
|  per_page    |  integer         | Number of displays per page |
|  status      |  integer         | Status setting              |
|  owner       |  string          | Owner's address             |

Example:
```sh
/v1/nft/offchain/assets/{address}/bundles?page=1&per_page=10&status=1,4&owner=0x12345...
```

### Response
```json
Status Code: 200

{
  "error": null,
  "result": {
    "bundles": [
      {
        "bundle_id": 56,
        "created": "2020-08-18T02:25:03.255Z",
        "owner": "0x0eb2F75e2D467e4604235e99E28b2fF4E4C2ec61",
        "token_ids": [
          "110",
          "111"
        ],
        "tx_hash_buy": null,
        "tx_hash_refund": null,
        "tx_hash_sell": null,
        "updated": "2020-08-18T02:25:03.255Z",
        "wei": "345000000000000000"
      },
      {
        "bundle_id": 53,
        "created": "2020-08-17T01:31:07.189Z",
        "owner": "0x0eb2F75e2D467e4604235e99E28b2fF4E4C2ec61",
        "token_ids": [
          "103",
          "104",
          "105"
        ],
        "tx_hash_buy": null,
        "tx_hash_refund": null,
        "tx_hash_sell": null,
        "updated": "2020-08-17T01:31:07.189Z",
        "wei": "345000000000000000"
      }
    ],
    "total_count": 2,
    "total_page": 0
  }
}
```

### CURL Example
```bash
curl -XGET \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: ******' \
https://api.gobase.io/v1/nft/offchain/assets/{address}/bundles?page=1&per_page=10&status=1,4&owner=0x12345..
```
