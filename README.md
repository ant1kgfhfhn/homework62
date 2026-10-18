# HW 62

## About the project

This project was created to practice working with Express.js and template engines.

Pug is used for the users pages, and EJS is used for the articles pages. I also added CSS styles to make the pages look better.

## Technologies

Node.js, Express.js, Pug, EJS and CSS.

## Installation

Install the dependencies:

```bash
npm install
```

## How to run

Start the server:

```bash
npm start
```

The server runs on http://localhost:3000.

## Routes

The home page is available at `/`.

The `/users` page displays all users using Pug.

The `/users/:userId` page displays information about one user using Pug.

The `/articles` page displays all articles using EJS.

The `/articles/:articleId` page displays information about one article using EJS.

## Project structure

The controllers folder contains the logic for users and articles.

The routes folder contains the application routes.

The middlewares folder contains middleware functions.

The views folder contains the Pug and EJS templates and the CSS file.

The server.js file configures and starts the server.

## Notes

Users and articles are stored in arrays. The data is reset when the server restarts.

This project was made as a homework assignment to learn Express.js, Pug and EJS.
