<?php

class FormController
{
    /* Guarda un formulario */
    public function store($res)
    {
        $form = new Form();
        $form->set(...array_values($res));
        return $form->save();
    }

    /* Busca todos los form */
    public static function index($param = [], $ops = [])
    {
        return Form::list($param, $ops);
    }

    /* Busca un form */
    public static function get($params)
    {
        return Form::get($params);
    }

    /* Actualiza un form */
    public static function update($res, $id)
    {
        return Form::update($res, $id);
    }
}
