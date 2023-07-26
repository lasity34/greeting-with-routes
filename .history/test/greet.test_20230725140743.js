import assert from 'assert'
import Greeting from '../greet.js'

describe('Greeting', function() {

    const greeting = Greeting()

    it('This should return a greeting after the name is entered', function() {
        assert.equal('Hello, Bjorn', greeting.greetMessage(name))
    })


})