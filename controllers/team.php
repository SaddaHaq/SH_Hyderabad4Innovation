<?php

class About extends Controller {
    function __construct() {
        parent::__construct();
        // echo "index(login page)";
    }
    
    
    public function index(){
        $this->view->render('team/team');
    }
}

?>