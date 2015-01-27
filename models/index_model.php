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
            $sts = 'Added Sucessfully!!';
            return $sts;
        }
        else{
       $sts = 'Smothing wrong while adding entry!!';
            return $sts;
            
        }
    }
    
    public function new_etries(){
        $all = $this->db->prepare("SELECT * FROM _companies_ WHERE sts = 2");
        $all->execute();
        $res = $all->fetchAll(PDO::FETCH_ASSOC);
        //var_dump($res);
        return $res; 
    }
    
    public function all(){
        $all = $this->db->prepare("SELECT * FROM _companies_ WHERE sts = 1");
        $all->execute();
        $res = $all->fetchAll(PDO::FETCH_ASSOC);
//        var_dump($res);
        return $res; 
    }
    
    public function compnys_list(){
        $all = $this->db->prepare("SELECT _name_ FROM _companies_");
        $all->execute();
        $res = $all->fetchAll(PDO::FETCH_ASSOC);
        return $res; 
    }

}
