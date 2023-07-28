export default function Greeting(db) {
  let message = "";
  let language;

  async function setLanguage(languageInput) {
    language = languageInput;
  }

  async function greetMessage(name) {
    if (!name && !language) {
      message = "Please type in your name and select a language";
    } else if (!name) {
      message = "Please type in your name";
    } else if (!/^[a-zA-Z]+$/.test(name)) {
      message = "please only use letters";
    } else {
      try {
        const user = await db.oneOrNone('SELECT * FROM users WHERE name  = $1', [name]);

        if (user) {
          message = "Name already used";
        }  else if (!language) {
          message = "Please select a language";
        } else {
          await db.none('INSERT INTO users (name, count) VALUES($1, 1)', [name])

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
      } catch (err) {
        console.error(err)
      }
      
    }
  }

  async function getCount() {
    try {
      const result = await db.one('SELECT COUNT(*) FROM users')
      return result.count
    } catch (err) {
      console.error(err)
    }
  }

  function getMessage() {
    return { message: message };
  }

  function reset() {
    message = ""
    language = undefined
    nameSet.clear()
  }

  return {
    greetMessage,
    getMessage,
    setLanguage,
    getCount,
    reset
  };
}
