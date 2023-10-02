[![Node.js CI](https://github.com/lasity34/greetings-webapp/actions/workflows/node.js.yml/badge.svg)](https://github.com/lasity34/greetings-webapp/actions/workflows/node.js.yml)


# Greetings Web App with ExpressJS and PostgreSQL 🌐🛠️

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Routes](#routes)
5. [Setup](#setup)
6. [Deployment](#deployment)
7. [Learnings](#learnings)

---

## Overview 📝

This project is a simple web application built with ExpressJS and PostgreSQL. It allows users to receive greetings and keeps track of the number of times each user has been greeted.

---

## Tech Stack 💻

- **ExpressJS**: Used for the back-end server setup and route handling.
- **PostgreSQL**: Employed for the database to store information about greeted users.
- **HTML**: Utilized for creating the front-end form and other UI elements.
- **dotenv**: Used for managing environment variables like `DATABASE_URL`.
- **express-flash**: Implemented for displaying warning messages on form validation.

---

## Features 🌟

- **User Greeting**: A form accepts a username and greets the user upon pressing the greet button.
- **Validation**: Displays a warning message using `express-flash` if no name is entered.
- **User Counter**: A separate route shows the list of greeted users and the number of times they've been greeted.

---

## Routes 🛣️

- `/`: Main route with a form for greeting users.
- `/greeted`: Lists all the users who have been greeted.
- `/counter/<USER_NAME>`: Displays the number of times a specific user has been greeted.

---

## Setup 🛠️

- Project folder named `greetings-webapp`.
- Main server file is `index.js`.
- Environment variables managed using `dotenv`.

---

## Deployment 🚀

- Deployed the application on Render.
- Utilized PostgreSQL for the remotely deployed database.
- Database URL is set as an environment variable named `DATABASE_URL`.
- Database schema set up via terminal commands.

---

## Learnings 📚

- Learned to create a simple web application using ExpressJS.
- Gained hands-on experience with form validation using `express-flash`.
- Understood how to deploy an application with a remote PostgreSQL database.
- Mastered environment variable management using `dotenv`.


