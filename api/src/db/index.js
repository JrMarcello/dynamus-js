import mongoose from 'mongoose';
// import { consoleInfo, consoleError, consoleWarn } from '../common/utils';

mongoose.Promise = global.Promise;

mongoose.connection.on('disconnected', () => {
  // consoleWarn('Mongoose disconnected')
  console.log('Mongoose disconnected');
});

// if the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    // logWarn('Mongoose disconnected through user.app termination');
    console.log('Mongoose disconnected through user.app termination');
    process.exit(1);
  });
});
// console.log(process.env.API_BASE_PATH);
mongoose.connect(process.env.DB_URI).then((con) => {
  // consoleInfo(`Mongoose connected to ${process.env.DB_URI}`);
  console.log(`Mongoose connected to ${process.env.DB_URI}`);
  // console.log('conn', con);
})
.catch((err) => {
  // consoleError(`Mongoose connection error: ${err}`);
  console.log(`Mongoose connection error: ${err}`);
});

export default mongoose.connection;