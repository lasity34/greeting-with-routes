import express from "express";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";
import Greeting from "./greet.js";
import flash from "express-flash";
import session from "express-session";
import pgPromise from "pg-promise";
import dotenv from "dotenv";
import { createTable } from "./tabelsql.js";
import greeting_route from "./routes/greeting.js";
dotenv.config();

const pgp = pgPromise();

const connection = {
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // or true, depending on your certificate setup
};


const db = pgp(connection);


createTable(db).then(() => {
  const app = express();
  const greeting = Greeting(db);

  app.engine("handlebars", engine());
  app.set("view engine", "handlebars");
  app.set("views", "./views");
  app.use(express.static("public"));

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  // parse application/json
  app.use(bodyParser.json());

  app.use(
    session({
      secret: "kyoto123",
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 },
    })
  );

  app.use(flash());

  app.post("/greeting", );


  app.get("/", async (req, res) => {
    const flashMessage = req.flash("info")[0]
    const count = await greeting.getCount()
    res.render("index", {
      flashMessage: flashMessage,
      count: count,
    });
  });

  app.get("/greeted", async (req, res) => {
    const users = await greeting.getUsers()
    res.render("greeted", {
      users: users
    })
  });


  app.get('/counter/:name', async (req,res) => {
    const userName = req.params.name;
    const users = await greeting.getUsers();
    const user = users.find(u => u.name === userName);
    
    res.render("counter", {
      user: user
    });
  });
  
 

  app.post("/reset", (req, res) => {
    greeting.reset();
    res.redirect("/");
  });



  const PORT = process.env.PORT || 3012;

  app.listen(PORT, function () {
    console.log("App has started", PORT);
  });
});
