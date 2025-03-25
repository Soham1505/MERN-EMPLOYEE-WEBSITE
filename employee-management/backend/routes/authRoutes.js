const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // Admin Login (Simple Check)
  router.post("/login", (req, res) => {
    const { username, password } = req.body;
    const query = "SELECT * FROM admins WHERE username = ? AND password = ?";
    db.query(query, [username, password], (err, results) => {
      if (err) return res.status(500).json({ message: "Error logging in" });
      if (results.length > 0) {
        res.json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    });
  });

  return router;
};
