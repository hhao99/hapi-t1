'use strict'

const Hapi = require('hapi')

const server = Hapi.server({
    port: 9080,
    host: 'localhost'
})

const init = async () => {
    await server.start()

}

process.on('onUnHandledRejection', (err)=> {
    console.log(err)
    process.exit(1)
})

init()