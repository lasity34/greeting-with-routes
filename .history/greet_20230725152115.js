export default function Greeting() {

    function greetMessage(name) {

        return `Hello, ${name.name}`
    }


    return {
        greetMessage
    }

}