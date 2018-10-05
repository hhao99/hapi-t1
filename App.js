'use strict'

const Hapi = require('hapi')

const server = Hapi.server({
    port: 9080,
    host: 'localhost'
})
server.route({
    method: "GET",
    path: "/hello",
    handler: (request,h)=> {
        return 'Hello World'

    }
})
const init = async () => {
    try {
        await server.start()
    }
    catch(err) {
        console.log(err)
        process.exit(1)
    }
    console.log('Server running at:', server.info.uri)
    

}



init()