<?php

class Addstartup extends Controller {
    function __construct() {
        parent::__construct();
        // echo "index(login page)";
    }
    
    
    public function index(){
        $this->view->render('addstartup/addstartup');
    }
}

?>