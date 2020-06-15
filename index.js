const express = require('express');
const app = express();
const todoListRoutes = require('./routes/todoList');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todo-list', todoListRoutes);

app.listen(8000, () => {
    console.log(`Server is running at port 8000`);
});