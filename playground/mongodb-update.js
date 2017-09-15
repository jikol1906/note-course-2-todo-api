// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59b592fa82e93f05eedd53bc')
  // }, {
  //   $set: {
  //     completed:true
  //   }
  // }, {
  //   returnOriginal:false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59bbe1eb6600cffe99f70759')
  }, {
    $set: {
      name: 'Boris'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  console.log('Connected to MongoDB server');

});
