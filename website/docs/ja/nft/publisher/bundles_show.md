# 特定Bundle取得

特定Bundle取得

### パス
```
GET /v1/nft/publisher/{address}/bundles/{bundle_id}
```

### パラメータ

なし

### レスポンス
```json
Status Code: 200

{
  "error": null,
  "result": {
    "bundle": {
      "bundle_id": 58,
      "created": "2020-08-21T13:41:32.057Z",
      "owner": "0x0eb2F75e2D467e4604235e99E28b2fF4E4C2ec61",
      "token_ids": [
        166,
        164,
        165
      ],
      "tx_hash_buy": "0xbe370807164880652b242655d6dc7a3c7b94b4d64a1ac7497b71984dfbd38e06",
      "tx_hash_refund": null,
      "tx_hash_sell": null,
      "updated": "2020-08-21T13:41:32.057Z",
      "wei": "0"
    }
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
https://api.gobase.io/v1/nft/publisher/{address}/bundles/{bundle_id}
```
