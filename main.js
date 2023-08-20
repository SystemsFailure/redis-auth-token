const express = require('express');
const bodyParser = require('body-parser');
const { signin } = require('./src/controllers/main.controller');
// const { session } = require('./src/services/session.configuration');


const app = express();
app.use(bodyParser.json());
// app.use(session);


// Регистрация пользователя
app.post('/signup', () => {});

// Вход пользователя
app.post('/login', signin);

// Выход пользователя
app.get('/logout', (req, res) => {
    req.session.destroy((error) => {
        if(error) return res.status(500).send("Error logout");
        res.redirect('/login')
    })
});

app.listen(3000, () => {
    console.log(`server started on port: ${3000}`);
})