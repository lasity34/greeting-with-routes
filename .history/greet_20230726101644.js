export default function Greeting() {


    let message = ''
    let 

    function setLanguage(languageInput) {

    }

    function greetMessage(name) {

        if(name && /^[a-zA-Z]+$/.test(name)) {
            message = `Hello, ${name}`
        } else  if (!name){
            message = "please type in name";
        } else {
            message = "please only use letters"
        }
    }





    function getMessage() {
        return {message: message}
    }

    return {
        greetMessage,
        getMessage
    }

}