<?php
header('Content-Type: application/json');

// Database connection (update with your own credentials)
$host = 'localhost';
$dbname = 'your_database';
$username = 'your_username';
$password = 'your_password';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Database connection failed']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $district = $data['district'];

    if (empty($district)) {
        echo json_encode(['error' => 'District is required']);
        exit;
    }

    try {
        // Prepare SQL statement to fetch sectors based on the district
        $stmt = $pdo->prepare('SELECT sector_name FROM sectors WHERE district_name = :district');
        $stmt->bindParam(':district', $district, PDO::PARAM_STR);
        $stmt->execute();

        // Fetch sectors
        $sectors = $stmt->fetchAll(PDO::FETCH_COLUMN);

        echo json_encode($sectors);
    } catch (PDOException $e) {
        echo json_encode(['error' => 'Query failed']);
    }
}
?>
