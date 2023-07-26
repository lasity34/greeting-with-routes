export default function Greeting() {


    let message = ''
    let timer = null

    function greetMessage(name) {

        clearTimeout(timer);

        if(name.name && /^[a-zA-Z]+$/.test(name.name)) {
            message = `Hello, ${name.name}`
        } else {
            message = "Invalid input. Please use only letters and ensure the input is not blank.";
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