# Details of created tokens

Details of created tokens

### Path
```
GET /v1/nft/offchain/publisher/{address}/tokens/{token_id}
```

### Parameters

None

### Responce
```json
Status Code: 200

{
  "error": null,
  "result": {
    "token": {
      "created": "2020-08-16T23:49:37.889Z",
      "description": "NFT Description",
      "image": "https://example.com/image/nft1.png",
      "name": "NFT1",
      "owner": "0x9D7Fa65552609eDF74417485D80613da5eC09Fe5",
      "status": 2,
      "token_id": "107",
      "updated": "2020-08-16T23:49:37.889Z",
      "wei": "567000000000000000"
    }
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
https://api.gobase.io/v1/nft/offchain/publisher/{address}/tokens/{token_id}
```
