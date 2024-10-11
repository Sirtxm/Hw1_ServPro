<?php
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dbhw8";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert data from the form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $dob = $_POST['dob'];
    $age = $_POST['age'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $education = $_POST['education'];
    $business = $_POST['business'];
    $position = $_POST['position'];

    // SQL query to insert form data
    $sql = "INSERT INTO members (fname, lname, dob, age, email, phone, address, education, business, position)
    VALUES ('$fname', '$lname', '$dob', '$age', '$email', '$phone', '$address', '$education', '$business', '$position')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Display all records
$sql = "SELECT * FROM members";
$result = $conn->query($sql);

echo "<table border='1'>";
echo "<tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Date of Birth</th><th>Age</th><th>Email</th><th>Phone</th><th>Address</th><th>Education</th><th>Business Type</th><th>Position</th></tr>";

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row['id'] . "</td><td>" . $row['fname'] . "</td><td>" . $row['lname'] . "</td><td>" . $row['dob'] . "</td><td>" . $row['age'] . "</td><td>" . $row['email'] . "</td><td>" . $row['phone'] . "</td><td>" . $row['address'] . "</td><td>" . $row['education'] . "</td><td>" . $row['business'] . "</td><td>" . $row['position'] . "</td></tr>";
    }
} else {
    echo "0 results";
}
echo "</table>";

// Example of SQL queries with WHERE conditions
// 1. Using comparison operators
$sql = "SELECT * FROM members WHERE age > 30";
$result = $conn->query($sql);

// Logic operators (AND, OR, NOT), BETWEEN, NULL checks, etc. can be added similarly

$conn->close();
?>
