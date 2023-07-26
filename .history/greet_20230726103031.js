export default function Greeting() {


    let message = ''
    let language;

    function setLanguage(languageInput) {
        language = languageInput
    }

    function greetMessage(name) {

        if (!name){
            message = "please type in name";
        }  else if( !/^[a-zA-Z]+$/.test(name) ) {
            message = "please only use letters"
        } else if (!language) {
            message = "Please Select a language"
        } 
        else if (language === 'Spanish') {
            message = `Ola, ${name}`
        } else if (language === "Welsh") {
            message = `Shwmae, ${name}`
        }
        else{
           
        }
    }

    // function greetMessage(name, language) {
    //     let message;

    //     if(!name) {
    //         message = "Please type in a name.";
    //     } else if(!/^[a-zA-Z]+$/.test(name)) {
    //         message = "Please only use letters in the name.";
    //     } else if(!language) {
    //         message = "Please select a language.";
    //     } else {
    //         switch(language) {
    //             case 'English':
    //                 message = `Hello, ${name}`;
    //                 break;
    //             case 'Spanish':
    //                 message = `Hola, ${name}`;
    //                 break;
    //             case 'Welsh':
    //                 message = `Shwmae, ${name}`;
    //                 break;
    //             default:
    //                 message = `Language not supported.`;
    //                 break;
    //         }
    //     }

    //     return message;
    // }



    function getMessage() {
        return {message: message}
    }

    return {
        greetMessage,
        getMessage,
        setLanguage
    }

}