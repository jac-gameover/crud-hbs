const app = require('./src/app');
const config = require('./config/server.config');
const http = require('http');

const server = http.createServer(app)
const reload = require('reload');


server.listen(config.port, ()=>{
  console.log("run server")
})

reload(app)

