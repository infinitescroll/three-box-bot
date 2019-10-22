This package is used in aragon test suites, but could be used for other purposes too.

It's bundled for a node.js environment only.

Create up to 10 three boxes programmatically, using a random set of keys

```js
const ThreeBoxBot = require('@openworklabs/three-box-bot')
const boxBot = new ThreeBoxBot()

// creating a profile returns the eth address used to create the box, and the box itself
const [ethereumAddress, boxInstance] = await boxBot.createProfile({
  name: 'jon'
})
```
