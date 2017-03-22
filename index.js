import http from 'http';

import app from './server/server.js';

/* creates a server instance */
const server = http.createServer(app);

/* starts server on port 3000 */
server.listen(3000);

/* prints a message to indicate we have started the server */
server.on('listening', function(){
  console.log('Server running at localhost:3000');
});
