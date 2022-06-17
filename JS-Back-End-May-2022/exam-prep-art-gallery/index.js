const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');

// const { getErrorMessage } = require('./utils/errorHelpers');
const { PORT } = require('./config/enviorments');
const routes = require('./routes');
const { dbInit } = require('./config/db');
const { auth } = require('./middlewares/authMiddleware');

const app = express();

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(auth);
app.use(routes);
// app.use(getErrorMessage);

dbInit();
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}...`));