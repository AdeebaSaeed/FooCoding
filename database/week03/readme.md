ToDo App
The ToDo App is a web application developed using Node.js, Express, and MySQL. It provides a simple interface to manage and organize tasks.

Prerequisites
Before running the ToDo App, ensure you have the following dependencies installed:

Node.js
MySQL


Installation

Clone the repository:
git clone <repository-url>

Install the required dependencies:
npm install express mysql2

Configure the MySQL database:

Create a new MySQL database.
create a new js file.
connect it with database.
start the server by running command
node app.js

The server should start running on http://localhost:3000.
or any available port.

API Endpoints
The ToDo App provides the following API endpoints:

Insert item(s) in ToDo list.
POST /todo_lists/:listId/items .

Create a new ToDo list
POST /todo_lists Create a new ToDo list.

Get all ToDo lists
GET /todo_lists: Retrieve all ToDo lists.

Get a specific ToDo list
GET /todo_lists/:listId: Retrieve a specific ToDo list by ID.

Update a ToDo list
PUT /todo_lists/:listId: Update a ToDo list by ID.

Delete a ToDo list
DELETE /todo_lists/:listId: Delete a ToDo list by ID.

Create a new ToDo item
POST /todo_lists/:listId/items: Create a new ToDo item in a specific ToDo list.

Update a ToDo item
PUT /todo_lists/:listId/items/:itemId: Update a ToDo item in a specific ToDo list by item ID.

Delete a ToDo item from ToDo list.
DELETE /todo_lists/:listId/items/:user_id, Delete a ToDo item in a specific ToDo list by item ID.

Mark an item as completed
PUT /todo_lists/:listId/items/:itemId/complete 

Add a reminder for the list 
PUT /todo_lists/:listId/reminder'



API Testing
You can use Postman to test the ToDo App's APIs.

Contributing
Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.
Please make sure to follow the existing code style and include appropriate tests with your changes.

Acknowledgments
The ToDo App was developed as a learning project of Foocoding Newcomers in crash course of Full Stack Development and is not intended for production use.