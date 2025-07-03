<?php
// db_connect.php

$host = 'localhost';
$db   = 'photo';
$user = 'root';
$pass = '';           // No password
$port = 3307;         // ✅ Match your MariaDB port

$dsn = "mysql:host=$host;port=$port;dbname=$db";

$options = [
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
  $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
  echo json_encode([
    "success" => false,
    "message" => "DB Connection failed: " . $e->getMessage()
  ]);
  exit();
}
?>
