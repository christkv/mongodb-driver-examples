var mongo = require('mongodb')
  , Server = mongo.Server
  , Db = mongo.Db;

var server = new Server("localhost", 27017)
var db = new Db("application", server);

db.open(function(err, db) {

  var collection = db.collection('users');
  collection.findOne({username: 'bob'}, function(err, user) {

    db.close();
  });
});