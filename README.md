# Ant Game

## DESCRIPTION
You play as an unfortunate ant who cannot return home until you collect enough food even though there are spiders swarming the area for some unknown reason. Apparently the food must be collected right now.

If you collect enough food, your ant colony will let you come back. 
Navigate the map to collect food without getting grabbed by any spiders.

### Controls and How to Play
Use the arrowkeys to move. 
Touch food with the ant player to collect it. 
When all food is collected, the anthill will open. 
Touch the anthill with the ant player to return home and win.

If you're hit by a spider, you die (and lose).

## DEMO
You can find the demo here: 

https://malfell.github.io/ant-game/

## TECHNOLOGIES
Javascript, TypeScript, CSS, and HTML

## TECHNICAL INFORMATION
There is currently nothing to install or set up. You can click the above link to play.

There is currently no means of contributing to this project.

## ISSUES
* If player presses a new arrow key while still holding down the last arrow key, the ant will freeze for a bit before being able to move. Pressing any key while moving will freeze the ant for a moment. The ant stops moving whenever any key on the keyboard is released, regardless of what key it is.
* Food can currently spawn on the ant hill. Shouldn't do that. 
* Canvas size slightly changes when you go between game, start, and instructions. I'm confused on that one because when I made everything the same size, it was off. So I ended up changing sizes individually to make them closer. 
* Game continues to run after Game Over. If you click on play again or return to main menu, game will continue from where you left off. I took out the play again button until I solve this. The return to main menu button will reload the whole page. Not the solution I wanted, but that's what I have for now.  
* There is an issue getting the game to restart properly. At the moment, I removed the "Play Again" button, and made the "Return to Menu" button reload the page. Not convenient but a slight temporary solution.
* There are no spiders or enemies. Just blocks. I haven't had time to make spider sprites.
* The ant sprite used to be animated, but there was an issue when changing the code. I need to go back and rework this.
* Game background could use work. I'd rather not have the single color background. 
* On the Winner screen, clicking back to menu button crashes the browser for some reason. I took out the button for now. 
* If player dies many times in a row, the page will flicker between screens before returning to the home page. 
* If player stays on the Game Over screen for a minute or so, and then return to the main menu button and click play, the screen with flash to where the player last left off in the game before returning to the main menu. I was having issues getting the game to restart properly. 
* If player sits on the Game Over screen for a while, the game will either sometimes keep running or you start off from where you left off the next time you start from the main menu.
* If player is moving and right clicks on the screen at the same time, the ant will start drifting. 
* Sometimes enemies spawn too close to the player's starting position.
* In one game, player started from the upper right corner.
* The main menu buttons bounce a little when player first loads the game or hits "back to main menu" on the Game Over screen.

## UNFINISHED FUNCTIONALITY
Most of the unfinished functionality is in plans.txt 
* I plan to switch the game code over to work with Express or React--probably something other than HTML canvas so there will be less issues when switching menu options.
* Dangerous Terrain
* Different enemies and different movement paths
    * Shadow of a bird appears, and there's a time limit where ant needs to find
    cover before the bird gets them.
    * Spider on a web? Ant needs to avoid the spider webs. Avoid spider shadows.
    * Beetles or other bugs are walking around and have the red eye vision code where ant needs to avoid getting hit with the red cone because that means ant is caught.
    * Fire ants? Enemy ants?
* Different levels
    * Ant could have levels inside a house and need to avoid people and ant traps.
    * Larger levels? Larger levels could involve safe zones. 
* Lives
    * The user could have a row of ants walking together. When an enemy eats an ant, or the leading ant falls into dangerous terrain, then the leader dies, and the next ant must lead. So the ants are like "lives."
* Two ant or ant groups at once?
    * Could allow for a second player to use the same keyboard or let the initial have an extra challenge. One ant group is controlled with WASD and the other ant group is controlled with the arrow keys. 
