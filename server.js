const express = require('express');
const mongoose = require('mongoose');
const app = express();
const budgetRoutes = require('./routes/budgetRoutes.js');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/budgettracker', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Error connecting to MongoDB', err);
});

app.use(express.json()); // This middleware allows us to use JSON data in our routes.
app.use('/api/budget', budgetRoutes); // Registering the budget routes
app.use(express.static('client/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/public/index.html');
});

const PORT = 3001;
app.use(express.static('public'));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
