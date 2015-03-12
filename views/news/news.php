<!DOCTYPE html>
<?php require 'views/header.php'; ?>
        <div class="pg" id="news">
            
            <?php $nws_itm = $this->getnws ?>
            <section>
                <div id="fltr_sctn">
                    <h2>News by filter</h2>
                    <select id="nws-fltr-optn">
                            <option data-slct="strtp">Select option</option>
                            <option data-slct="strtp">By startup</option>
                            <option data-slct="tp">By news type</option>
                            <option data-slct="src">By source</option>
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
                                <p class='dsc' style="padding-top: 8px"><i>Published by <a href="#" data-cnt="<?= $nws_itm[$i]['_news_src'] ?>" data-tp="nwssrc" class="nws-strp"><?= $nws_itm[$i]['_news_src'] ?></a> on <?= date('M j, Y', $nws_itm[$i]['_news_pubtime']) ?></i></p>
                            </div>
                            <div class='clearfix'></div>
                        </li>
                    <?php $c++; }?>
                </ul>
                <?php if(sizeof($nws_itm) > 7){ ?>
                <button class="nws-btn" id="nws-ldmre-btn" style="margin-left: 50%;">Load more</button>
                <a href="/news" id="back-btn" style="display: none;"><button class="nws-btn" style="margin-left: 10%">Back</button></a>
                <?php }?>
            </section>
            <div class="ad-nws ad-nww-clps">
                <span class="ad-nws-navg"><i class="icon-plus-circle"></i>
                    <!--<b>Add news</b>-->
                </span>
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
            </div>
        </div>
 <?php require 'views/footer.php'; ?>
