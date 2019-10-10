<?php

require_once 'functions.php';
session_start();
set_exception_handler('error_handler');
startup();
require_once 'db_connection.php';

define("INTERNAL", true);

switch($_SERVER['REQUEST_METHOD']){
  case 'POST':

    require_once 'cart_add.php';

    break;
  case 'GET':
    require_once 'cart_get.php';
    break;
}



?>
