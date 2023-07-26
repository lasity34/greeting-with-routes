export default function Greeting() {


    let message = ''


    function greetMessage(name) {

        message = `Hello, ${name.name}`
    }

    return {
        greetMessage
    }

}