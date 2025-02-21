<?php
// Database connection
$servername = "localhost"; // Change this to your database server
$username = "sahithya"; // Change this to your database username
$password = "iiits123"; // Change this to your database password
$dbname = "GYMS"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetching form data
$name = $_POST['name'];
$dob = $_POST['dob'];
$password = $_POST['password'];
//$gender = $_POST['gender'];
$parentalInfo = $_POST['parentalInfo'];

// SQL query to insert data into User table
$sql = "INSERT INTO UserLogin (Name, DateOfBirth, Password, Guardian) VALUES ('$name', '$dob', '$password', '$parentalInfo')";

// Execute SQL query
if ($conn->query($sql) === TRUE) {
    // Redirect to index.html after successful insertion
    header("Location: index.html");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close database connection
$conn->close();
?>
