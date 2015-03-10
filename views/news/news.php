<!DOCTYPE html>
<?php require 'views/header.php'; ?>
        <div class="pg" id="news">
            <?php $nws_itm = $this->getnws ?>
            <section>
                <ul id='nws-lst'>
                    
                    <?php $c = 0; for($i=0; $i<sizeof($nws_itm); $i++){?>
                    <li>
                            <div class='nws-dsc bx'>
                                <?php $colours = ['darkseagreen', 'bisque', 'tomato', 'slategrey']; ?>
                                <?php
                                if ($c >= 4) {
                                    $c = 0;} ?>
                                <div class="tl-dt" style="background-color: <?= $colours[$c]; ?>">
                                    <h1> <?= $nws_itm[$i]['_news_addedby'] ?></h1>
                                    <!--<h1></h1> <h1><?= date('j', $nws_itm[$i]['_news_pubtime']) ?></h1>-->
                                    <!--<p class="athr"><i></i></p>-->
                                    <p class="athr"><i>Type: <?= $nws_itm[$i]['_news_type'] ?></i></p>
                                    <p class="athr"><i>Src: <?= $nws_itm[$i]['_news_src'] ?></i></p>
                                    <p class="athr"><i>Pub date: <?= date('M j, Y', $nws_itm[$i]['_news_pubtime']) ?></i></p>
                                </div>
                                <h2 class='s-h'><a href="<?= $nws_itm[$i]['_news_link'] ?>" target="_blank"><?= $nws_itm[$i]['_news_hdlne'] ?></a></h2>
                                <p class='dsc'><?= $nws_itm[$i]['_news_smry'] ?></p>
                                <a href='<?= $nws_itm[$i]['_news_link'] ?>' target="_blank" class="rd-mre">Read more.. <i class="icon_angle-right"></i></a>
                            </div>
                            <div class='clearfix'></div>
                        </li>
                    <?php $c++; }?>
                </ul>
                <?php if(sizeof($nws_itm) > 0){ ?>
                <button class="nws-btn" id="nws-ldmre-btn" style="margin-left: 50%;">Load more</button>
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
                        Startup Name:<br> <input type="text" id="strp_nme"><br>
                        Type of news: <br>
                        <select id="nws-tp">
                            <option>Product Launch</option>
                            <option>Product Update</option>
                            <option>Company Update</option>
                            <option>Funding</option>
                            <option>Exit</option>
                        </select><br>
                        <button class="nws-btn" id="add-nws-btn">Submit</button><span class="add-new-dly"><img src="/images/loader.gif"></span>
                        <span class="nws-err"></span>
                    </form>
                    
                </div>
            </div>
        </div>
 <?php require 'views/footer.php'; ?>
