<?php

include('./app/config/config.php');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


if (isset($_POST['formulario'])) {
    $formController = new FormController();
    $formController->store($_POST['formulario']);
    echo json_encode($_POST['formulario'], true);
}



exit();
verEstructura($_POST);
