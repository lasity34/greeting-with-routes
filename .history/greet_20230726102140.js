export default function Greeting() {


    let message = ''
    let language;

    function setLanguage(languageInput) {
        language = languageInput
    }

    function greetMessage(name) {

        if(name && /^[a-zA-Z]+$/.test(name) && language === 'English') {
            message = `Hello, ${name}`
        } else if (language === 'Spanish') {
            message = `Ola, ${name}`
        } else if (language === "Welsh") {
            message = `Shwmae, ${name}`
        }
        else if (!name){
            message = "please type in name";
        } else{
            message = "please only use letters"
        }
    }





    function getMessage() {
        return {message: message}
    }

    return {
        greetMessage,
        getMessage,
        setLanguage
    }

}