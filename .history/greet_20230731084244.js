export default function Greeting(db) {

  let language;

  async function setLanguage(languageInput) {
    language = languageInput;
  }

  async function greetMessage(name) {
    let message;
    if (!name && !language) {
      message = "Please type in your name and select a language";
    } else if (!name) {
      message = "Please type in your name";
    } else if (!/^[a-zA-Z]+$/.test(name)) {
      message = "please only use letters";
    } else {
      try {
        const user = await db.oneOrNone('SELECT * FROM users WHERE name  = $1', [name]);
        if (!language) {
          message = "Please select a language";
        } else {
          
          if (language === "Spanish") {
            message = `Ola, ${name}`;
          }
          if (language === "Welsh") {
            message = `Shwmae, ${name}`;
          }
          if (language === "English") {
            message = `Hello, ${name}`;
          }

          if (user) {
            await db.none('UPDATE users SET count = count + 1 WHERE name = $1', [name])
          }  else {
            await db.none('INSERT INTO users (name, count) VALUES($1, 1)', [name])
  
          }
          return message
        }
      } catch (err) {
        console.error(err)
      }
      
    }
  }

  async function getCount() {
    try {
      const result = await db.one('SELECT COUNT(*) as row_count FROM users')
      return result.row_count
    } catch (err) {
      console.error(err)
    }
  }

  async function getUsers() {
    try {
      const users = await db.any('SELECT * FROM users')
      return users
    } catch (err) {
      console.error(err)
    }
  }

  async function reset() {
    message = ""
    language = undefined
    try {
      await db.none('DELETE FROM users')
    }
    catch (err) {
      console.error(err)
    }
  }

  return {
    greetMessage,
    setLanguage,
    getCount,
    reset,
    getUsers
  };
}
