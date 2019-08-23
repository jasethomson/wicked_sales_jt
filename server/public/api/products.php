<?php

require_once 'functions.php';
set_exception_handler( 'error_handler' );
startup();

require_once 'db_connection.php';
$query = "SELECT * FROM `products`";
$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception(mysqli_error($conn));
  exit();
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
