# Note-Taker
Note-Taker is a web application that allows users to write, save, and delete notes. It uses an Express.js backend to save and retrieve note data from a JSON file.

## Installation
To install Note-Taker, follow these steps:

- Clone this repository to your local machine.
- Open your terminal and navigate to the project directory.
- Run npm install to install the project dependencies.
- Run npm start to start the server.

## Usage
To use Note-Taker, open your web browser and navigate to the following URLs:

- http://localhost:3001/notes to view and write notes.
- http://localhost:3001/ to view the homepage.
- Note-Taker uses a db.json file on the backend to store and retrieve notes using the fs module. The following API routes are available:

- GET /api/notes reads the db.json file and returns all saved notes as JSON.
- POST /api/notes receives a new note to save on the request body, adds it to the db.json file, and then returns the new note to the client.
- DELETE /api/notes/:id receives a query parameter containing the id of a note to delete. This means each note has a unique id when it's saved. 
- In order to delete a note, all notes are read from the db.json file, the note with the given id property is removed, and then the notes are rewritten to the db.json file.


## User Story
As a user, I want to be able to write and save notes so that I can organize my thoughts and keep track of tasks I need to complete. I also want to be able to delete notes I've written before.

## Business Context
For users who need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Acceptance Criteria
- The application should allow users to create and save notes.
- The application should allow users to view previously saved notes.
- The application should allow users to delete previously saved notes.