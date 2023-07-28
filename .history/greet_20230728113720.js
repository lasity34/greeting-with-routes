



export default function Greeting(db) {
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
