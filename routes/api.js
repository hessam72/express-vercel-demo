// /routes/api.js
const express = require('express');
const router = express.Router();

// Dummy data for users
const users = [
  { name: 'Alice Smith', email: 'alice@example.com' },
  { name: 'Bob Johnson', email: 'bob@example.com' },
  { name: 'Charlie Lee', email: 'charlie@example.com' },
  { name: 'David Kim', email: 'david@example.com' },
  { name: 'Eva Davis', email: 'eva@example.com' },
];

// API route to search users
router.get('/users', (req, res) => {
  const search = req.query.search?.toLowerCase() || '';
  
  // Filter users based on search query
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search)
  );

  res.json(filteredUsers);
});

module.exports = router;
