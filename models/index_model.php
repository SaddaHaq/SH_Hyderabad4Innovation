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
        $all = $this->db->prepare("SELECT * FROM _startups_resources_ WHERE _resources_type = ".$this->db->quote($tp));
        $all->execute();
        $res = $all->fetchAll(PDO::FETCH_ASSOC);
//        var_dump($res); 
        return $res; 
    }
    
    public function all(){
        $all = $this->db->prepare("SELECT * FROM _startups_resources_");
        $all->execute();
        $res = $all->fetchAll(PDO::FETCH_ASSOC);
//        var_dump($res);
        return $res;
    }
  public function unique_multidim_array($array, $key){
    
}


    public function compnys_list(){
        $all = $this->db->prepare("SELECT _resources_type FROM _startups_resources_");
        $all->execute();
        $res = $all->fetchAll(PDO::FETCH_ASSOC);
//        $res = array_keys(array_flip($res));
        
        $key = '_resources_type';
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
    
    
    public function adnews($url, $tp, $strp){
        $chkstrp = $this -> db ->query("SELECT * FROM _startups_resources_ WHERE _resources_name = ".$this -> db -> quote($strp));
        $rowcnt = $chkstrp->rowCount();
        if($rowcnt > 0){
        $u = $url;
        $sites_html = file_get_contents($u);

        $html = new DOMDocument();
        @$html->loadHTML($sites_html);
        $data = null;
        $meta_og_img = null;
        //Get all meta tags and loop through them.
        foreach ($html->getElementsByTagName('meta') as $meta) {

            //If the meta tag reads "og:", save the property and value to an array
            if (strpos($meta->getAttribute('property'), 'og:') !== false || strpos($meta->getAttribute('property'), 'article:published_time') !== false) {
                $data[$meta->getAttribute('property')] = $meta->getAttribute('content');
            }
        }
        $d = $data;
        if($d == 0){
            $sts = "Given URL is not valid try with valid URL";
            return $sts;
        }
        $time = time();
        $id = md5($time . rand(21, 221) . '#$sr');
        $addentry = $this -> db -> query("INSERT INTO _startups_news_ VALUES(".$this -> db -> quote($id).", ".$this -> db -> quote($d['og:title']).",".$this -> db -> quote($d['og:description']).",".
                                                                                $this -> db -> quote($d['og:image']).",".
                                                                                $this -> db -> quote($d['og:site_name']).",".
                                                                                $this -> db -> quote($d['og:url']).",".
                                                                                $this -> db -> quote($tp).",".
                                                                                $this -> db -> quote('0').",".
                                                                                $this -> db -> quote(strtotime($d['article:published_time'])).",".
                                                                                $this -> db -> quote($strp).",".
                                                                                $this -> db -> quote(time()).")");
       if($addentry == true){
           $sts = [$d, 'Url added successfully!!'];
           return $sts;
       }else{
           $sts = "Somthig wrong while adding Url please try again";
           return $sts;
       } 
    }else{
     $sts = "Given startup name is not in list try with originl";
    return $sts;
    }
    
    }
    
           
     // @startup  names for submit page autocomplete
    public function getstrtps(){
        $name = $_POST['kwd'];
        $getstrtps = $this -> db -> query("SELECT _id_, _resources_name FROM _startups_resources_ WHERE _resources_name LIKE '$name%'");
        $res = $getstrtps->fetchAll(PDO::FETCH_ASSOC);
        
        if($getstrtps == true){
            return $res; 
        }
}

public function addstrpetry(){
    $name = $_POST['name'];
    $fundrs = $_POST['fundrs'];
    $site = $_POST['site'];
    $desc = $_POST['desc'];
    $poccnt = $_POST['poccnt'];
    $poceml = $_POST['poceml'];
    $ofceadrs = $_POST['ofceadrs'];
    $addstartup = $this -> db -> query("INSERT INTO _startups_(_name_, _website_, _foundrs_, _cnt_name_, _desc_, _address_, _contact_email_, sts, addedon) VALUE(".$this -> db -> quote($name).",".
                                                                                                                                                        $this -> db -> quote($site).",".
                                                                                                                                                        $this -> db -> quote($fundrs).",".
                                                                                                                                                        $this -> db -> quote($poccnt).",".
                                                                                                                                                        $this -> db -> quote($desc).",".
                                                                                                                                                        $this -> db -> quote($poceml).",".
                                                                                                                                                        $this -> db -> quote($ofceadrs).",".
                                                                                                                                                        $this -> db -> quote('0').",".
                                                                                                                                                        $this -> db -> quote(time()).")");
    if($addstartup == true){
        $sts = 'Startup added successfully!!';
    }else{
        $sts = 'Somthing went wrong while adding startup please try again or contact admin';
    }
    return $sts;
}
    
}
