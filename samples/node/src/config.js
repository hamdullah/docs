const fs = require('fs')
const ConnectedCarsApi = require('./connectedcarsapi')

const CC_API_ENDPOINT = process.env.CC_API_ENDPOINT
const CC_AUTH_API_ENDPOINT = process.env.CC_AUTH_API_ENDPOINT

// Read the config however you like
const ccConfig = fs.readFileSync(process.env.SERVICE_ACCOUNT_KEY_FILE, {
  encoding: 'utf8'
})

const CCApi = new ConnectedCarsApi(
  ccConfig,
  CC_API_ENDPOINT,
  CC_AUTH_API_ENDPOINT
)

module.exports = CCApi
