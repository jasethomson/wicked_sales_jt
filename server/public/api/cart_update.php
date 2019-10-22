<?php

require_once 'functions.php';
set_exception_handler('error_handler');
startup();
require_once 'db_connection.php';

$bodyData = getBodyData();

if ($bodyData['id'] <= 0) {
  throw new Exception("Id is invalid");
}

$id = $bodyData['id'];

$count = $bodyData['count'];

$updateQuery = "UPDATE `cartItems`
  SET count = $count
  WHERE productID = $id";

$updateResult = mysqli_query($conn, $updateQuery);

if (!$updateResult) {
  throw new Exception("failed to update result" . $updateResult);
}

?>
