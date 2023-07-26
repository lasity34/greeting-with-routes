import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from "body-parser";
import Greeting from './greet.js';



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
    res.render('index',  greeting.getMessage());
});


app.post('/greeting', (req, res) => {
    greeting.greetMessage(req.body.name)
    console.log(req.body.name)
    res.redirect('/')
} )

app.post('/language', (req, res) => {
    greeting.setLanguage(req.body.language)
    console.log(req.body.language)
    res.redirect('/')
} )


const PORT = process.env.PORT || 3012


app.listen(PORT, function() {
    console.log('App has started', PORT)
})

