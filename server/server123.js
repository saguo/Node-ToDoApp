  var express = require('express');
  var bodyParser = require('body-parser');

  var {mongoose} = require('./db/mongoose.js');
  var {Todo} = require('./models/todo.js');
  var {User} = require('./models/user.js');
 
  var app = express();

  app.use(bodyParser.json());

  app.post('/todos', (req, res) => {
    var otherTodo = new Todo({
       text: req.body.text
   });

   otherTodo.save().then((doc) => {
       res.send(doc);
   }, (e) =>{
       res.status(400).send(e);
   });  
  });
 
  app.get('/todos', (req,res) => {
      Todo.find().then((todos) => {
        res.send({todos});
   }, (e) =>{
       res.status(400).send(e);
   });  
  });
  
  app.listen(3000, () => {
    console.log('Started on port 3000');
  });

  module.exports = {app};
  // var otherTodo = new Todo({

  // 	text: 'Something to do'


  //  });

  //  otherTodo.save().then((doc) => {
  //  		console.log(JSON.stringify(doc, undefined, 2));
  //  }, (e) =>{
  //  		console.log('Unable to save todo', e)

  //  });

   //User
   //email- require it - trim it - set type - set min length of 1
   
   // var oneUser = new User({
   // 	username: 'Andrew',
   // 	email: 'okandrew@gmail.com'
   // });

   // var secondUser = new User({
   // 	username: 'Lily',


   // });


   // oneUser.save().then((doc) => {
   // 		console.log(JSON.stringify(doc, undefined, 2));
   // }, (e) =>{
   // 		console.log('Unable to save todo', e)

   // });


   // secondUser.save().then((doc) => {
   // 		console.log(JSON.stringify(doc, undefined, 2));
   // }, (e) =>{
   // 		console.log('Unable to save todo', e)

   // });

