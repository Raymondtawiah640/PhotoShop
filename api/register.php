<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

// Basic validation
if (!$name || !$email || !$password) {
  echo json_encode(["success" => false, "message" => "All fields are required."]);
  exit;
}

// Include the database connection
require 'db_connect.php';

try {
  // Check if user already exists
  $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
  $stmt->execute([$email]);

  if ($stmt->rowCount() > 0) {
    echo json_encode(["success" => false, "message" => "Email already registered."]);
    exit;
  }

  // Hash the password
  $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

  // Insert new user
  $stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
  $stmt->execute([$name, $email, $hashedPassword]);

  echo json_encode(["success" => true, "message" => "Registration successful."]);


} catch (PDOException $e) {
  echo json_encode(["success" => false, "message" => "Database error: " . $e->getMessage()]);
}
?>
