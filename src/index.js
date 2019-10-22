require('@babel/polyfill')
const { Wallet } = require('ethers')
const Web3 = require('web3')
const HDWalletProvider = require('@truffle/hdwallet-provider')
const Box = require('3box')

class ThreeBoxBot {
  constructor() {
    this.web3 = new Web3(
      new HDWalletProvider(
        Wallet.createRandom().mnemonic,
        'https://rinkeby.infura.io/v3/87f3c8e1836c442d87583ee9a4f3053a',
        0,
        10
      )
    )
    this.accountCounter = 0
  }
  /**
   * @param {Object} fieldsNValuesObj an object { field1: value } to set in the new 3box
   *
   * @returns {Array} [ ethereumAddress, 3boxInstance ]
   */
  async createProfile(fieldsNValuesObj) {
    const accounts = await this.web3.eth.getAccounts()
    const box = await Box.openBox(
      accounts[this.accountCounter],
      this.web3.currentProvider
    )
    this.accountCounter += 1
    await box.sync

    const [fields, values] = Object.keys(fieldsNValuesObj).reduce(
      (accum, field) => {
        const [fields, values] = accum
        fields.push(field)
        values.push(fieldsNValuesObj[field])
        return [fields, values]
      },
      [[], []]
    )

    await box.public.setMultiple(fields, values)
    return [this.accountCounter - 1, box]
  }

  async returnAddressWithNoProfile() {
    const accounts = await this.web3.eth.getAccounts()
    return accounts[this.accountCounter]
  }
}

module.exports = ThreeBoxBot
