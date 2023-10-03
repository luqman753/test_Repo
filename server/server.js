const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./../.././db.json');
const middlewares = jsonServer.defaults();
const auth = require('json-server-auth');

server.use(middlewares);

// Configure authentication
server.use(auth);

server.use('/api', router);

console.log(process.env.PORT);
const port = 3001;
server.listen(port, () => {
	console.log(`JSON Server is running on port ${port}`);
});
