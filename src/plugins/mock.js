const Mock = require('mockjs')

Mock.setup({
  timeout: 800
})

const Random = Mock.Random

const produceNewsData = function () {
  let data = []
  for (let i = 0; i < 8; i++) {
    let data = {
      name: Random.cname(),
      date: Random.date(),
      city: Random.city()
    }
    data.push(data)
  }
  return {
    data: data
  }
}

Mock.mock('/news/index', 'get', produceNewsData)
