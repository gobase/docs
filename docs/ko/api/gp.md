# GP 부여

GP = GO!Wallet Point

GP 부여 API는 지정한 Ethereum 주소에 GP를 부여하는 API입니다.

### PATH
```
POST /points
```

### 변수

|  변수         |  형               | 설명                    |
| ------------ | ---------------- | ---------------------- |
|  addresses   |  string array    | Ethereum 주소의 배열 형식  |
|  point       |  integer         | 부여하는 Point수          |

例：
```json
{
	"addresses": ["0x7***", "0x8***"],
	"point": 100
}
```

### 응밥
```json
Status Code: 200

{"address_count": 2, "point": 100}
```

### CURL 예시
```bash
curl -XPOST \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 1589678198548' \
-d '{"addresses": ["0x7***", "0x8***"], "point": 100}' \
https://api.gobase.io/v1/points
```
