<?php
// db_connect.php

$host = 'localhost';
$db   = 'ecommerce_website';
$user = 'root';
$pass = 'Password1';
$port = 3307; // Change this
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset;port=$port";

$options = [
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
  $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
  echo json_encode(["success" => false, "message" => "DB Connection failed: " . $e->getMessage()]);
  exit();
}
