<?php

require_once 'functions.php';
require_once 'db_connection.php';
set_exception_handler( 'error_handler' );
startup();

if (empty($_GET['id'])) {
  $whereClause = "";
} elseif (is_numeric($_GET['id'])){
    $whereClause = "WHERE `id`=" . $_GET['id'];
  } else {
    throw new Exception("id needs to be a number" . mysqli_error($conn));
 }

$query = "SELECT * FROM `products`" . $whereClause;
$result = mysqli_query($conn, $query);

$row_cnt = mysqli_num_rows($result);
if($row_cnt === 0){
  throw new Exception("Invalid ID: " . $_GET['id'] . mysqli_error($conn));
}

if (!$result) {
  throw new Exception("Connect Failed: " . mysqli_error($conn));
}

$output = [];
if (!(mysqli_num_rows($result))) {
  print($output);
  exit();
}


while ($row = mysqli_fetch_assoc($result)) {
  $output[] = $row;
}

$json_output = json_encode($output);
print($json_output);

?>
