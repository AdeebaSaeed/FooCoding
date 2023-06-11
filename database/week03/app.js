const express = require('express');
const mysql = require('mysql2/promise');

// Create express application
const app = express();
app.use(express.json());

// Database connection
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Adeeba@777',
  database: 'todo'
});

// Insert item(s) in ToDo list
app.post('/todo_lists/:listId/items', async (req, res) => {
  try {
    const {listId} = req.params;
    const { user_id,list_name,reminder } = req.body;

    const connection = await pool.getConnection();
    const result = await connection.query(
      'INSERT INTO todo_lists (list_id, user_id, list_name, reminder) VALUES (?, ?, ?, ?)',
      [listId, user_id, list_name,reminder]
    );

    connection.release();

    res.status(201).json({ message: 'Item inserted into todo_lists' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to insert item into todo_lists' });
  }
});

// Delete item(s) from ToDo list

app.delete('/todo_lists/:listId/items/:user_id', async (req, res) => {
  try {
    
    const {listId} = req.params;
    const {user_id}  = req.params;
    
    const connection = await pool.getConnection();
    const result = await connection.query(
      'DELETE FROM todo_lists WHERE list_id = ? AND user_id = ?',
      [listId, user_id]
    );

    connection.release();

    
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'List deleted successfully' });
    } else {
      res.status(404).json({ message: 'List not found' });
    }
  } catch (error) {
    console.error('Failed to delete list:', error);
    res.status(500).send('Something went wrong. Please contact the administrator.');
  }
});


// Create a new ToDo list
app.post('/todo_lists', async (req, res) => {
  try {
    const { user_id, list_name, reminder } = req.body;

    const connection = await pool.getConnection();
    const result = await connection.query(
      'INSERT INTO todo_lists (user_id, list_name, reminder) VALUES (?, ?, ?)',
      [user_id, list_name, reminder]
    );

    connection.release();

    res.status(201).json({ id: result.insertId, message: 'ToDo list created' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create ToDo list' });
  }
});

// Delete a ToDo list
app.delete('/todo_lists/:listId', async (req, res) => {
  try {
    const {listId}  = req.params;

    const connection = await pool.getConnection();
    const result = await connection.query(
      'DELETE FROM todo_lists WHERE list_id = ?',
      [listId]
    );

    connection.release();

    res.status(200).json({ message: 'ToDo list deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete ToDo list' });
  }
});

// Mark an item as completed
app.put('/todo_lists/:listId/items/:itemId/complete', async (req, res) => {
  try {
    const {listId} = req.params;
    const {itemId}   = req.params;

    const connection = await pool.getConnection();
    const result = await connection.query(
      'UPDATE todo_items SET completed = true WHERE list_id = ? AND item_id = ?',
      [listId, itemId]
    );

    connection.release();

    res.status(200).json({ message: 'Item marked as completed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to mark item as completed' });
  }
});

// Add a reminder for the list (not for the item)
app.put('/todo_lists/:listId/reminder', async (req, res) => {
  try {
    const {listId}  = req.params;
    const { reminder } = req.body;

    const connection = await pool.getConnection();
    const result = await connection.query(
      'UPDATE todo_lists SET reminder = ? WHERE list_id = ?',
      [listId, reminder]
    );

    connection.release();

    res.status(200).json({ message: 'Reminder added to the ToDo list' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add reminder to the ToDo list' });
  }
});

// Start the server
app.listen(3049, () => {
  console.log('Server is Connected');
});
