const defer = require('config/defer').deferConfig;
const path = require('path');

module.exports = {
  // secret data can be moved to env variables
  // or a separate config
  connection: {
    port: '8080',
    ipaddress: '10.129.8.143'
  },
  keys: ['mysecret'],
  mongoose: {
    uri: '127.0.0.1/store',
    options: {
      server: {
        socketOptions: {
          keepAlive: 1
        },
        poolSize: 5
      },
      db: {
        nativeParser: true
      }
    }
  }
}
