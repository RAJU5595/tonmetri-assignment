const express = require('express');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const app = express();
const csrfMiddleware = csurf();

const YAMl = require('yamljs');

const appRoutes = require('./action-module/routes');
const utilRoutes = require('./action-module/utils-routes');

const route = process.env.ROUTE_PATH || '/api';

const fileOwner = 'server.js';

app.use(helmet());

process.on('uncaughtException', (err) => {
    console.log(err.stack, 500, fileOwner, 'uncaughtException');
});

process.on('unhandledRejection', (reason) => {
    console.log(reason.stack, 500, fileOwner, 'unhandledRejection');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, uxfauthorization');
    next();
});

const corsOptions = {
    exposedHeaders : 'uxfauthorization',
}

app.use(cors(corsOptions));
app.use(route, appRoutes);
// app.use('/', utilRoutes);
app.use(cookieParser);
app.use(csrfMiddleware);

const server = app.listen(process.env.PORT || 5001, () => {
    const host = server.address().address;
    const { port } = server.address();
    console.log(`App Listening at http://${host}: ${port}`);
})

module.exports = server;