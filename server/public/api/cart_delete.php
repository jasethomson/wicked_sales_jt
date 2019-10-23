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

$deleteQuery = "DELETE FROM cartItems
WHERE productid = $id";

$deleteResult = mysqli_query($conn, $deleteQuery);

if (!$deleteResult) {
  throw new Exception("failed to delete result" . $deleteResult);
}

?>
