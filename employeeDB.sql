-- Database: employeeDB

-- Table: admins
CREATE TABLE `admins` (
  `username` VARCHAR(20) NOT NULL,
  `password` VARCHAR(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Insert data into `admins`
INSERT INTO `admins` VALUES
('admin', 'admin123');

-- Table: employees
CREATE TABLE `employees` (
  `id` INT(11) NOT NULL,
  `name` VARCHAR(25) NOT NULL,
  `email` VARCHAR(20) NOT NULL,
  `position` VARCHAR(11) NOT NULL,
  `salary` INT(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Insert data into `employees`
INSERT INTO `employees` VALUES
(1, 'Sairaj Chalke', 'Sairaj@email.com', 'Analyst', 55000),
(2, 'Abhishek', 'Abhishek@email.com', 'HR Executiv', 50000),
(3, 'Kunal KAdam', 'Kunal.king@email.co', 'Team Lead', 70000),
(4, 'Rushikesh Karad', 'Rushikesh@email.com', 'Designer', 58000),
(5, 'Ashish Dhadge', 'ashu.lee@email.com', 'Engineer', 62000),
(6, 'Sonu Ingawale', 'Royalsonu@email.com', 'MANAGER', 91000),
(7, 'Omkar Dhanawade', 'Omkar@email.com', 'Consultant', 68000);
