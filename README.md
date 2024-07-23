Given I am a new developer joining the team,
When I clone down the backend repo,
Then I should see a clear README that details how to install and run the application using Node through a command line. The application is an Express API.

Instructions for installing and running application through Node using command line:

1. Navigate to applicable folder in command line (you can use mkdir to make folder and cd to navigate)
2. npm init in integrated terminal
3. npm install express
4. Add "type":"module" in package.json file. Make sure it is not nested.
5. To run the app add "start": "node app.js" below the "test" line. (Add , at the end of lines as necessary)
6. To run the app in the command line run npm start
7. Open the url (using postman) to interact with API. Input GET/POST/http://localhost:3000/(endpoint).
