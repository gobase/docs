# Create NFT

Create NFT

### Path
```
POST /v1/nft/create/{address}/tokens
```

### Parameters

|  Parameter   |  Type            | Description         |
| ------------ | ---------------- | ------------------- |
|  name        |  string          | Name of NFT名前      |
|  description |  string          | Description of NFT  |
|  image       |  string          | URL for image       |
|  mapping_id  |  string          | ID for mapping      |

Example:
```json
[
  {
    "name": "NFT Name",
    "description": "NFT Description",
    "image": "https://example.com/images/nft1.png",
    "mapping_id": "t123"
  },
  {
    "name": "NFT Name2",
    "description": "NFT Description2",
    "image": "https://example.com/images/nft2.png",
    "mapping_id": "t456"
  }
]
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
curl -XPOST \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: ******' \
-d '[{"name": "NFT Name", "description": "NFT Description", "image": "https://example.com/images/nft1.png"}]' \
https://api.gobase.io/v1/nft/create/{address}/tokens
```
