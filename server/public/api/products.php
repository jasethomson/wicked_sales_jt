<?php
header('Content-Type: application/json');
require_once 'functions.php';
set_exception_handler( 'error_handler' );

startup();

require_once 'db_connection.php';


$query = "SELECT * FROM `products`";
$result = mysqli_query($conn, $query);

if (!$result) {
  print("Error: " . mysqli_error($conn));
  exit();
}

$output = [
  "success" => "true",
  "data" => []
];

if (!(mysqli_num_rows($result))) {
  print("no data available");
  exit();
}

while ($row = mysqli_fetch_assoc($result)) {
  $output['data'][] = $row;
}

$json_output = json_encode($output['data']);
print($json_output);

function startup(){
  header("Content-type:application/json");
}

?>
