import assert from 'assert'
import Greeting from '../greet.js'

describe('Greeting', function() {

    const greeting = Greeting()

    it('This should return a greeting after the name is entered', function() {

        greeting.greetMessage("bjorn")
        greeting.setLanguage("English")
        assert.equal('Hello, bjorn', greeting.getMessage().message)
    })

    it('This should return an error if there is no name or language', function() {

        greeting.greetMessage("")
        greeting.setLanguage("")
        assert.equal('please type in name', greeting.getMessage().message)
    })


})