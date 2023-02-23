// Require the path module to work with file and directory paths
const path = require('path');

// Export a function that takes an Express app as an argument
module.exports = function (app) {

	// Create a route for the home page that sends the index.html file
	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});

	// Create a route for the notes page that sends the notes.html file
	app.get('/notes', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/notes.html'));
	});
};