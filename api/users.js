// /api/users.js

const users = [
  { name: 'Alice Smith', email: 'alice@example.com' },
  { name: 'Bob Johnson', email: 'bob@example.com' },
  { name: 'Charlie Lee', email: 'charlie@example.com' },
  { name: 'David Kim', email: 'david@example.com' },
  { name: 'Eva Davis', email: 'eva@example.com' },
];

module.exports = (req, res) => {
  const search = req.query.search?.toLowerCase() || '';

  // Filter users based on search query
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search)
  );

  // Send filtered users as response
  res.status(200).json(filteredUsers);
};
