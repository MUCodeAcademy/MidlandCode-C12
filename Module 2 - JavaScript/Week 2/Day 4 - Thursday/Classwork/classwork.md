## Personal Project

You have three options (this is 100% your call) for your personal project. Feel free to add more functionality than what is listed.

This will be due at the start of class on Monday

1. Build a Simon Says game. It could look similar to image simon.jpg, but it can look however you want:
   - Have a start button that the user can click to start the game
   - Each button is a certain color
   - When the game starts, pick a button at random that lights up its color for 1-2 seconds
   - If the user clicks that button, the game repeats that button and then adds another
   - This keeps going for 5 cycles (or whatever number you'd like), or until the player picks a wrong button
      - example: red, red-blue, red-blue-green, red-blue-green-yellow, red-blue-green-yellow-green
   - Display a victory screen/alert after the player successfully completes 5 cycles
   - Display a defeat screen/alert if the player clicks a wrong button

2. Build a drawing pad for users. It could look similar to the image sketchpad.jpg, but it can look however you want. It should have the following functionality (at minimum):

   - Have a canvas HTML element
   - Have 3 preset colors of your choice (to the left of the canvas)
   - Allow the user to select any of the three colors and use some form of CSS (in this case the white border around red) to show which color is selected
   - On mouse down on the canvas, start drawing on the canvas until the user releases the mouse or leaves the canvas. The color of the line should correspond to the selected color on the right.
   - At the bottom have three sliders representing red green and blue, they should allow for a numerical value from 0-255. When the sliders are moved, the color in the box to the left of the sliders (in this case the purplish box) should adjust color according to the new `rgb()` values;
   - When a user clicks add color, it should add the new color to the bottom of the other color buttons and be able to be selected for use on the canvas.
   - Feel free to add more functionality, such as a way to clear the canvas, change the stroke size, add a better cursor etc.

3. Build a whack-a-mole game:
   - Have a grid of divs / containers on your page. They should all be the same size and be at least a 5x5 grid although you can add more if you would like
   - Have a start button that the user can click to start the game
   - When the game starts, show a timer for X amount of seconds. X can be any value you would like but should be no more than 30 seconds.
   - Every second or every random amount of time, have one of the divs light up by adding a class to it. After a reasonable (your call) amount of time remove the color change to that div and have it revert to normal.
   - If a user clicks one of the divs while it is lit up, a score counter at the top should increment by one.
   - After the timer ends, the cycle should stop and the user should see their score and have the ability to start a new game. Starting a new game should reset the score and start over.
   - If you would like / have time add the ability to choose a difficulty when the user starts the game.
