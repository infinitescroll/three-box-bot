This package is used in aragon test suites, but could be used for other purposes too.

It's bundled for a node.js environment only.

Create up to 10 3Box profiles programmatically, using a random set of keys.

```js
const ThreeBoxBot = require('@openworklabs/three-box-bot')
// pass the ThreeBoxBot an ethereum provider to connect to
// something like...  'https://rinkeby.infura.io/v3/87f....'
const boxBot = new ThreeBoxBot(`${ethereumProviderUrl}`)

// creating a profile returns the eth address used to create the box, and the box itself
const [ethereumAddress, boxInstance] = await boxBot.createProfile({
  name: 'jon'
})
```
