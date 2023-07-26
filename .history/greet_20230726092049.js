export default function Greeting() {


    let message = ''
    let timer = null

    function greetMessage(name) {

        clearTimeout(timer);

        if(name && /^[a-zA-Z]+$/.test(name)) {
            message = `Hello, ${name}`
        } else  if (!name){
            message = "please type in name";
        } else {
            message = "please only use letters"
        }

        timer = setTimeout(() => {
            message = '';
        }, 2000);


    }

    function getMessage() {
        return {message: message}
    }

    return {
        greetMessage,
        getMessage
    }

}