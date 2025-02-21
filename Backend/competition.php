<?php
$servername = "localhost";
$username = "sahithya";
$password = "iiits123";
$dbname = "GYMS";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form data
$username = $_POST['username'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$genre = $_POST['genre'];

// File upload handling
$targetDirectory = "uploads/";
$targetFile = $targetDirectory . basename($_FILES["file"]["name"]);

// Check if the file already exists
//if (file_exists($targetFile)) {
//    echo "Sorry, file already exists.";
 //   exit();
//}

// Check file size (you can modify this limit as needed)
if ($_FILES["file"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    exit();
}

// Allow certain file formats
$allowedFileTypes = array("jpg", "jpeg", "png", "gif");
$imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

if (!in_array($imageFileType, $allowedFileTypes)) {
    echo "Sorry, only JPG, JPEG, PNG, and GIF files are allowed.";
    exit();
}

// Move the uploaded file to the target directory
if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
    // Insert data into the database
    $sql = "INSERT INTO competetion (username, age, gender, genre, file_path) VALUES ('$username', '$age', '$gender', '$genre', '$targetFile')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "Sorry, there was an error uploading your file.";
}

// Close the database connection
$conn->close();
?>
