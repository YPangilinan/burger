# Happibee Burger

<img width="1243" alt="Screen Shot 2020-07-15 at 12 41 24 PM" src="https://user-images.githubusercontent.com/61812035/87588429-806a4c00-c698-11ea-86b0-b8b9d995b143.png">

### Burger Overview
Happibee is the newest burger joint in town! The restaurant website also serves as a "burger logger" that utilizes MySQL, Node, Express, Handlebars, an ORM and a MVC design pattern to let the customer know which burgers they have already tried from Happibee, add in a new burger, and also allow them to remove the evidence from the log, like they never ate the burger!

<img width="1425" alt="Screen Shot 2020-07-15 at 1 03 29 PM" src="https://user-images.githubusercontent.com/61812035/87590414-962d4080-c69b-11ea-914f-f6ea53bc105f.png">

### See it in action!
*Happibee* is deployed to Heroku. Please check it out [here](https://piscine-moliere-69757.herokuapp.com/)

### How was this app created?
The technologies used to create this app are:
- JavaScript
- Node.js
- [Express.js](https://expressjs.com/en/guide/routing.html)
- [Handlebars](https://handlebarsjs.com/installation/)
- HTML
- Bootstrap
- [MySQL Workbench]((https://www.npmjs.com/package/mysql)
- [MySQL](https://dev.mysql.com/downloads/workbench/)


### Want to run it locally?
To install the application follow the instructions below:

	git clone git@github.com:YPangilinan/burger.git
	cd burger
	npm install
This should install the necessary packages from the Package.JSON needed for this application. 

In the terminal,run the Node.js application with the command below.

	node server.js
	
The application will now be running locally on `PORT`, in this case that is port 3000. You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:3000`.  

## Code Explanation
- The `server.js` file sets up the Express server, specifying port number, the npm packages that need to be loaded, and also the routes, which we have externalized
- This app utilizes an MVC design pattern (Model, Views, Controller) with the following directory structure: 
<img width="350" alt="Screen Shot 2020-07-15 at 1 08 06 PM" src="https://user-images.githubusercontent.com/61812035/87590791-3b481900-c69c-11ea-9c6e-71042cf1b770.png">

### Hope you enjoy your burgers!
