const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // Add Employee
  router.post("/add", (req, res) => {
    const { name, email, position, salary } = req.body;
    const query = "INSERT INTO employees (name, email, position, salary) VALUES (?, ?, ?, ?)";
    db.query(query, [name, email, position, salary], (err, results) => {
      if (err) return res.status(500).json({ message: "Error adding employee" });
      res.json({ message: "Employee added", id: results.insertId });
    });
  });

  // Get All Employees
  router.get("/", (req, res) => {
    const query = "SELECT * FROM employees";
    db.query(query, (err, results) => {
      if (err) return res.status(500).json({ message: "Error fetching employees" });
      res.json(results);
    });
  });

  // Search Employee by Name
  router.get("/search", (req, res) => {
    const { name } = req.query;
    const query = "SELECT * FROM employees WHERE name LIKE ?";
    db.query(query, [`%${name}%`], (err, results) => {
      if (err) return res.status(500).json({ message: "Error searching employee" });
      res.json(results);
    });
  });

  // Update Employee
  router.put("/update/:id", (req, res) => {
    const { name, email, position, salary } = req.body;
    const query = "UPDATE employees SET name = ?, email = ?, position = ?, salary = ? WHERE id = ?";
    db.query(query, [name, email, position, salary, req.params.id], (err, results) => {
      if (err) {
        console.error("Error updating employee:", err); // Add error logging
        return res.status(500).json({ message: "Error updating employee" });
      }
      res.json({ message: "Employee updated" });
    });
  });

  // Delete Employee
  router.delete("/delete/:id", (req, res) => {
    const query = "DELETE FROM employees WHERE id = ?";
    db.query(query, [req.params.id], (err, results) => {
      if (err) {
        console.error("Error deleting employee:", err); // Add error logging
        return res.status(500).json({ message: "Error deleting employee" });
      }
      res.json({ message: "Employee deleted" });
    });
  });

  return router;
};
