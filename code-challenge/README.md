## Retrium Developer Code Challenge

Welcome to the Retrium Developer Code Challenge!

For this challenge, you will spend a couple hours implementing and testing an implementation of Conway's Game of Life in pure JavaScript. You may use any testing framework you like (or none at all), as long as you submit some test cases along with your work.

Are you ready to show us what you've got? Then read on!

### Conway's Game of Life

John Conway was interested in a problem presented in the 1940s by renowned mathematician John von Neumann, who tried to find a hypothetical machine that could build copies of itself. He succeeded when he found a mathematical model for such a machine with very complicated rules on a rectangular grid. The Game of Life emerged in 1970 as Conway's successful attempt to simplify von Neumann's ideas.

What is so fascinating and enduring about Conway's game is the incredible range of emergent patterns that can result from a simple set of initial conditions. The game is "played" (though there are no actual players) on an infinite two-dimensional grid, where each cell may be in one of two possible states: _alive_ or _dead_. The mechanics of the game are fully described by four simple rules:

- Any live cell with fewer than two live neighbors dies (underpopulation)
- Any live cell with two or three live neighbors lives on to the next generation
- Any live cell with more than three live neighbors dies (overpopulation)
- Any dead cell with exactly three live neighbors becomes a live cell (reproduction)

![Gosper's Glider Gun](https://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif) _A "gun" that creates "gliders"_

The rules are applied simultaneously to every cell on the board, and may continue to be applied repeatedly to create new "generations." Each generation is a pure function of the previous one.

Source: [_Wikipedia: Conway's Game of Life_](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

### The Challenge

Your task is to implement the mechanics of Conway's Game of Life as a function that takes the current generation of cells, and returns the next generation of cells. How the code is structured and the data represented is up to you, but we want you to provide some test cases to ensure that the mechanics are working as designed. And naturally, so we get some additional insight into your thought process. Just to be clear, you're not going to be building any user interfaces here: just the basic mechanics of the game.

_Hint_: There are a number of pattern examples in the Wikipedia article cited above that make good test cases: particularly the still lifes and oscillators.

### The Project

You will be submitting this project on CodeSandbox. The `sandbox.config.json` file tells CodeSandbox to spin up a Node.js container for you to write your code and run your tests. The project is already configured to use [Babel](https://babeljs.io/), [ESLint](https://eslint.org/), and [Prettier](https://prettier.io/), so you can use the latest and greatest JavaScript features without wasting valuable setup time, or worrying about matters of style. The container also uses [Nodemon](https://nodemon.io/) to watch your files and continually re-run your tests. So whenever you're ready, click on the link below, and then click the "Fork" button to get started. When you're finished, simply copy the sandbox URL from the browser, and email it back to us (along with the other email screen responses) to the thread in AngelList.

Good luck, and let the challenge begin!

[Start the Code Challenge](https://codesandbox.io/s/github/Retrium/dev-candidate/tree/master/code-challenge)
