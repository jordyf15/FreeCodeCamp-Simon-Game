# FreeCodeCamp's Simon Game
This is the sixth take home project in FreeCodeCamp's Coding Interview Prep where we have to create a simon game, where user can play a simon game for 20 rounds with strict or non-strict mode.

## Live Demo on CodePen
https://codepen.io/jordyf15/full/XWjqaYw

## Application Usage
Before playing the game user need to turn on the simon game, then click the play button.  
  
The game will run for 20 turns, each turn starts with simon clicking a random series of button which user needs to follow in order to go to the next turn. After reaching the 20th turn, user wins the game and then its start over from turn 1 again.  
  
User can switch between strict and non-strict mode, where a user will be given the same(non-strict) or another random pattern(strict) when they made a mistake and have to restart for that turn.  

## Technologies Used
1. Jquery version 3.5.1

## Project's User Stories
1. I am presented with a random series of button presses.
2. Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.
3. I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.
4. If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.
5. I can see how many steps are in the current series of button presses.
6. If I want to restart, I can hit a button to do so, and the game will return to a single step.
7. I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.
8. I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.