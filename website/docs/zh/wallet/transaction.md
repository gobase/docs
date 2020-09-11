# 发送交易
发送交易例子
```js
// js/main.js
async function sendTransaction(to, eth, callback) {
  try {
    let { web3, network, account } = await setupWeb3();
    web3.eth.sendTransaction({
      from: account,
      to: to,
      value: web3.utils.toWei(eth, 'ether')
    }, function (err, txHash) {
      callback(network, txHash, err);
    })
  } catch (err) {
    alert(err);
  }
};
```
