const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
    console.log('Uncaught Exception. Shutting down...');
    console.log(err.name, err.message);
    process.exit(1); // 0 is success; 1 is uncaught exception
});

dotenv.config({ path: './config.env' });

const app = require('./app');

mongoose
.connect(process.env.DATABASE)
.then(() => {
    console.log('Connected to DB successfully');
});

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
    console.log(`App is running on port ${port}...`);
});

// SOCKET
const socketIO = require('socket.io')(server, {cors:{origin: '*'}});


process.on('unhandledRejection', (err) => {
    console.log('Unhandled Rejection. Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1); // 0 is success, 1 is uncaught exception
    });
});

module.exports = socketIO;