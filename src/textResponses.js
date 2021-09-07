const hello = 'Hello World';

const getTimeString = () => {
  const d = new Date();
  const datestring = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return datestring;
};

const getTime = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(getTimeString());
  response.end();
};

const getHello = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(hello);
  response.end();
};

module.exports.hello = hello;
module.exports.getTimeString = getTimeString;
module.exports.getHello = getHello;
module.exports.getTime = getTime;
