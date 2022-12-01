# BetSlip

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Built With](#built-with)
- [Features](#features)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Overview

This project is a “Betslip” - a small feature that exists in a Sportbook. the project doesn't have a backend, so we log the selected bets on the console after submit. the header and the footer of the site are not implemented, the only features in this project is the market selector and the betslip.

this project is not powered by any api, instead we have the array "data" in MarketSelection.jsx

<img src="https://github.com/orioch/BetSlip/blob/main/screenshots/Screen%20Shot%202022-12-01%20at%2013.32.54.png?raw=true" width=20% height=20%>      <img src="https://github.com/orioch/BetSlip/blob/main/screenshots/Screen%20Shot%202022-12-01%20at%2013.33.16.png?raw=true" width=20% height=20%>      <img src="https://github.com/orioch/BetSlip/blob/main/screenshots/Screen%20Shot%202022-12-01%20at%2013.33.37.png?raw=true" width=20% height=20%> 

## Live Demo

You can see a live demo of the project in [oriochayon.com/betslip](https://oriochayon.com/betslip)

<!-- TODO: Add a screenshot of the live project.
    1. Link to a 'live demo.'
    2. Describe your overall experience in a couple of sentences.
    3. List a few specific technical things that you learned or improved on.
    4. Share any other tips or guidance for others attempting this or something similar.
 -->

### Built With

- React Js
- Redux & Redux Toolkit
- MUI
- CSS3

<!-- TODO: List any MAJOR libraries/frameworks (e.g. React, Tailwind) with links to their homepages. -->

## Features
### states and redux
the states in this project are managed in 2 different ways - redux, and useState. 

#### important states in redux:
 *  **betsData** - this object contains all the bets in the package. the properties names are the titles of the bets (Moneyline, any team to score, etc.) and the value of each property is an array of bets.
 *  **singles** - this array contains all the single bets. when we call the reducer "removeBets" it removes it from betsData and from singles as well.
 *   **counter** - count how many bets exist in the package. although we don't necceserely need this state (we can use count how many bets there are using betsData), it makes the code much cleaner.
 *   **valueCounter** - the sum of all the bets' values
 *   **isWindowOpen** - a boolean state. true displays the slipbet window, while false hiding it.

#### reducers in redux:
 * **addBet** - add a new bet to betsData. also affects the counter state.
 * **removeBet** - remove the bet that equal action.payload from betsData and from singles as well. also affects the counter state.
 * **changeValue** - change the valueCounter state according to action.payload.
 * **deletePackage** - basically reset all the states to default. we use it also when the submit button clicked
 * **addSingle** - add single to singles. if the single already exists - just change its value.

#### states in useState:
 * **displayBar** - a boolean state. true displays the slipbetBar, while false hiding it.
 * **textValue** - on input filed components - before the value affects betsData or singles, we keep it in a local state until the input will be a valid number.
 * **singles** - the state "singles" in Singles.jsx, unlike the state singles in the redux store - have all the bets that exist in betsData. we have this state only for displaying the unready singles in the bet slip.
 * **active** - a boolean state. true when the item is selected, false when not.


## Contact

<!-- TODO: Include icons and links to your RELEVANT, PROFESSIONAL 'DEV-ORIENTED' social media. LinkedIn and dev.to are minimum. -->

## Acknowledgements

<!-- TODO: List any blog posts, tutorials or plugins that you may have used to complete the project. Only list those that had a significant impact. Obviously, we all 'Google' stuff while working on our things, but maybe something in particular stood out as a 'major contributor' to your skill set for this project. -->
