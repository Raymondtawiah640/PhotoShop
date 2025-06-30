<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require 'db_connect.php'; // ✅ PDO connection

$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

// Validation
if (empty($email) || empty($password)) {
  echo json_encode(["success" => false, "message" => "Email and password are required"]);
  exit();
}

try {
  // Fetch user by email
  $stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
  $stmt->execute(['email' => $email]);
  $user = $stmt->fetch(PDO::FETCH_ASSOC);

  // Check user exists and password is correct
  if ($user && password_verify($password, $user['password'])) {
    echo json_encode(["success" => true, "message" => "Login successful"]);
  } else {
    echo json_encode(["success" => false, "message" => "Invalid credentials"]);
  }

} catch (PDOException $e) {
  echo json_encode(["success" => false, "message" => "Database error: " . $e->getMessage()]);
}
?>
