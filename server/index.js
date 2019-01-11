const cf = require('./config');
const server = require('./server');

const { port } = cf;

server.start({ port }, () => {
      // eslint-disable-next-line no-console
      console.log(`Server is running on port:${port}`);
});
