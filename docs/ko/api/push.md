# Push 알림

Push 알림 API는 DApps 측에서 지정한 Ehtereum 주소에 대해 Push 알림을 보내는 API입니다.

### PATH
```
POST /push/send
```

### 변수

|  변수         |  형               | 설명                             |
| ------------ | ---------------- | ------------------------------- |
|  addresses   |  string array    | Ethereum 주소의 배열 형식           |
|  title       |  object          | json형식의 lang, text object 배열  |
|  body        |  object          | json형식의 lang, text object 배열  |

예:
```json
{
	"title": [{
		"lang": "en",
		"text": "title"
	}, {
		"lang": "ja",
		"text": "タイトル"
	}],
	"body": [{
		"lang": "en",
		"text": "text"
	}, {
		"lang": "ja",
		"text": "本文"
	}],
	"addresses": ["0x1***", "0x2***"]
}
```

### 응밥
```json
Status Code: 200

{"address_count": 2}
```

### CURL 예시
```
curl -XPOST \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 123456789' \
-d '{"title":[{"lang":"en","text":"title"},{"lang":"ja","text":"タイトル"}],"body":[{"lang":"en","text":"text"},{"lang":"ja","text":"本文"}],"addresses":["0x8238818c3b40f431f38b12fe7ecc210aa2256fde"]}' \
https://api.gobase.io/v1/push/send
```
