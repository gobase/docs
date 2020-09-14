# ETH購入時のSignature取得

ETH購入時のSignature取得

### パス
```
GET /v1/nft/market/{address}/tokens/{token_id}/buy/signature
```

### パラメータ

なし

### レスポンス
```json
Status Code: 200

{
  "error": null,
  "result": {
    "owner": "0x0eb2F75e2D467e4604235e99E28b2fF4E4C2ec61",
    "signature": "0x8670784ca7cd2375e705b39c622b8ae79951f6cea19acfb185a3f45137199806",
    "token_id": "107",
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
https://api.gobase.io/v1/nft/market/{address}/tokens/{token_id}/buy/signature
```

### Signatureによる購入JSサンプル
```js
  const {web3, account} = await setupWeb3();
  const nftContractAddress = '{nft_contract_address}';
  const signature = '{signature}';
  const tokenId = '{token_id}';
  const owner = '{owner}';
  const wei = '{wei}';

  const marketContractABI = [{"inputs":[],"payable":false, ....}];
  const marketContractAddress = '{market_contract_address}';
  const marketContract = new web3.eth.Contract(marketContractABI, marketContractAddress);
  marketContract.methods.purchaseTokenByETH(signature, nftContractAddress, tokenId, owner).send(
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
