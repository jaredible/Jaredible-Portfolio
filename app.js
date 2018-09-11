const express = require('express');
const path = require('path');

const app = express();
const server = require('http').Server(app);

const PORT = 3000;
const HOST = 'localhost';

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', () => {
    res.render('index', { title: 'Home' })
});

app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            status: err.status,
            message: err.message,
            error: err
        });
    });
}

app.use((err, req, res, next) => {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            status: err.status,
            message: err.message,
            error: {}
        });
    });
});

server.listen(PORT, HOST, () => {
    var env = app.get('env');
    console.log(`${env.charAt(0).toUpperCase() + env.substring(1)} app listening at http://${server.address().address}:${server.address().port}`);
});