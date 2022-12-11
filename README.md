Step One: Planning
Before looking at our code, take a few minutes to think about how you would build a game like
this using HTML/JS/CSS:

what HTML would be useful for the game board itself?
A table with row and column tags
An ID for the top most row for input
An ID for the rest showing gameboard
Maybe ID's for row and column
A section showing whose turn it is

how could you represent a played-piece in the HTML board?
We can do this with a CSS circle or just a O colored via html

in the JavaScript, what would be a good structure for the in-memory game board?
an array with nested arrays

what might the flow of the game be?
Flow of the game is one person then the next, so red then blue
when the board is full or someone has 4 in a row, wipe the board, start over
maybe swap who goes first

Then, write down some functions names/descriptions that would be useful for this game.

topRow = the row at the top
columnSelect = the column for what was clicked

an event listener for the click
set each square to have a column and row descriptor

a function for finding 4 in a row
a function for finding 4 in a column
a function for finding 4 in a diagonal
a function for finding 4 in a diagonal in a different direction

We could have datasets for every possible row, column, and diagonal
    and have it count two things, number of red and number of blue circles
    then check if there is a winning move once the number of circles for
    a single color is >=4 and <=6
    There are 6 rows, 7 columns, and 12 diagonals that someone can put 4 in to win

Step Two: ES2015
This code would benefit from updating to ES2015 style — there are lots of place where var is used
that could be changed to either let or const to improve readability. Are there other style fixes
you can make?

rename all vars to lets and const based on if you want to reassign or not
There are other style fixes.
Some iterable loops that could be changed to for...in
not sure if the question is a yes / no or instruction

Step Three: makeBoard
The makeBoard() function needs to be implemented. It should set the global board variable to be an
 array of 6 arrays (height), each containing 7 items (width).
# ConnectFour
