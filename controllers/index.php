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
    public function bytp() {
        echo json_encode($this->model->getEntryByType());
    }
    public function all_entries() {
        echo json_encode($this->model->all());
    }
    
    public function clst(){
        echo json_encode($this->model->compnys_list());
    }
    public function langlat(){
        echo json_encode($this->model->get_lnglat());
    }
     
  public function aprv(){
      echo $this->model->aprv_etry();
  }
  
  // @parsing url before adding
  public function parseurl(){
      $url = $_POST['url'];
      echo json_encode($this->model->urlparsing($url));
  }
  public function adnws(){
      $url = $_POST['url'];
      $tp = $_POST['tp'];
      $strp = $_POST['strtp'];
      $pdate = $_POST['pdate'];
      $smry = $_POST['smry'];
            echo json_encode($this -> model -> adnews($url, $tp, $strp, $pdate, $smry));
  }
  
  public function strtpsrch(){
      echo json_encode($this->model->getstrtps());
  }
  
  public function getnws(){
      require APP_PATH. '/models/home_model.php';
      echo json_encode((new Home_model()) -> getnews());
  }
  
  public function addstrp(){
      $url = $_POST['url'];
      echo $this -> model -> addstrpetry($url);
  }
  public function fltroptns(){
      echo json_encode($this -> model -> fltring_optins());
  }

  public function fltrnws(){
      echo json_encode($this -> model -> nwsflring());
  }
  
  // @contact form submit
  public function cntsbmt(){
      echo $this-> model -> sbmtcnt();
  }
  
}
