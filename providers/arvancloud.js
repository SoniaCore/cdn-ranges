const axios = require('axios')

module.exports = async () => {
  const { data } = await axios.get(
	  'https://www.arvancloud.com/fa/ips.txt'
  )

  return data.split('\n').slice(0, -1)
}

