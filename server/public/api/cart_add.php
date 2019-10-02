<?php

require_once 'cart.php';

if(INTERNAL){
  exit("Direct access not allowed.");
}

$bodyData = intval(getBodyData());

if($bodyData <= 0){
  throw new Exception("Id is invalid");
}

if($bodyData['id']){
  $id = $bodyData['id'];
}

if($_SESSION['cartID']){
  $cartID = $_SESSION['cartID'];
} else {
  $cartID = false;
}

$priceQuery = "SELECT `price` FROM `products` WHERE `id` = " . $cardID;

$priceResult = mysqli_query($conn, $priceQuery);

if(!$priceResult){
  throw new Exception("Connect Failed: " . mysqli_error($conn));
}

$row_cnt = mysqli_num_rows($priceResult);
if(!empty($cartID) && $row_cnt === 0){
  throw new Exception("Invalid ID: " . $cartID . mysqli_error($conn));
}

$productData = [];
while ($row = mysqli_fetch_assoc($priceResult)){
  $productData[] = $row;
}

$startTransactionQuery = "START TRANSACTION";

$transactionResult = mysqli_query($conn, $startTransactionQuery);

if(!$transactionResult){
  throw new Exception("Connect Failed: " . mysqli_error($conn));
}


print($id);

?>
