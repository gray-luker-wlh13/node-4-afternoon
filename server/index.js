require('dotenv').config();
const express = require('express'),
      session = require('express-session'),
      {SERVER_PORT, SESSION_SECRET} = process.env,
      swagCtrl = require('./controllers/swagController'),
      checkForSession = require('./middlewares/checkForSession'),
      app = express();

app.use(express.json());

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET
}))
app.use(checkForSession);

app.get('/api/swag', swagCtrl.read);

app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`))