# NFT一覧取得

NFT一覧取得API

### パス
```
GET /nft/{address}/tokens/list
```

### パラメータ

|  パラメータ    |  型              | 説明                       |
| ------------ | ---------------- | ------------------------- |
|  page        |  integer         | ページ番号、1からスタート     |
|  status      |  integer         | 状態設定                   |
|  owner       |  string          | 所有者アドレス指定           |

例：
```sh
/nft/{address}/tokens/list?page=1&status=0&owner=0x12345...
```

### レスポンス
```json
Status Code: 200

{
  "list": [
    {
      "created": "2020-08-07T05:38:16.989Z",
      "description": "test2",
      "image": "https://example.com/image/nft2.png",
      "name": "test2",
      "owner": "0x12345...",
      "status": null,
      "token_id": 14,
      "updated": "2020-08-07T05:38:16.989Z",
      "wei": null
    },
    {
      "created": "2020-08-07T05:38:17.020Z",
      "description": "test1",
      "image": "https://example.com/image/nft1.png",
      "name": "test1",
      "owner": "0x54321...",
      "status": null,
      "token_id": 13,
      "updated": "2020-08-07T05:38:17.020Z",
      "wei": null
    }
  ]
}
```

### CURLサンプル
```bash
curl -XGET \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 1589678198548' \
https://api.gobase.io/v1/nft/{0x12345...}/tokens/list?page=1&status=0&owner=0x54321...
```
