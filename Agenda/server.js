require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('Pronto')
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');


const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csurf = require('csurf');
const { middlewareGlobal, checkError, csrfMiddleware } = require('./src/middlewares/middlewares');

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'dsvfbghthgrfesx',
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

// Informando ao express a enginee que ele vai utilizar para renderizar os views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csurf());
app.use(middlewareGlobal);
app.use(checkError);
app.use(csrfMiddleware);
app.use(routes);


app.on('Pronto', () => {
    app.listen(3333, () => {
        console.log('Ok Let\'s go');
    });
});

