export default function Greeting() {
  let message = "";
  let language;

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
    } else if (!language) {
      message = "Please Select a language";
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
    }
  }

  function getMessage() {
    return { message: message };
  }

  return {
    greetMessage,
    getMessage,
    setLanguage,
  };
}
