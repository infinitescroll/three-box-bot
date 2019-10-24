This package is used in aragon test suites, but could be used for other purposes too.

It's bundled for a node.js environment only.

Create up to 10 3Box profiles programmatically, using a random set of keys.

```js
const ThreeBoxBot = require('@openworklabs/three-box-bot')
const boxBot = new ThreeBoxBot('https://rinkeby.infura.io/v3/87f....')

const [ethereumAddress, boxInstance] = await boxBot.createProfile({
  name: 'jon'
})

const ethereumAddressWithNoBox = await boxBot.returnAddressWithNoProfile()
```
