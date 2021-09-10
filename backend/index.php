<?php

include('./app/config/config.php');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

$formController = new FormController();

if (isset($_POST) &&  $_POST['token'] === TOKEN) {

    /* Crear un formulario */
    if (isset($_POST) && $_POST['type'] === 'post') {
        $formController->store($_POST['formulario']);
        echo json_encode($_POST['formulario'], true);
    }

    /* Respuesta de un formulario */
    if (isset($_POST) && $_POST['type'] === 'respuesta') {
        $response = [
            'idForm' => $_POST['idForm'],
            'fecha' => date('Y-m-d H:i:s'),
            'respuestas' => $_POST["formObject"],
        ];

        $respuesta = json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE,);
        cargarJsonFile($_POST['idForm'], $respuesta);
        echo $respuesta;
    }

    /* Consultar un formulario */
    /* if (isset($_POST) && $_POST['type'] === 'get') {
        $formulario = $formController->get(['id' => $_POST['id']]);
        if ($formulario) {
            $formulario['error'] = null;
            echo json_encode($formulario, true);
        } else {
            $error = [
                'error' =>  'Recurso no encontrado',
                'idForm' => $_POST['id'],
            ];
            echo json_encode($error, true);
        }
    } */
    if (isset($_POST) && $_POST['type'] === 'get') {
        $formulario = $formController->getJson($_POST['id']);
        if ($formulario) {
            $formulario['error'] = null;
            echo json_encode($formulario, true);
        } else {
            $error = [
                'error' =>  'Recurso no encontrado',
                'idForm' => $_POST['id'],
            ];
            echo json_encode($error, true);
        }
    }
}
exit();
