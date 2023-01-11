require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('CONNECTION DONE')
        app.emit('done');
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');


const routes = require('./routes');
const path = require('path');
const {middlewareGlobal} = require('./src/middleware/middleware')

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    secret: 'crazythings()',
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    resave: false,
    saveUnitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true 
    }
})
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(routes);

// Express is a micro framework who helps with routes and putting websites on-line

// CRUD -> CREATE = POST, READ = GET, UPDATE = PUT, DELETE = DELETE

// http://mywebsite.com/ <- GET -> Page's deliver /

// By pattern, the GET will receive req and res as pattern. Req is the requisition necessary for the "trade" between pages and Res is the response that is sended to the server.

// This is a part to create a longer route. The "?" is useful to create a random address

/* app.get('/test/:idUsers?/:parameter?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
})

// Thos /:parameter? they're useful for the requisition query. That means that we can create objects using the URL

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`You send me: ${req.body.name}`)
}) */

// This is not enough. We need to use a door. The door is where our server will open and run our application.


app.on('done', () => {
    app.listen(3000, () => {
        console.log('Me us at http://localhost:3000')
        console.log('Server on door');
    });
})
