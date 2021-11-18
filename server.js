const express = require('express');
const app = express();
const path = require('path');

//app.use to get routes for index.js
//EXAMPLE OF ROUTING: app.use('/api/numbers', require('./api/numbers'));

//path called dist
app.use('/dist', express.static(path.join(__dirname, 'dist')))


//route for clean html file
app.get('/', (req, res, next) => res.sendFile(path.join(_dirname, 'index.html')));



//PORT DECLARATION AND LOGGING
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}`));
