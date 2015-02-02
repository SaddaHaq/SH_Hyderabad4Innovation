<?php

class Contact extends Controller {
    function __construct() {
        parent::__construct();
        // echo "index(login page)";
    }
    
    
    public function index(){
        $this->view->render('contact/contact');
    }
}

?>