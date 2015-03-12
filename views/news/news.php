<!DOCTYPE html>
<?php require 'views/header.php'; ?>
        <div class="pg" id="news">
            <?php $nws_itm = $this->getnws ?>
            <section>
                <div class="news_sction">
                    <div id="fltr_sctn">
                    <h2 class="flte-hdng">Filter news by</h2>
                    <select id="nws-fltr-optn">
                            <option data-slct="strtp">Select option</option>
                            <option data-slct="strtp">Startup</option>
                            <option data-slct="tp">News type</option>
                            <option data-slct="src">Source</option>
                            <option data-slct="date">Date</option>
                        </select>
                        <div id="flter_sub_sctn"></div>
                </div>
                <div class="clearfix"></div>
                <ul id='nws-lst'>
                    
                    <?php $c = 0; for($i=0; $i<sizeof($nws_itm); $i++){?>
                    <li>
                            <div class='nws-dsc bx'>
                                <?php $colours = ['darkseagreen', 'bisque', 'tomato', 'slategrey']; ?>
                                <?php
                                if ($c >= 4) {
                                    $c = 0;} ?>
                                <div class="tl-dt" style="background-color: <?= $colours[$c]; ?>">
                                    <h1><a href="#" data-cnt="<?= $nws_itm[$i]['_news_addedby'] ?>" data-tp="strtp" class="nws-strp"><?= $nws_itm[$i]['_news_addedby'] ?></a></h1>
                                    <!--<h1></h1> <h1><?= date('j', $nws_itm[$i]['_news_pubtime']) ?></h1>-->
                                    <!--<p class="athr"><i></i></p>-->
                                    <p class="athr"><i>In: <a href="#" data-cnt="<?= $nws_itm[$i]['_news_type'] ?>" data-tp="nwstype" class="nws-strp"><?= $nws_itm[$i]['_news_type'] ?></a></i></p>
                                </div>
                                <h2 class='s-h'><a href="<?= $nws_itm[$i]['_news_link'] ?>" target="_blank"><?= $nws_itm[$i]['_news_hdlne'] ?></a></h2>
                                <p class='dsc'><?= $nws_itm[$i]['_news_smry'] ?></p>
                                <a href='<?= $nws_itm[$i]['_news_link'] ?>' target="_blank" class="rd-mre">Read more.. <i class="icon_angle-right"></i></a>
                                <p class='dsc' style="display: inline-block"><i>Published by <a href="#" data-cnt="<?= $nws_itm[$i]['_news_src'] ?>" data-tp="nwssrc" class="nws-strp"><?= $nws_itm[$i]['_news_src'] ?></a> on <?= date('M j, Y', $nws_itm[$i]['_news_pubtime']) ?></i></p>
                            </div>
                            <div class='clearfix'></div>
                        </li>
                    <?php $c++; }?>
                </ul>
                </div>
                <?php if(sizeof($nws_itm) > 7){ ?>
                <button class="nws-btn" id="nws-ldmre-btn" style="margin-left: 50%;">Load more</button>
                <a href="/news" id="back-btn" style="display: none;"><button class="nws-btn" style="margin-left: 10%">Back</button></a>
                <?php }?>
            </section>
            <div class="fab">
        <button class="btn add btn-floating right cntct-fab-unq" data-activates="contact-content" data-cancel="btn-fill-cancel" id="contact-fab"><i class="icon-plus"></i></button>
    </div>
             
<!--            <div class="ad-nws ad-nww-clps">
                <span class="ad-nws-navg"><i class="icon-plus-circle"></i></span>
                   <div class="ad-nws-frm">
                    <div class="ad-nws-hdr">Submit News</div>
                    <form id="adnws_form">
                        Url:<br><input type="text" id="nws-url"><br>  
                        Startup Name:<br> <input type="text" id="strp_nme">
                        <span class="no-strtp" style="display: none; padding-bottom: 4px;: ">Start up doesn't exist. To add a startup, <a href="/addstartup">click here</a></span>
                        Type of news: <br>
                        <select id="nws-tp">
                            <option>Product Launch</option>
                            <option>Product/Company Update</option>
                            <option>Funding</option>
                            <option>Founder Profile</option>
                            <option>Ecosystem Updates</option>
                            <option>Company Exit</option>
                        </select><br>
                        <button class="nws-btn" id="add-nws-btn">Submit</button><span class="add-new-dly"><img src="/images/loader.gif"></span>
                        <span class="nws-err"></span>
                    </form>
                    
                </div>
            </div>-->
            <div class="add-itms"><div class="dwnld-clps"><h2>Submit news<i class="mdi-navigation-expand-more"></i></h2></div></div>
            <div class="action-content " id="contact-content">
        <div class="action-content-inner container grey lighten-5">
            <div class="section large-pad no-margin-bottom" id="contact-section">
                   <div class="nws-clps"><h2>Submit news<i class="icon-chevron-down"></i></h2>
                   <div class="ad-nws-frm">
                    <!--<div class="ad-nws-hdr">Submit News</div>-->
                    <form id="adnws_form">
                        Url:<br><input type="text" id="nws-url" style="width: 450px;"><br>  
                        Startup Name:<br> <input type="text" id="strp_nme" style="width: 450px;">
                        <span class="no-strtp" style="display: none; padding-bottom: 4px;: ">Start up doesn't exist. To add a startup, <a href="/addstartup">click here</a></span>
                        Type of news: <br>
                        <select id="nws-tp" style="width: 450px;">
                            <option>Product Launch</option>
                            <option>Product/Company Update</option>
                            <option>Funding</option>
                            <option>Founder Profile</option>
                            <option>Ecosystem Updates</option>
                            <option>Company Exit</option>
                        </select><br>
                        <button class="btn btn-primary" id="add-nws-btn">Submit</button><span class="add-new-dly"><img src="/images/loader.gif"></span>
                        <span class="nws-err"></span>
                    </form>
                    </div>
                   </div>
                   <div class="nws-clps"><h2>Submit startup<i class="icon-chevron-down"></i></h2>
                   <div class="slt">
                <form id="strp_ad_fm">
                *Startup name:<br> <input type="text" id="strp-nme"><br>  
                *Website:<br> <input type="text" id="strp-site"><br>  
                *Founders:<br> <input type="text" id="strp-fundrs"><br>  
                *Point of contact -- name:<br> <input type="text" id="strp-poccnt"><br>  
                *PoC Phone-no:<br> <input type="text" id="strp-pocphne"><br>  
                *PoC Email Address:<br> <input id="strp-poceml" type="email"  required><br>  
                *office address:<br> <textarea id="strp-ofcadrs"></textarea><br>  
                Description:<br> <textarea id="strp-desc"></textarea><br>
                <button class="btn btn-primary" id="add-strp-btn">Submit</button>
                <span class="nws-err"></span>
                </form>
                </div>
                </div>
            </div>
        </div>


                <button class="btn cancel btn-floating right white-text white" id="btn-fill-cancel"><i class="icon-remove" style="color: #333; font-size: 5.5rem; margin-left: -38px;"></i></button>

    </div>
        </div>
 <?php require 'views/footer.php'; ?>
