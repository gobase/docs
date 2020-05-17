# GP API

GP = GO!Wallet Point

The GP granting API is an API that grants GP to the specified Ethereum address.

### PATH
```
POST /points
```

### Parameter

|  Parameter   |  Type            | Description       |
| ------------ | ---------------- | ----------------- |
|  addresses   |  string array    | Address array     |
|  point       |  integer         | Number of points  |

Example:
```json
{
	"addresses": ["0x7***", "0x8***"],
	"point": 100
}
```

### Response
```json
Status Code: 200

{"address_count": 2, "point": 100}
```

### CURL Example
```bash
curl -XPOST \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 1589678198548' \
-d '{"addresses": ["0x7***", "0x8***"], "point": 100}' \
https://api.gobase.io/v1/points
```
