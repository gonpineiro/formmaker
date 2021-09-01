<?php

include('./app/config/config.php');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

$formController = new FormController();

if (isset($_POST['formulario']) && $_POST['token'] === TOKEN) {
    $formController->store($_POST['formulario']);
    echo json_encode($_POST['formulario'], true);
}

if (isset($_POST) && $_POST['type'] === 'get') {
    $formulario = $formController->get(['id' => $_POST['id']]);
    $form = json_decode($formulario['string']);    
    echo json_encode($formulario, true);
}

exit();
