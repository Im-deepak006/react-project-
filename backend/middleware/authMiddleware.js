const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'yoursecretkey';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extract the token from 'Bearer TOKEN'

  if (!token) {
    return res.status(401).json({ message: 'Access Denied: No token provided' });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified; // Save user info (id) into request
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
}

module.exports = authenticateToken;
