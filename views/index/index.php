<!DOCTYPE html>    
<html>
    <head> 
        <title>Hyderabad 4 Innovation</title>
        <link rel="stylesheet" href="/public/css/menu.css" />
        <link rel="stylesheet" href="/public/css/index.css" />
        <link rel="stylesheet" href="/public/global/saddahaq/css/saddahaq-ie7.css" />
        <link rel="stylesheet" href="/public/global/saddahaq/css/saddahaq.css" />
        <link rel="stylesheet" href="/public/global/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/public/global/bootstrap/css/bootstrap-responsive.min.css" />
        <script type="text/javascript" src="/public/js/jquery-1.11.0.min.js"></script>
        <script type="text/javascript" src="/public/js/jquery.leanModal.min.js"></script>
        <script type="text/javascript" src="/public/js/popup.js"></script>
        <script type="text/javascript" src="/public/js/map.js"></script>
        <script type="text/javascript" src="/public/global/bootstrap/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="/public/global/bootstrap/js/jquery-ui.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true"></script>
        <link href='//fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700' rel='stylesheet' type='text/css'>
       <link href='http://fonts.googleapis.com/css?family=Quattrocento:400,700' rel='stylesheet' type='text/css'>
        <script type="text/javascript">
        </script>
    </head>
    <body>
     <div class="static-topbar hrw-home-topbar hrwHome">
    <div class="container clearfix">
        <div id="hrw-bg">
            <a class="hrw-logo static-logo" href="/">
                <h4>Hyderabad 4 Innovation</h4>
            </a>
        </div>
        <a href="#" class="nav-toggle"><i class="icon-menu-large"></i></a>
        <nav class="static-home-nav">
            <span class="static-nav static-links"> 
                <span class="work-navgroup static-link">
                    <a target="_blank" href="https://docs.google.com/forms/d/1aHrSrp765LiK6jDKdBvlQMVMlz56y2rbaovsmwm9kUA/viewform" class="media"><span class="mnu-bg med"></span>New</a>
                </span>
                <span class="work-navgroup static-link">
                    <a href="/about" class="media"><span class="mnu-bg med"></span>About</a>
                </span>
                <span class="work-navgroup static-link">
                    <a href="/contact" class="media"><span class="mnu-bg med"></span>Contact</a>
                </span>
            </span>
            <div class="social hidden-xs social_js hideElement">
        </div></nav>
    </div>
</div>
        <div class="mapr"><iframe src="//beta.mappr.io/play/Hyderabad4Innovation" style="position: absolute; height: 100%; width: 100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>
<!--        <div class="container">
            <div class="main-container">
                <img src="/images/cha.png" class="char popver" rel="popover" >
                <div class="mp-frm">
                    <a id="popver" href="#" class="popver mps-inpt btn btn-info btn-small" rel="popover"></a>
                    <a href="https://docs.google.com/forms/d/1aHrSrp765LiK6jDKdBvlQMVMlz56y2rbaovsmwm9kUA/viewform" class="mps-inpt btn btn-info btn-small h-btns" target="_blank"><i class="icon-plus"></i></a>
                    <a href="about" class="mps-inpt btn btn-info btn-small Abt-btns">A</a>
                    <a href="contact" class="mps-inpt btn btn-info btn-small h-btns"><i class="icon-call"></i></a>
                    <select id="comny_name">
                        <option value="1" selected="">Select Category </option>
                    </select>
                    <button id="srch-butn" class="mps-inpt btn btn-info btn-small btn-login-indx"><i class="icon-search"></i></button>
                </div>
            </div>
        </div>-->
        <div class="modal fade" id="newentry" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">New Company</h4>
                    </div>
                    <div class="modal-body">
                        <p class="er">nothing</p>
                        <form id="cpmy-frm">  
                            <div class="lft-flds">
                                Name:<input type="text" class="nw-ip" id="name" placeholder="Name of the company*">
                                Website:<input type="text" class="nw-ip" id="website" placeholder="Company Website*">
                                Type:<input type="text" class="nw-ip" id="tp" placeholder="Company type*">
                                About:<textarea  class="nw-ip" id="abt" style="height: 60px;" placeholder="Description of the company*"></textarea>
                                City:<input type="text" class="nw-ip" id="cty" placeholder="Location of the company*">
                            </div>
                            <div class="lft-flds">
                                Address:<textarea class="nw-ip" id="adrss" style="height: 60px;" placeholder="Company Adress"></textarea>
                                Contact:<input type="text" class="nw-ip" id="cntat" placeholder="Company contact details">
                                Rating:<input type="text" class="nw-ip" id="rtng" placeholder="Company rating">
                                Longitude:<input type="text" class="nw-ip" id="lng">
                                Latitude:<input type="text" class="nw-ip" id="ltd">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default p-cls" data-dismiss="modal">Close</button>
                        <button type="button" id="new_etry" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="admin_aprv" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">Admin</h4>
                    </div>
                    <div class="modal-body">
                        <div class="navigtn new-lst">Newly added</div>&nbsp;
                        <div class="navigtn al-lst">All entries</div>
                        <table class="table table-hover table-condensed table-bordered lst-tab">
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default p-cls" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!--<div id="map_canvas" style="width: 1300px; height: 550px"></div>-->
    </body>
</html>