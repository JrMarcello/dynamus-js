import app from './src/app';

app.listen(process.env.PORT || 8000, () => {
  console.log('Server run in: ' + process.env.PORT || 8000);
});