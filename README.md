Stack
----------

This web application uses the MEAN Stack:

MongoDB - No-SQL Database

Express - Javascript framework for building REST API inside your application, used with node.js

AngularJS - Front-end web framework

Node.js - Server-side framework


Project Structure:
----------

bin (not sure what this is for)
node_modules (contains all the third-party modules that we depend on)
public (contains all front-end logic)
server (contains all back-end logic)
package.json (declares necessary dependencies)
app.js (web application starter file)

Important Files:
----------

	app.js
	----------

This is the starter file that kicks off the web application; it declares the routes() of our application, where to find the views, and the connection url to the mongo database.

	server/views/index.ejs
	----------
All views for this application are found in the server/views folder. We are using the ejs view engine. Inside the views folder is a file named index.ejs which is loaded as the home page. Files with a .ejs extension are extremely similar to .html files, but is readable by the Express framework. In the body tag of index.ejs we use the "ng-app" attribute to declare that the AngularJS framework will be controlling the front-end. You'll notice a "<ui-view></ui-view>" in the body, this is where Angular will dynamically load content for the application. This website is actually a single-page application. We are always on the index.ejs page, but Angular dynamically swaps content in and out of the <ui-view></ui-view> section in that one page. You should declare all css stylesheets, and javascript files here.

	server/routes
	----------
From the server perspective we only have two routes, default and api. The whole site is hosted on the default route, while the api route describes the different REST endpoints that our server exposes. Any client can hit these endpoints (ie. Google Chrome Postman, Terminal `curl` command, our Angular client code).
Within the default route, there are several different 'states' in our single-page web application (An article, home, about us, etc...). Those invididual states are defined using the Angular module 'state-provider' in the client code (public/js/cardillApp.js) 

	cardillApp.js
	----------
This file contains the Angular 'state-provider' and the different valid states of our application. Here we declared that any unrecognized sub URL should direct to the home page.
