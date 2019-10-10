<?php

require_once 'cart.php';

if(!INTERNAL){
exit("Direct access not allowed.");
}

if (!$_SESSION['cartID']) {
  print(json_encode([]));
  exit("we have no cart for this person");
}

$cartid = intval($_SESSION['cartID']);

$getQuery = "SELECT products.id, cartItems.count, cartItems.cartID, products.name,
 products.price, products.image, products.shortDescription, products.longDescription FROM `cartItems`
  JOIN `products` ON products.id = cartItems.productID";

$getQueryResult = mysqli_query($conn, $getQuery);

if(!$getQueryResult){
  throw new Exception("Failed to getQuery");
}
$output = [];
while ($row = mysqli_fetch_assoc($getQueryResult)) {
  $output[] = $row;
}

$json_output = json_encode($output);
print($json_output);

?>
