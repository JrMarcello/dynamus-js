import server from './src/server';

server.listen(process.env.PORT || 8000, () => {
  console.log('Server run in: ' + process.env.PORT || 8000);
});