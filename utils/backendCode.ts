export const sqlContent = `
-- Database: recruitment_db

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- --------------------------------------------------------

-- Table structure for table 'settings'
CREATE TABLE \`settings\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`site_name_ar\` varchar(255) NOT NULL,
  \`site_name_en\` varchar(255) NOT NULL,
  \`phone\` varchar(20) NOT NULL,
  \`email\` varchar(255) NOT NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table 'settings'
INSERT INTO \`settings\` (\`site_name_ar\`, \`site_name_en\`, \`phone\`, \`email\`) VALUES
('مكتب الريان للاستقدام', 'Al-Wasit Recruitment', '0500000000', 'info@Al-Rayan.net');

-- --------------------------------------------------------

-- Table structure for table 'users'
CREATE TABLE \`users\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`username\` varchar(50) NOT NULL,
  \`password\` varchar(255) NOT NULL,
  \`created_at\` timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (\`id\`),
  UNIQUE KEY \`username\` (\`username\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table 'users'
-- Password is 'admin123' hashed with BCRYPT
INSERT INTO \`users\` (\`username\`, \`password\`) VALUES
('admin', '$2y$10$wS.f.hK4l.u/..examplehash..'); 

-- --------------------------------------------------------

-- Table structure for table 'services'
CREATE TABLE \`services\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`title_ar\` varchar(255) NOT NULL,
  \`title_en\` varchar(255) NOT NULL,
  \`created_at\` timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table 'services'
INSERT INTO \`services\` (\`title_ar\`, \`title_en\`) VALUES
('نقل كفالة خادمات', 'Maid Sponsorship Transfer'),
('استقدام طباخات', 'Cooks Recruitment'),
('مربيات أطفال', 'Professional Nannies'),
('رعاية كبار السن', 'Elderly Care'),
('سائقين خاصين', 'Private Drivers');

-- --------------------------------------------------------

-- Table structure for table 'articles'
CREATE TABLE \`articles\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`title_ar\` varchar(255) NOT NULL,
  \`title_en\` varchar(255) NOT NULL,
  \`content_ar\` text NOT NULL,
  \`content_en\` text NOT NULL,
  \`created_at\` timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table 'articles'
INSERT INTO \`articles\` (\`title_ar\`, \`title_en\`, \`content_ar\`, \`content_en\`) VALUES
(1, 'خطوات نقل الكفالة إلكترونيًا في السعودية 2025', 'Steps for Online Sponsorship Transfer in Saudi Arabia 2025', '<p>شرح تفصيلي عن منصة أبشر...</p>', '<p>Detailed explanation about Absher platform...</p>'),
(2, 'كيف تختار العاملة المنزلية المناسبة لأسرتك؟', 'How to Choose the Right Domestic Worker for Your Family?', '<p>نصائح لاختيار العمالة...</p>', '<p>Tips for choosing workers...</p>'),
(3, 'حقوق وواجبات العمالة المنزلية: دليل شامل', 'Rights and Duties of Domestic Workers: A Comprehensive Guide', '<p>شرح لائحة العمالة المنزلية...</p>', '<p>Explanation of domestic labor regulations...</p>'),
(4, 'أفضل جنسيات العمالة المنزلية المتاحة حالياً', 'Best Domestic Worker Nationalities Available Now', '<p>مقارنة بين الجنسيات...</p>', '<p>Comparison between nationalities...</p>');

COMMIT;
`;

export const phpConfig = `<?php
// api/config.php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$host = "localhost";
$db_name = "recruitment_db";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
    $conn->exec("set names utf8mb4");
} catch(PDOException $exception) {
    echo json_encode(["error" => "Connection error: " . $exception->getMessage()]);
    exit();
}
?>`;

export const phpRead = `<?php
// api/read.php
include_once 'config.php';

$table = isset($_GET['table']) ? $_GET['table'] : die(json_encode(["error" => "Table not specified"]));
$lang = isset($_GET['lang']) ? $_GET['lang'] : 'en';

// Whitelist allowed tables for security
$allowed_tables = ['services', 'articles', 'settings'];
if (!in_array($table, $allowed_tables)) {
    die(json_encode(["error" => "Invalid table"]));
}

$query = "SELECT * FROM " . $table;
$stmt = $conn->prepare($query);
$stmt->execute();
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

$data = [];

if ($table == 'settings') {
    // Return single object for settings
    echo json_encode($results[0] ?? new stdClass());
    exit();
}

foreach ($results as $row) {
    $item = [];
    $item['id'] = $row['id'];
    
    // Dynamic language filtering
    if ($lang == 'ar') {
        if (isset($row['title_ar'])) $item['title'] = $row['title_ar'];
        if (isset($row['content_ar'])) $item['content'] = $row['content_ar'];
        if (isset($row['site_name_ar'])) $item['site_name'] = $row['site_name_ar'];
    } else {
        if (isset($row['title_en'])) $item['title'] = $row['title_en'];
        if (isset($row['content_en'])) $item['content'] = $row['content_en'];
        if (isset($row['site_name_en'])) $item['site_name'] = $row['site_name_en'];
    }
    
    // Add non-localized fields
    if (isset($row['created_at'])) $item['created_at'] = $row['created_at'];
    if (isset($row['phone'])) $item['phone'] = $row['phone'];
    if (isset($row['email'])) $item['email'] = $row['email'];

    // Or return full raw data if specific filtering isn't required by client
    // $item = $row; 
    
    array_push($data, $item);
}

echo json_encode($data);
?>`;

export const phpLogin = `<?php
// api/login.php
include_once 'config.php';

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->username) || !isset($data->password)) {
    echo json_encode(["message" => "Incomplete data"]);
    exit();
}

$query = "SELECT id, username, password FROM users WHERE username = ? LIMIT 0,1";
$stmt = $conn->prepare($query);
$stmt->bindParam(1, $data->username);
$stmt->execute();

if ($stmt->rowCount() > 0) {
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if (password_verify($data->password, $row['password'])) {
        // In a real app, generate a JWT token here
        echo json_encode([
            "message" => "Login successful",
            "user_id" => $row['id'],
            "username" => $row['username']
        ]);
    } else {
        echo json_encode(["message" => "Invalid password"]);
    }
} else {
    echo json_encode(["message" => "User not found"]);
}
?>`;

export const jsFrontend = `// main.js - Frontend Integration Helper

const BLOG_CONTAINER = document.getElementById('blog-container');
const API_URL = 'http://localhost/api/read.php'; 

async function fetchArticles(lang = 'en') {
    try {
        const response = await fetch(\`\${API_URL}?table=articles&lang=\${lang}\`);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const articles = await response.json();
        renderArticles(articles);
    } catch (error) {
        console.error('Error fetching articles:', error);
        BLOG_CONTAINER.innerHTML = '<p>Error loading articles.</p>';
    }
}

function renderArticles(articles) {
    BLOG_CONTAINER.innerHTML = ''; // Clear loader
    
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'article-card';
        articleElement.innerHTML = \`
            <h3>\${article.title}</h3>
            <div class="content">\${article.content}</div>
            <small>\${article.created_at}</small>
        \`;
        BLOG_CONTAINER.appendChild(articleElement);
    });
}

// Initial Load
fetchArticles('en');
`;
