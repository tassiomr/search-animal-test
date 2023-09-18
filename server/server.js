const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen(process.env.PORT || 5000, async () => {
  console.log(
    `HTTP Express server listening on port: ` + (process.env.PORT || 5000)
  );
});
