





## ToDo App

The ToDo App is a web application developed using Node.js, Express, and MySQL. It provides a simple interface to manage and organize tasks.


## Prerequisites

Before running the ToDo App, ensure you have the following dependencies installed:

- Node.js
- MySQL



    
## isntallation & Configuration
 --npm install express mysql2

Create a new MySQL database.
create a new js file.
connect it with database.
start the server by running command
node app.js

The server should start running on http://localhost:3000.
or any available port.
### API END POINTS
The ToDo App provides the following API endpoints:


#### POST /todo_lists/:listId/items . Insert item(s) in ToDo list.


#### POST /todo_lists Create a new ToDo list.Create a new ToDo list

#### GET /todo_lists/:listId: Retrieve a specific ToDo list by ID.

#### DELETE /todo_lists/:listId: Delete a ToDo list by ID.Delete a ToDo list

#### DELETE /todo_lists/:listId/items/:user_id,.Delete a ToDo item from ToDo list.

#### PUT /todo_lists/:listId/items/:itemId/complete Mark an item as completed

#### PUT /todo_lists/:listId/reminder'.Add a reminder for the list 



## API Testing

API testing is done by POSTMAN.
## Contribution

Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.
Please make sure to follow the existing code style and include appropriate tests with your changes.
## Acknowldgement

The ToDo App was developed as a learning project of Foocoding Newcomers in crash course of Full Stack Development and is not intended for production use.