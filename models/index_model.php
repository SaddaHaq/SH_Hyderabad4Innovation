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
    
    
    // @parsing url before adding news
    public function urlparsing($url){
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
            else if(strpos($meta->getAttribute('http-equiv'), 'Last-Modified') !== false){
                $data[$meta->getAttribute('http-equiv')] = $meta->getAttribute('content');
            }
        }
        
        $d = $data;
//        var_dump($d);
        if(isset($d['article:published_time'])){
         $pubdt = preg_replace('/[^(\x20-\x7F)]*/', '', date('j-m-Y', strtotime($d['article:published_time'])));
        }
        
        // @this condition writen for only BUSINESS STANDARED website pubtime
        // when this site url comes the pubtime has comming with empty key (['Last-Modified'] like this)
        if(isset($d['Last-Modified'])){
            $pubdt = preg_replace('/[^(\x20-\x7F)]*/', '', date('j-m-Y', strtotime($d['Last-Modified'])));
        }
        return ['pubtime'=> $pubdt, 'sumry'=>$d['og:description']];
    }


    public function adnews($url, $tp, $strp, $pdate, $smry){
        $chkstrp = $this -> db ->query("SELECT * FROM _startups_ WHERE _name_ = ".$this -> db -> quote($strp));
        //$rowcnt = $chkstrp->rowCount();
        if($chkstrp->rowCount() > 0){
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
            else if(strpos($meta->getAttribute('http-equiv'), 'Last-Modified') !== false){
                $data[$meta->getAttribute('http-equiv')] = $meta->getAttribute('content');
            }
        }
        $d = $data;
        if($d == 0){
            $sts = ["Given URL is not valid try with valid URL"];
            return $sts;
        }
        $time = time();
        $id = md5($time . rand(21, 221) . '#$sr');
        
        // @delting acsii chrecters
        $ttl = preg_replace('/[^(\x20-\x7F)]*/', '', $d['og:title']);
        if($smry == ''){
            $desc = preg_replace('/[^(\x20-\x7F)]*/', '', $d['og:description']);
        }else{
            $desc = $smry;
        }
        
        $img = preg_replace('/[^(\x20-\x7F)]*/', '', $d['og:image']);
        $site = preg_replace('/[^(\x20-\x7F)]*/', '', $d['og:site_name']);
        if($pdate == ''){
            if(isset($d['article:published_time'])){
        $pubdt = preg_replace('/[^(\x20-\x7F)]*/', '', $d['article:published_time']);
        }
        
        // @this condition writen for only BUSINESS STANDARED website pubtime
        // when this site url comes the pubtime has comming with empty key (['Last-Modified'] like this)
        if(isset($d['Last-Modified'])){
            $pubdt = preg_replace('/[^(\x20-\x7F)]*/', '', $d['Last-Modified']);
        }
        }else{
        $pubdt = $pdate;
        }
        $strp = preg_replace('/[^(\x20-\x7F)]*/', '', $strp);
        $addentry = $this -> db -> query("INSERT INTO _startups_news_ VALUES(".$this -> db -> quote($id).", ".$this -> db -> quote($ttl).",".$this -> db -> quote($desc).",".
                                                                                $this -> db -> quote($img).",".
                                                                                $this -> db -> quote($site).",".
                                                                                $this -> db -> quote($url).",".
                                                                                $this -> db -> quote($tp).",".
                                                                                $this -> db -> quote('0').",".
                                                                                $this -> db -> quote(strtotime($pubdt)).",".
                                                                                $this -> db -> quote($strp).",".
                                                                                $this -> db -> quote(time()).")");
       if($addentry == true){
           $itm = ['ttl'=>$ttl, 'desc'=>$desc, 'pdtae'=>$pubdt, 'tp'=>$tp, 'strtp'=>$strp, 'site'=>$site];
           $sts = [$itm, 'Url added successfully!!'];
           return $sts;
       }else{
           $sts = ["Somthig wrong while adding Url please try again"];
           return $sts;
       } 
    }else{
     $sts = ["-1"];
     return $sts;
    }
    
    }
    
           
     // @startup  names for submit page autocomplete
    public function getstrtps(){
        $name = $_POST['kwd'];
        $getstrtps = $this -> db -> query("SELECT id, _name_ FROM _startups_ WHERE _name_ LIKE '$name%'");
        $res = $getstrtps->fetchAll(PDO::FETCH_ASSOC);
        
        if($getstrtps == true){
            return $res; 
        }
}

    public function addstrpetry(){
        $name = preg_replace('/[^(\x20-\x7F)]*/', '', $_POST['name']);
        $fundrs = preg_replace('/[^(\x20-\x7F)]*/', '', $_POST['fundrs']);
        $site = preg_replace('/[^(\x20-\x7F)]*/', '', $_POST['site']);
        $desc = preg_replace('/[^(\x20-\x7F)]*/', '', $_POST['desc']);
        $poccnt = preg_replace('/[^(\x20-\x7F)]*/', '', $_POST['poccnt']);
        $pocphne = preg_replace('/[^(\x20-\x7F)]*/', '', $_POST['pocphne']);
        $poceml = preg_replace('/[^(\x20-\x7F)]*/', '', $_POST['poceml']);
        $ofceadrs = preg_replace('/[^(\x20-\x7F)]*/', '', $_POST['ofceadrs']);
        $addstartup = $this -> db -> query("INSERT INTO _startups_(_name_, _website_, _foundrs_, _cnt_name_, _desc_, _address_, _contact_email_, _cnt_phne_, sts, addedon) VALUE(".$this -> db -> quote($name).",".
                                                                                                                                                            $this -> db -> quote($site).",".
                                                                                                                                                            $this -> db -> quote($fundrs).",".
                                                                                                                                                            $this -> db -> quote($poccnt).",".
                                                                                                                                                            $this -> db -> quote($desc).",".
                                                                                                                                                            $this -> db -> quote($ofceadrs).",".
                                                                                                                                                            $this -> db -> quote($poceml).",".
                                                                                                                                                            $this -> db -> quote($pocphne).",".
                                                                                                                                                            $this -> db -> quote('0').",".
                                                                                                                                                            $this -> db -> quote(time()).")");
        if($addstartup == true){
            $sts = 'Startup added successfully!!';
        }else{
            $sts = 'Somthing went wrong while adding startup please try again or contact admin';
        }
        return $sts;
    }
    
    public function fltring_optins(){
        $slctd = $_POST['slctd'];
        if($slctd == 'src'){
            $src = $this -> db -> query("SELECT DISTINCT _news_src FROM _startups_news_");
                $res = $src->fetchAll(PDO::FETCH_ASSOC);
                return $res;
        }
        else if($slctd == 'strtp'){
            $strtp = $this -> db -> query("SELECT DISTINCT _news_addedby FROM _startups_news_");
            $res = $strtp->fetchAll(PDO::FETCH_ASSOC);
                return $res;
        }
        else if($slctd == 'tp'){
            $type = $this -> db -> query("SELECT DISTINCT _news_type FROM _startups_news_");
                $res = $type->fetchAll(PDO::FETCH_ASSOC);
                return $res;
        }
    }

    public function nwsflring(){
        $type = $_POST['tp'];
        $cnt = $_POST['cnt'];
        if($type == 'strtp'){
            $getnws = $this -> db -> query("SELECT * FROM _startups_news_ WHERE _news_addedby =".$this -> db -> quote($cnt));
            $res = $getnws->fetchAll(PDO::FETCH_ASSOC);
            if($getnws == true){
              return $res;   
            }
        }
        else if($type == 'nwstype'){
            $getnws = $this -> db -> query("SELECT * FROM _startups_news_ WHERE _news_type =".$this -> db -> quote($cnt));
            $res = $getnws->fetchAll(PDO::FETCH_ASSOC);
            if($getnws == true){
              return $res;
            }
            }
            else if($type == 'nwssrc'){
            $getnws = $this -> db -> query("SELECT * FROM _startups_news_ WHERE _news_src =".$this -> db -> quote($cnt));
            $res = $getnws->fetchAll(PDO::FETCH_ASSOC);
            if($getnws == true){
              return $res;
            }
            }
            else if($type == 'nwsdate'){
            $cnt = strtotime($cnt); 
            $day = 86400;
            $getnws = $this -> db -> query("SELECT * FROM _startups_news_ WHERE _news_pubtime BETWEEN ".$this -> db -> quote($cnt)." AND ".$this -> db -> quote($cnt+$day));
            $res = $getnws->fetchAll(PDO::FETCH_ASSOC);
//            var_dump($this -> db ->errorInfo());
            if($getnws == true){
              return $res;
            }
            }
    }
    
    public function sbmtcnt(){
        $eml = $_POST['eml'];
        $nme = $_POST['nme'];
        $sub = $_POST['sub'];
        $msg = $_POST['msg'];
        
        if(trim($eml) == ''){
            return '-1';
        }
        
        $submit = $this -> db -> query("INSERT INTO _startups_cntct_frm_(_cntct_frm_email, _cntct_frm_name, _cntct_frm_subject, _cntct_frm_msg) VALUES (".$this -> db -> quote($eml).",
                                                                                                                                                        ".$this -> db -> quote($nme).",
                                                                                                                                                        ".$this -> db -> quote($sub).",
                                                                                                                                                        ".$this -> db -> quote($msg).")");
        if($submit == true){
            mail($eml, 'Hyderabad4innovation', 'Your message has been received we will get back to you soon');
            $sts = 'Message has been sent to the admin';
            return $sts;
        }
    }   
            
    
}
