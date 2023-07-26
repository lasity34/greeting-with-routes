export default function Greeting() {


    let message = ''


    function greetMessage(name) {

        message = `Hello, ${name.name}`
    }

    function getMessage() {
        return {message: message}
    }

    return {
        greetMessage,
        getMessage
    }

}