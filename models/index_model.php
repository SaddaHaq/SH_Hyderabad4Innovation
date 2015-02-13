<?php

class Index_model extends Model {

    function __construct() {
        parent::__construct();
        // echo "in index_model";
    }

    public function map_etry(){
        
        $new_entry = $this->db->prepare("INSERT INTO _companies_(_name_, _website_, _type_, _desc_, _city_, _address_, _contact_details_, _rating_, _longitude_, _latitude_, sts) VALUE(:company_name, :website, :type, :about, :city, :addres, :contact, :rating, :langitude, :latitude, 1)");
        $entry  = $new_entry->execute(array(":company_name"=> $_POST['name'],
                                  ":website"=>$_POST['website'],
                                  ":type"=>$_POST['type'],
                                  ":about"=>$_POST['about'],
                                  ":city"=>$_POST['city'],
                                  ":addres"=>$_POST['addres'],
                                  ":contact"=>$_POST['contact'],
                                  ":rating"=>$_POST['rating'],
                                  ":langitude"=>$_POST['langitude'],
                                  ":latitude"=>$_POST['latitude']));
        if($entry == true){
            $cmpny = $_POST['name'];
            $to = "mukkojusatish@gmail.com";
            $subject = "New entry of $cmpny";
            $mail = 'New Company Inserted';
            $headers = "Content-Type: text/html; charset=ISO-8859-1\r\n";
            mail($to, $subject, $mail, $headers);
            
            $sts = 'Added Sucessfully!!';
            return $sts;
        }
        else{
       $sts = 'Smothing wrong while adding entry!!';
            return $sts;
        }
    }
    
    public function getEntryByType(){
        $tp = $_POST['tp'];
        $all = $this->db->prepare("SELECT * FROM _companies_ WHERE _type_ = ".$this->db->quote($tp));
        $all->execute();
        $res = $all->fetchAll(PDO::FETCH_ASSOC);
//        var_dump($res); 
        return $res; 
    }
    
    public function all(){
        $all = $this->db->prepare("SELECT * FROM _companies_");
        $all->execute();
        $res = $all->fetchAll(PDO::FETCH_ASSOC);
//        var_dump($res);
        return $res;
    }
  public function unique_multidim_array($array, $key){
    
}


    public function compnys_list(){
        $all = $this->db->prepare("SELECT _type_ FROM _companies_");
        $all->execute();
        $res = $all->fetchAll(PDO::FETCH_ASSOC);
//        $res = array_keys(array_flip($res));
        
        $key = '_type_';
    $temp_array = array();
    $i = 0;
    $key_array = array();
    
    foreach($res as $val){
        if(!in_array($val[$key],$key_array)){
            $key_array[$i] = $val[$key];
            $temp_array[$i] = $val;
        }
        $i++;
    }
    $res = array_values($temp_array);
    return $res;
        
        
        
        
       
    }
    
    public function get_lnglat(){
        $all = $this->db->prepare("SELECT _longitude_, _latitude_ FROM _companies_ WHERE _rating_  = 5");
        $all->execute();
        $res = $all->fetchAll(PDO::FETCH_ASSOC);
        return $res;
    }
    
    
    public function aprv_etry(){
        $id = $_POST['id'];
        $aprv = $this->db->prepare('UPDATE _companies_ SET sts = 2 WHERE id = :id');
        $res = $aprv->execute(array(':id'=> $id));
        if($res == true){
            $res = "Approved successfully";
            return $res;
        }
        else{
            $res = "Somthing wrong while approving entry";
            return $res;
        }
        
    }
    
    

}
