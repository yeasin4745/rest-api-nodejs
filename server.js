const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [
  { id: 1, name: 'Yeasin', email: 'yeasin@example.com', role: 'Full-Stack Developer' },
  { id: 2, name: 'Ahmed', email: 'ahmed@example.com', role: 'Frontend Developer' }
];

// Root Route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to REST API',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
  });
});

// GET - সব ইউজার দেখানো
app.get('/api/users', (req, res) => {
  res.status(200).json({
    success: true,
    count: users.length,
    data: users
  });
});

// GET - নির্দিষ্ট একটি ইউজার দেখানো
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  res.status(200).json({
    success: true,
    data: user
  });
});

// POST - নতুন ইউজার তৈরি করা
app.post('/api/users', (req, res) => {
  const { name, email, role } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: 'Name and email are required'
    });
  }
  
  const newUser = {
    id: users.length + 1,
    name,
    email,
    role: role || 'User'
  };
  
  users.push(newUser);
  
  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: newUser
  });
});

// PUT - ইউজার আপডেট করা
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  const { name, email, role } = req.body;
  
  if (name) user.name = name;
  if (email) user.email = email;
  if (role) user.role = role;
  
  res.status(200).json({
    success: true,
    message: 'User updated successfully',
    data: user
  });
});

// DELETE - ইউজার মুছে ফেলা
app.delete('/api/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  const deletedUser = users.splice(userIndex, 1);
  
  res.status(200).json({
    success: true,
    message: 'User deleted successfully',
    data: deletedUser[0]
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Server Error',
    error: err.message
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/users`);
});
