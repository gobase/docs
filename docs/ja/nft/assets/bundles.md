# NFT一覧取得

NFT一覧取得API

### パス
```
GET /v1/nft/assets/{address}/bundles
```

### パラメータ

|  パラメータ    |  型              | 説明                       |
| ------------ | ---------------- | ------------------------- |
|  page        |  integer         | ページ番号、1からスタート     |
|  per_page    |  integer         | 1ページの表示件数            |
|  status      |  integer         | 状態設定                   |
|  owner       |  string          | 所有者アドレス指定           |

例：
```sh
/v1/nft/assets/{address}/bundles?page=1&per_page=10&status=1,4&owner=0x12345...
```

### レスポンス
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
          110,
          111
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
          103,
          104,
          105
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

### CURLサンプル
```bash
curl -XGET \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: ******' \
https://api.gobase.io/v1/nft/assets/{address}/bundles?page=1&per_page=10&status=1,4&owner=0x12345..
```
