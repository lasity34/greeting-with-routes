export default function Greeting(db) {

    let language;
    let message = ''
    async function setLanguage(languageInput) {
      language = languageInput;
      return Promise.resolve(); 
    }
  
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    async function greetMessage(name) {
  
      name = capitalizeFirstLetter(name);
  
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
  
            let userCount = 1
  
            if (user) {
              userCount = user.count + 1;
              await db.none('UPDATE users SET count = $2 WHERE name = $1', [name, userCount])
            }  else {
              await db.none('INSERT INTO users (name, count) VALUES($1, $2)', [name, userCount])
    
            }
  
            if (!message) {
              message = "Please type in your name";
            }
  
         
          }
        } catch (err) {
          console.error(err)
        }
        
  
      }
      return message
    }
  
    async function getCount() {
      try {
        const result = await db.one('SELECT COUNT(DISTINCT name) as total_count FROM users')
        return result.total_count;
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
  