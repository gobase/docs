# List of created tokens

List of created tokens

### Path
```
GET /v1/nft/publisher/{address}/tokens
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
/v1/nft/publisher/{address}/tokens?page=1&per_page=10&status=1,4&owner=0x12345...
```

### Responce
```json
Status Code: 200

{
  "result": {
    "tokens": [
      {
        "created": "2020-08-21T07:20:26.745Z",
        "owner": "0x0eb2F75e2D467e4604235e99E28b2fF4E4C2ec61",
        "status": 2,
        "token": {
          "description": "NFT Description",
          "image": "https://example.com/image/nft1.png",
          "name": "NFT1"
        },
        "token_id": "107",
        "tx_hash_buy": null,
        "tx_hash_refund": null,
        "tx_hash_sell": null,
        "updated": "2020-08-21T07:20:26.745Z",
        "wei": "567000000000000000"
      },
      {
        "created": "2020-08-21T07:20:26.745Z",
        "owner": "0x0eb2F75e2D467e4604235e99E28b2fF4E4C2ec61",
        "status": 2,
        "token": {
          "description": "NFT Description",
          "image": "https://example.com/image/nft2.png",
          "name": "NFT2"
        },
        "token_id": "108",
        "tx_hash_buy": null,
        "tx_hash_refund": null,
        "tx_hash_sell": null,
        "updated": "2020-08-21T07:20:26.745Z",
        "wei": "345000000000000000"
      }
    ],
    "total_count": 2,
    "total_page": 1
  },
  "error": null
}
```

### CURL Example
```bash
curl -XGET \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: ******' \
https://api.gobase.io/v1/nft/publisher/{address}/tokens?page=1&per_page=10&status=1,4&owner=0x12345..
```
