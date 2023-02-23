// Define language and create an Express application
const express = require('express');
const app = express();

// Enable JSON parsing and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Connect to the HTML and API routes
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");


htmlRoutes(app);
apiRoutes(app);

// Set the port to listen on, defaulting to 3000 if PORT environment variable is not set
const PORT = process.env.PORT || 3000;

// Start the server
app.listen (PORT, function(){
    console.log("App is listening on port 3000");
});
