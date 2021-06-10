# Retrium UI/UX Engineer Prototype Challenge

Welcome to the Retrium UI/UX Engineer Prototype Challenge!

For this challenge, you will spend a couple hours creating an interactive prototype of an implementation of Conway's Game of Life in React. Afterward, you will conduct a mob prototyping session with Retrium engineers to further iterate on the prototype. This project is as much an opportunity for us to understand you as a candidate as it is for you to get to know us as potential teammates. We’ll see your approach to UI/UX design and your chops for prototyping in React, and you’ll see what it’s like to work with us in a collaborative setting.

Are you ready to show us what you've got? Then read on!

## Conway's Game of Life

John Conway was interested in a problem presented in the 1940s by renowned mathematician John von Neumann, who tried to find a hypothetical machine that could build copies of itself. He succeeded when he found a mathematical model for such a machine with very complicated rules on a rectangular grid. The Game of Life emerged in 1970 as Conway's successful attempt to simplify von Neumann's ideas.

What is so fascinating and enduring about Conway's game is the incredible range of emergent patterns that can result from a simple set of initial conditions. The game is "played" (though there are no actual players) on an infinite two-dimensional grid, where each cell may be in one of two possible states: _alive_ or _dead_. The mechanics of the game are fully described by four simple rules:

- Any live cell with fewer than two live neighbors dies (underpopulation)
- Any live cell with two or three live neighbors lives on to the next generation
- Any live cell with more than three live neighbors dies (overpopulation)
- Any dead cell with exactly three live neighbors becomes a live cell (reproduction)

![Gosper's Glider Gun](https://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif) _A "gun" that creates "gliders"_

The rules are applied simultaneously to every cell on the board, and may continue to be applied repeatedly to create new "generations." Each generation is a pure function of the previous one.

Source: [_Wikipedia: Conway's Game of Life_](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

## The Challenge

We've implemented the Game of Life as a JavaScript function. Your task is to implement a prototype that satisfies the following [Job To Be Done](https://jtbd.info/2-what-is-jobs-to-be-done-jtbd-796b82081cca): **I can easily demonstrate cellular automation**. You'll be doing so by implementing a 100x100 board that, given an input board, will run the Game of Life.

You will be provided with a shell application that contains all of the data-layer functionality you will need for this task, as well as a basic React installation. Feel free to install any additional libraries if you so choose.

## The Project

We expect you to spend no more than 2 to 5 hours building your first iteration of the prototype. Remember that we are not looking for perfection, and there is no "right" prototype. We are looking for a well thought-out prototype that will be the starting point of our mob prototyping session. Please spend an amount of time on the first iteration that results in a prototype that you feel is functionally complete but leaves room for further iteration and group discovery.

You will be submitting this project on CodeSandbox. The `sandbox.config.json` file tells CodeSandbox to spin up a Node.js container for you to write your code and run your tests. The project is already configured to use [Babel](https://babeljs.io/), [ESLint](https://eslint.org/), and [Prettier](https://prettier.io/), so you can use the latest and greatest JavaScript features without wasting valuable setup time, or worrying about matters of style. So whenever you're ready, click on the link below, and then click the "Fork" button to get started. When you're finished, copy the sandbox URL from the browser, and email it back to us.

After we’ve had a chance to review the prototype, we’ll schedule a mob prototyping session between you and a few Retrium engineers. In this session, you’ll demo your prototype to us and gather feedback. Then, together, we will collaboratively iterate on the prototype. We'll touch on its design and UX, as well as adding new features. The mob prototyping session is where we get to learn how your design brain works, and you get to learn how we typically create user experiences through collaboration.

Good luck, and let the challenge begin!

[Start the Code Challenge](https://codesandbox.io/s/sparkling-bird-uo7uu)
