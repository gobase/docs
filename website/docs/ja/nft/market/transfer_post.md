# NFT配布、所有者変更

NFT配布、所有者変更API

### パス
```
POST /nft/{address}/market/{token_id}/publisher/transfer
```

### パラメータ

|  パラメータ    |  型              | 説明                                  |
| ------------ | ---------------- | ------------------------------------- |
|  from        |  string          | 現在所有者ETHアドレス                    |
|  to          |  string          | 配布先ETHアドレス                       |

例：
```json
{"from": "0x12345...", "to": "0x54321..."}
```

### レスポンス
```json
Status Code: 200

{
  "error": null,
  "result": {
    "tx_hash": "0xABC..."
  }
}
```

### CURLサンプル
```bash
curl -XPOST \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 1589678198548' \
-d '{"from": "0x12345...", "to": "0x54321..."}' \
https://api.gobase.io/v1/nft/{0x12345...}/market/12/publisher/transfer
```
