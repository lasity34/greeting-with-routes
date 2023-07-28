import pgPromise from "pg-promise";
import dotenv from "dotenv"

dotenv.config()


const db = pgPromise({
    host: 'dpg-cj0h3ab438irjjd0map0-a.oregon-postgres.render.com',
    database: 'greetings_with_routes_liyd',
    user: 'greetings_with_routes_liyd_user',
    password: 'e3MSmoGN4d9xxKRZkw87zeSFPPR6LCEY'
});


export default function Greeting() {
  let message = "";
  let language;
  let nameSet = new Set()

  function setLanguage(languageInput) {
    language = languageInput;
  }

  function greetMessage(name) {
    if (!name && !language) {
      message = "Please type in your name and select a language";
    } else if (!name) {
      message = "Please type in your name";
    } else if (!/^[a-zA-Z]+$/.test(name)) {
      message = "please only use letters";
    } else if (nameSet.has(name)) {
        message = "Name already used";
    }
    
    else if (!language) {
      message = "Please select a language";
    } else {
        nameSet.add(name);
      if (language === "Spanish") {
        message = `Ola, ${name}`;
      }
      if (language === "Welsh") {
        message = `Shwmae, ${name}`;
      }
      if (language === "English") {
        message = `Hello, ${name}`;
      }
    }
  }

  function getCount() {
 
    return nameSet.size
  }

  function getMessage() {
    return { message: message };
  }

  return {
    greetMessage,
    getMessage,
    setLanguage,
    getCount
  };
}
