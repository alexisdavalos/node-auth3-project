const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//routers
const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');
const restricted = require('../auth/restricted-middleware.js');

//server instance
const server = express();

//middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

//route
server.use('/api/auth', logger, authRouter)
server.use('/api/users', logger, restricted, usersRouter)

//sanity check route
server.get('/', (req, res) => {
    res.json({ api: "online" });
})

//export module
module.exports = server;

function logger(req, res, next) {
    console.log(
        `[${new Date().toISOString()}] 
            \n ${req.method} to ${req.url} from ${req.get('Origin')}`, {body: req.body, headers: req.headers} 
            
    );

    next();
}