<?php

require_once 'functions.php';
set_exception_handler('error_handler');
startup();
require_once 'db_connection.php';

$bodyData = getBodyData();


if (!$bodyData['firstName']) {
  throw new Exception("There is no firstName");
}


$firstName = $bodyData['firstName'];
$lastName = $bodyData['lastName'];
$creditCard = $bodyData['creditCard'];
$address = $bodyData['address'];
$city = $bodyData['city'];
$state = $bodyData['state'];
$zip = $bodyData['zip'];

$orderQuery = "INSERT INTO `orders`
  (`firstName`, `lastName`, `creditCard`, `address`, `city`, `state`, `zip`)
  VALUES ( '$firstName', '$lastName', '$creditCard', '$address', '$city', '$state', $zip)";

var_dump("orderQuery: ", $orderQuery);

$orderResult = mysqli_query($conn, $orderQuery);

if (!$orderResult) {
  throw new Exception("failed to send result" . $orderResult);
}

?>
