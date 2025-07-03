<?php
$host = 'localhost';
$port = 8080; // Confirmed MySQL port
$db   = 'foto';
$user = 'Raymond';
$pass = ''; // No password set

$dsn = "mysql:host=$host;port=$port;dbname=$db";

$options = [
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
  $pdo = new PDO($dsn, $user, $pass, $options);
  echo json_encode([
    "success" => true,
    "message" => "Connected successfully"
  ]);
} catch (PDOException $e) {
  echo json_encode([
    "success" => false,
    "message" => "DB Connection failed: " . $e->getMessage()
  ]);
  exit();
}
?>
