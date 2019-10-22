const ThreeBoxBot = require('../index')

const create = async () => {
  const boxBot = new ThreeBoxBot()

  const res = await boxBot.createProfile({ name: 'jon' })
  console.log(res)
  return
}

create()
