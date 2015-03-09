<?php

class News extends Controller {
    function __construct() {
        parent::__construct();
        // echo "index(login page)";
    }
    
    
    public function index(){
        require APP_PATH. '/models/home_model.php';
        $this->view->getnws = (new Home_model()) ->getnews();
        $this->view->render('news/news');
    }
}

?>