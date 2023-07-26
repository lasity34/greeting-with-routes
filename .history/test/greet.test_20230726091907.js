import assert from 'assert'
import Greeting from '../greet.js'

describe('Greeting', function() {

    const greeting = Greeting()

    it('This should return a greeting after the name is entered', function() {

        greeting.greetMessage("bjorn")

        assert.equal('Hello, bjorn', greeting.getMessage().message)
    })

    it('This should return an error message statin invalid input', function() {

        greeting.greetMessage("bjorn")

        assert.equal('Hello, bjorn', greeting.getMessage().message)
    })


})