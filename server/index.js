const express = require('express');
const morgan = require('morgan');
var app = express();
app.use(express.static(__dirname + './../'));


app.use(morgan('dev'));

// Used if using BrowserRouter instead of HashRouter (Think of client routing and server routing, refer here: https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually)
// app.get('/*', function (req, res){
//   res.sendFile('index.html', { root: './'})
// });

// Controllers
const controller = require('./controllers/exampleController.js');

// EndPoints
app.get('/api/posts', controller.posts);
app.get('/api/moreposts', controller.moreposts);
app.get('/api/hello', function (req, res) {
  res.send('hello back!')
})


app.listen(3000, () => console.log('Running on 3000'));
