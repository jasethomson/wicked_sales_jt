<?php
header('Content-Type: application/json');
require_once 'functions.php';
http_response_code(500);

set_exception_handler( 'error_handler' );

$output = file_get_contents('dummy-products-list.json');
doStuff();
print( $output );

?>
