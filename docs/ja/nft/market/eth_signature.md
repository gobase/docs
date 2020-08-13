# ETH購入時のSignature取得

ETH購入時のSignature取得

### パス
```
GET /nft/{address}/market/{token_id}/buy/eth/signature
```

### パラメータ

なし

### レスポンス
```json
Status Code: 200

{
  "error": null,
  "result": {
    "message": "0xb6eb778e61367e51d2bbb444d5a9b1b84532a385b13d50b25de717f22c07333c",
    "wei": "10000000000000000",
    "owner": "0x1234"
  }
}
```

### CURLサンプル
```bash
curl -XGET \
-H 'Content-Type:application/json' \
-H 'X-Gobase-Access-Key: ******' \
-H 'X-Gobase-Access-Signature: ******' \
-H 'X-Gobase-Access-Timestamp: 1589678198548' \
https://api.gobase.io/v1/nft/{0x12345...}/market/12/buy/eth/signature
```

### Signatureによる購入JSサンプル
```js
  const {web3, account} = await setupWeb3();
  const nftContractAddress = '{nft_contract_address}';
  const message = '{message}';
  const tokenId = '{token_id}';
  const owner = '{owner}';
  const wei = '{wei}';

  const marketContractABI = [{"inputs":[],"payable":false, ....}];
  const marketContractAddress = '{market_contract_address}';
  const marketContract = new web3.eth.Contract(marketContractABI, marketContractAddress);
  marketContract.methods.purchaseByETH(message, nftContractAddress, tokenId, owner).send(
    {
      from: account,
      value: wei,
    }, (err, tx_hash) => {
    if (err) {
      console.log(err);
    } else {
      // TODO
      // tx_hashをサーバーに送信して、GO BASEに送信
      // 「ETHトランザクション情報送信」参照
    }
  });
```
