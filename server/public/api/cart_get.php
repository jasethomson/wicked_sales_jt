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

$getQuery = "SELECT products.id, cartItems.count, products.name,
 products.price, images.url, products.shortDescription FROM `cartItems`
  JOIN `products` on products.id = cartItems.productID JOIN `images` on
   products.id = images.product_id WHERE cartItems.id = 1 LIMIT 1";

$getQueryResult = mysqli_query($conn, $getQuery);

if(!$getQueryResult){
  throw new Exception("Failed to getQuery");
}

$output = [];
while ($row = mysqli_fetch_assoc($result)) {
  $output[] = $row;
}

$json_output = json_encode($output);
print($json_output);

?>
