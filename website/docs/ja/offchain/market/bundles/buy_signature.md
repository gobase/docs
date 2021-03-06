# ETH購入時のSignature取得

ETH購入時のSignature取得

### パス
```
GET /v1/nft/offchain/market/{address}/bundles/{bundle_id}/buy/signature
```

### パラメータ

なし

### レスポンス
```json
Status Code: 200

{
  "error": null,
  "result": {
    "signature": "0xd6b3f425c4c6f318e98cddc2db42afd60569f52d0c8a127e1cd8cda7d232b310",
    "token_ids": [
      "164",
      "165",
      "166"
    ],
    "wei": "567000000000000000",
    "market_contract_address": "0x******",
    "market_contract_abi": "[{\"inputs\":[],\"payable\":false,\"stateMutability\":  .... \"function\"}]"
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
https://api.gobase.io/v1/nft/offchain/market/{address}/bundles/{bundle_id}/buy/signature
```

### Signatureによる購入JSサンプル
```js
  const {web3, account} = await setupWeb3();
  const nftContractAddress = '{nft_contract_address}';
  const signature = '{signature}';
  const tokenIds = [token_ids];
  const wei = '{wei}';

  const marketContractABI = [{"inputs":[],"payable":false, ....}];
  const marketContractAddress = '{market_contract_address}';
  const marketContract = new web3.eth.Contract(marketContractABI, marketContractAddress);
  const estimateGas = await marketContract.methods.buyBundle(signature, nftContractAddress, tokenIds).estimateGas({from: account, value: wei})

  marketContract.methods.buyBundle(signature, nftContractAddress, tokenIds).send(
    {
      from: account,
      value: wei,
      gas: estimateGas,
    }, (err, tx_hash) => {
    if (err) {
      console.log(err);
    } else {
      // TODO
      // tx_hashをサーバーに送信して、GO BASEに送信
      // 「Market Bundle - 購入時TxHash送信」参照
    }
  });
```
