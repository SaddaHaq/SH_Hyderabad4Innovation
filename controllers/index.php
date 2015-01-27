<?php

class Index extends Controller {
    function __construct() {
        parent::__construct();
        // echo "index(login page)";
    }
    public function index() {
        $this->view->render('index/index');
    }
    public function map() {
        echo $this->model->map_etry();
    }
    public function new_entries() {
        echo json_encode($this->model->new_etries());
    }
    public function all_entries() {
        echo json_encode($this->model->all());
    }
}
