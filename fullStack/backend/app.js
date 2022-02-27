const express = require('express');
const bodyParser = require('body-parser');
const rtsRoutes = require('./routes/rts');

const app = express();
app.use(bodyParser.json());

//Cast net out and get stuff "*", CORS stuff
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
next();
});

app.use(rtsRoutes)

app.listen(8080)