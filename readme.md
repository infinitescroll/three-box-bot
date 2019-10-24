This package is used for [Aragon test suites](https://github.com/aragon/aragon.js/blob/0dc5416381e091bc86cc9576506c47063d1583e3/packages/aragon-wrapper/src/identity/ThreeBoxProvider.test.js#L2), but could be used for other purposes too.

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
