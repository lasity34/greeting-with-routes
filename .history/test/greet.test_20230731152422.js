import assert from "assert";
import Greeting from "../greet.js";
import pgPromise from "pg-promise";
import dotenv from "dotenv";

dotenv.config();

const db = pgPromise()(process.env.DATABASE_URL);

describe("Greeting function", function () {
  const greeting = Greeting(db);

  it("This should return a greeting after the name is entered", async function () {
    await greeting.setLanguage("English");
    const message = await greeting.greetMessage("bjorn");
    assert.equal("Hello, Bjorn", message);
  });

  it("This should return an error if there is no name or language", async function () {
    await greeting.setLanguage("");
    const message = await greeting.greetMessage("");
    assert.equal("Please type in your name and select a language", message);
  });

  it("This should return an error if there is no name ", async function () {
    await greeting.setLanguage("English");
    const message = await greeting.greetMessage("");
    assert.equal("Please type in your name", message);
  });
  it("This should return an error if there is no language selected ", async function () {
    await greeting.setLanguage("");
    const message = await greeting.greetMessage("Bjorn");
    assert.equal("Please select a language", message);
  });
  it("This should return a greeting in English ", async function () {
    await greeting.setLanguage("English");
    const message = await greeting.greetMessage("Bjorn");
    assert.equal("Hello, Bjorn", message);
  });
  it("This should return a greeting in Spanish ", async function () {
    await greeting.setLanguage("Spanish");
    const message = await greeting.greetMessage("Jen");
    assert.equal("Ola, Jen", message);
  });
  it("This should return a greeting in Welsh ", async function () {
    await greeting.setLanguage("Welsh");
    const message = await greeting.greetMessage("Bruce");
    assert.equal("Shwmae, Bruce", message);
  });
});

describe("reset", function () {
  const greeting = Greeting(db);

  it("count should reset when reset is clicked ", async function () {
    await greeting.setLanguage("Welsh");
    await greeting.greetMessage("Bruce");
    await greeting.getCount();
    await greeting.reset();
    const count = await greeting.getCount();
    assert.equal(0, count);
  });
  it("message should reset when reset is clicked ", async function () {
    await greeting.setLanguage("Welsh");
    await greeting.greetMessage("Bruce");
    await greeting.getCount();
    await greeting.reset();
    const message = await greeting.greetMessage("");
    assert.equal("Please type in your name and select a language", message);
  });
});

describe("Counter", function () {
  const greeting = Greeting(db);

  it("This should test the count", async function () {
    await greeting.setLanguage("English");
    await greeting.greetMessage("bjorn");
    const count = await greeting.getCount();
    assert.equal(1, count);
  });
  after(function () {
    db.$pool.end;
  });
});
