const mongoose = require('mongoose');
// const { port, db, secret }    = require('../config/env');
// mongoose.Promise = require('bluebird');
mongoose.connect(db);

// const User = require('../models/user');
// const Event = require('../models/event');

// User.collection.drop();
// Event.collection.drop();

// User.create([{
//   username: 'dan123',
//   email: 'dan@dan.com',
//   postcode: 'SE270JF',
//   password: '123'
// }, {
//   username: 'ben123',
//   email: 'ben@ben.com',
//   postcode: 'SE191SB',
//   password: '123'
// }])
// .then(user => {
//   console.log(`${user.length} users created`);
// })
// .catch((err) => {
//   console.log(err);
// })
// .finally(() => {
//   mongoose.connection.close();
// });