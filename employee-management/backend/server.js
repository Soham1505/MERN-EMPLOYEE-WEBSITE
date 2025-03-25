const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "../frontend")));

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3307,  // Add this line if MySQL is running on a specific port
  database: "employeeDB"
});

db.connect(err => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL!");
    // Run a simple query to test the connection
    db.query("SELECT NOW()", (err, results) => {
      if (err) {
        console.log("Error running query:", err);
        return;
      }
      console.log("Current Time from Database:", results);
    });
  }
});

// Fetch all employees
app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, results) => {
    if (err) {
      res.status(500).send("Error fetching data.");
      return;
    }
    res.json(results);  // Send employee data as a JSON response
  });
});

// Use the routes, passing the MySQL connection
app.use("/api/employees", require("./routes/employeeRoutes")(db));
app.use("/api/auth", require("./routes/authRoutes")(db));

// Start the server  
app.listen(5000, () => console.log("Server running on port 5000"));
