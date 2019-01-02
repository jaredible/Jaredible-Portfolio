const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').Server(app);

const PORT = process.env.port || 8001;
const HOST = process.env.host || 'localhost';
const ENV = app.get('env');

app.use(bodyParser.json());
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // Prestiges -> 0: Novice, 1: Beginner, 2: Intermediate, 3: Advanced, 4: Expert, 5: God
    var aboutMe = 'Analytically-driven programmer with five solid years of experience in object-oriented programming and scripting. Well-versed in all phases of the software development life cycle. Enthusiastic team player dedicated to streamling and innovating. Focused and motivated software developer proactively furthering my knowledge of system design and architecture in web applications, machine learning, and home automation.';
    var skills = [
        {
            name: 'Java & C#',
            percent: 70,
            tooltip: 'You can use the tooltip to explain more about your skill level...'
        },
        {
            name: 'HTML & CSS',
            percent: 59,
            tooltip: 'You can use the tooltip to explain more about your skill level...'
        },
        {
            name: 'Bootstrap',
            percent: 45,
            tooltip: 'You can use the tooltip to explain more about your skill level...'
        },
        {
            name: 'Angular, React, & Redux',
            percent: 20,
            tooltip: 'You can use the tooltip to explain more about your skill level...'
        },
        {
            name: 'MySQL & MongoDB',
            percent: 30,
            tooltip: 'You can use the tooltip to explain more about your skill level...'
        },
        {
            name: 'Node.js & Express.js',
            percent: 45,
            tooltip: 'You can use the tooltip to explain more about your skill level...'
        }
    ];

    res.render('index', { aboutMe: aboutMe, skills: skills });
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
    console.log(`${ENV.charAt(0).toUpperCase() + ENV.substring(1)} app listening at http://${server.address().address}:${server.address().port}`);
});