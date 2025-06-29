<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");


require 'db_connect.php'; // ✅ Reuse PDO connection

$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

// Validation
if (empty($email) || empty($password)) {
  echo json_encode(["success" => false, "message" => "Email and password required"]);
  exit();
}

// Query using prepared statement (PDO)
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email AND password = :password");
$stmt->execute(['email' => $email, 'password' => $password]);
$user = $stmt->fetch();

if ($user) {
  echo json_encode(["success" => true, "message" => "Login successful"]);
} else {
  echo json_encode(["success" => false, "message" => "Invalid credentials"]);
}
