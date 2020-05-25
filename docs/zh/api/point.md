# GP API

GP = GO!Wallet Point

GP授予API是向指定的多个Ethereum地址授予GP的API。

### PATH
```
POST /point/send
```

### 参数

|  参数         |  类型            |  说明            |
| ------------ | ---------------- | --------------- |
|  addresses   |  string array    | 多个地址的数组    |
|  point       |  integer         | 授予Point数      |

例:
```json
{
	"addresses": ["0x7***", "0x8***"],
	"point": 100
}
```

### 响应
```json
Status Code: 200

{"address_count": 2, "point": 100}
```

### CURL 例子
```bash
curl -XPOST \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 1589678198548' \
-d '{"addresses": ["0x7***", "0x8***"], "point": 100}' \
https://api.gobase.io/v1/points
```
