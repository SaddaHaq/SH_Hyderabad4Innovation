<?php require 'views/header.php'; ?>
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
<?php require 'views/footer.php'; ?>