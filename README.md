Hosted game may be found at: https://github.com/shkherad/game-project-client

This is a single page application that allows a user to play tic-tac-toe games.

User is greeted with a log-in screen where they may log into an existing profile or create a new profile. Once authenticated user will enter the the game view state where they may begin new games of tic tac toe.

User can play up to 4 games at a time with another user on the same device (users on different devices feature to be built out if time permits).  User can also view statistics on a left had drop down menu or manage profile such as change password or logout on the right had drop down menu.

TECHNOLOGIES:
-HTML5, CSS, Javascript, JQuery, ajax
-Sass, Bootstrap

PLANNING:
WIREFRAME: -Extremely clean -Login screen upon arrivial is a block with login: email, password sign up: email, password, password main screen can toggle between these two -Main screen: game right in middle of screen left dropdown to keep track of statiics right dropdown: logout, change password etc -Change password will pop up similat box to loging but old password, new password, submit/close -Logout will clear page contents and return to home login/signup menu

DATA STRUCTURE: Ajax+json communicating with ruby server Ruby server will keep track of users for authentication current games game status (see game api) Ajax will get/set user information and game information Client will sent game statuses back to the server but will calculate the result of a game each time a move is sumbitted. Games will be in form of a 9 element array

GAME BOARD MARKUP: Game will be represented as a 9 element array with indicies 0-8: 0-1-2 3-4-5 6-7-8 or game array = [0,1,2,3,4,5,6,7,8]; Game will be initialized as an empty string array length 9 Then filled in with a player x or o. All cobinations for winning will be represented in an if || statement to determine game status.
