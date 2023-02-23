// Import the database and file system modules
const db = require('../db/db.json');
const fs = require('fs');

// Calculate the ID for new notes
let id = db.length + 1;

// Export a function that takes an Express app instance as an argument
module.exports = function (app) {

	// Handle POST requests to the /api/notes endpoint
	app.post('/api/notes', function (req, res) {
		// Log the incoming request body
		console.log(req.body);

		// Assign an ID to the new note and log the updated note
		req.body.id = id++;
		console.log(req.body);

		// Add the new note to the database array and write the updated database to file
		db.push(req.body);
		fs.writeFile('./db/db.json', JSON.stringify(db), function (err) {
			if (err) throw err;
			// Respond with the updated database as JSON
			res.json(db);
		});
	});

	// Handle GET requests to the /api/notes endpoint
	app.get('/api/notes', function (req, res) {
		// Respond with the entire database as JSON
		res.json(db);
	});

	// Handle DELETE requests to the /api/notes/:id endpoint
	app.delete('/api/notes/:id', function (req, res) {
		// Parse the ID from the request parameters
		var id = parseInt(req.params.id);

		// Loop through the database and remove the note with the specified ID
		for (var i = 0; i < db.length; i++) {
			if (db[i].id === id) {
				db.splice(i, 1);
			}
		}
		// Log the updated database and write it to file
		console.log(db);
		fs.writeFile('./db/db.json', JSON.stringify(db), function (err) {
			if (err) throw error;
			// Respond with the updated database as JSON
			res.json(db);
		});
	});
};