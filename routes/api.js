// /routes/api.js
const users = [
  { name: 'Alice Smith', email: 'alice@example.com' },
  { name: 'Bob Johnson', email: 'bob@example.com' },
  { name: 'Charlie Lee', email: 'charlie@example.com' },
  { name: 'David Kim', email: 'david@example.com' },
  { name: 'Eva Davis', email: 'eva@example.com' },
];

// API route to search users
module.exports = (req, res) => {
  if (req.method === 'GET') {
    const search = req.query.search?.toLowerCase() || '';
    
    // Filter users based on search query
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search)
    );

    // Send filtered users as response
    res.status(200).json(filteredUsers);
  } else {
    res.status(405).send({ message: 'Method Not Allowed' });
  }
};
