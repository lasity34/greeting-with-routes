import assert from 'assert'
import Greeting from '../greet.js'

describe('Greeting function', function() {

    const greeting = Greeting()

    it('This should return a greeting after the name is entered', async function() {

      await  greeting.setLanguage("English")
      await greeting.greetMessage("bjorn")
     const message = await greeting.greetMessage('bjorn')


        assert.equal('Hello, bjorn',  message)
    })

    it('This should return an error if there is no name or language', function() {

        greeting.setLanguage("")
        greeting.greetMessage("")
        assert.equal('Please type in your name and select a language', greeting.getMessage().message)
    })
    
    it('This should return an error if there is no name ', function() {

        greeting.setLanguage("English")
        greeting.greetMessage("")
        assert.equal('Please type in your name', greeting.getMessage().message)
    })
    it('This should return an error if there is no language selected ', function() {

        greeting.setLanguage("")
        greeting.greetMessage("Bjorn")
        assert.equal('Please select a language', greeting.getMessage().message)
    })
    it('This should return a greeting in English ', function() {

        greeting.setLanguage("English")
        greeting.greetMessage("Bjorn")
        assert.equal('Hello, Bjorn', greeting.getMessage().message)
    })
    it('This should return a greeting in Spanish ', function() {

        greeting.setLanguage("Spanish")
        greeting.greetMessage("Jen")
        assert.equal('Ola, Jen', greeting.getMessage().message)
    })
    it('This should return a greeting in Welsh ', function() {

        greeting.setLanguage("Welsh")
        greeting.greetMessage("Bruce")
        assert.equal('Shwmae, Bruce', greeting.getMessage().message)
    })
    

})

describe('reset', function() {

    const greeting = Greeting()

    it('count should reset when reset is clicked ', function() {

        greeting.setLanguage("Welsh")
        greeting.greetMessage("Bruce")
        greeting.getCount()
        greeting.reset()
        assert.equal(0, greeting.getCount())
    })
    it('message should reset when reset is clicked ', function() {

        greeting.setLanguage("Welsh")
        greeting.greetMessage("Bruce")
        greeting.getCount()
        greeting.reset()
        assert.equal('', greeting.getMessage().message)
    })
    
})

describe('Counter', function() {

    const greeting = Greeting()

    it('This should test the count', function() {

        greeting.setLanguage("English")
        greeting.greetMessage("bjorn")
        assert.equal(1, greeting.getCount())
    })
})