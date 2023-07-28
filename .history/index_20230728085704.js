import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from "body-parser";
import Greeting from './greet.js';

import pgp from "pg-promise";
import dotenv from "dotenv"

dotenv.config()


const db = pgp({
    host: 'dpg-cj0h3ab438irjjd0map0-a.oregon-postgres.render.com',
    database: 'greetings_with_routes_liyd',
    user: 'greetings_with_routes_liyd_user',
    password: 'e3MSmoGN4d9xxKRZkw87zeSFPPR6LCEY'
});

const app = express();
const greeting = Greeting()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.render('index',  {
        message: greeting.getMessage(),
        count: greeting.getCount()});
});


app.post('/greeting', (req, res) => {
    greeting.setLanguage(req.body.language)
    greeting.greetMessage(req.body.name)
    res.redirect('/')
} )


const PORT = process.env.PORT || 3012


app.listen(PORT, function() {
    console.log('App has started', PORT)
})

