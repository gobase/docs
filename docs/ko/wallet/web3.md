# GO! Wallet 연결

## 서명
web3.js를로드
```html
<!DOCTYPE html>
<html>
  <head>
    <title>DApps</title>
    <!-- web3 -->
    <script type="text/javascript" src='/js/web3.js'></script>
    <script type="text/javascript" src='/js/main.js'></script>
  </head>
  <body>
    <a onclick="personalSign();">Sign</a>
  </body>
</html>
```

Provider로 web3를 생성하고 서명 처리를한다.

```js
// js/main.js
async function setupWeb3() {
  try {
    let currentProvider = null;
    if (window.ethereum) {
      await window.ethereum.enable();
      currentProvider = window.ethereum;
    } else if (window.web3) {
      currentProvider = window.web3.currentProvider;
    } else {
      alert('No Metamask (or other Web3 Provider) installed');
    }
    if (currentProvider) {
      const web3 = new Web3(currentProvider);
      const network = await web3.eth.net.getNetworkType();
      const accounts = (await web3.eth.getAccounts()) || web3.eth.accounts;
      const account = accounts[0];
      return {web3, network, account}
    }
  } catch (err) {
    alert(err);
  }
};

async function personalSign() {
  try {
    let { web3, network, account } = await setupWeb3();
    const message = "This is a message to validate the login signature";
    const sig = await web3.eth.personal.sign(message, account);
    const data = {address: account, message: message, sig: sig};
    await fetch('/sign', {
      headers:{'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .then(json => {
      console.log(json);
    })
    .catch(error => {
      throw error;
    });
  } catch (err) {
    alert(err);
  }
};
```

## 송금
송금예
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

## DApps예

이 예를 참고로 할수있다.

https://mimic.gobase.io/
