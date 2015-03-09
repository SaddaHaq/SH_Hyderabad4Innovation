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
                                <div class="tl-dt" style="background-color: <?= $colours[$c]; ?>"><h1><?= date('M', $nws_itm[$i]['_news_pubtime']) ?></h1><h1><?= date('j', $nws_itm[$i]['_news_pubtime']) ?></h1>
                                    <p class="athr"><i class="icon_edit"></i> <i>Type: <?= $nws_itm[$i]['_news_type'] ?></i></p>
                                    <p class="athr"><i>Src: <?= $nws_itm[$i]['_news_src'] ?></i></p>
                                </div>
                                <h2 class='s-h'><a href="<?= $nws_itm[$i]['_news_link'] ?>" target="_blank"><?= $nws_itm[$i]['_news_hdlne'] ?></a></h2>
                                <p class='dsc'><?= $nws_itm[$i]['_news_smry'] ?></p>
                                <a href='<?= $nws_itm[$i]['_news_link'] ?>' target="_blank" class="rd-mre">Read more.. <i class="icon_angle-right"></i></a>
                            </div>
                            <div class='clearfix'></div>
                        </li>
                    <?php $c++; }?>
<!--                    <li>
                        <div class='nws-dsc box'>
                            <img src='global/images/thub_img1.jpg' class='tl-img' />
                            <div class="tl-dt" style="background-color: bisque"><h1>SEP</h1><h1>24</h1>
                                <p class="athr"><i class="icon_edit"></i> <i>Author: ET</i></p>
                                <p class="athr"><i>Source: Economic Time</i></p>
                            </div>
                            <h2 class='s-h'>Telangana seeks Rs 100 crore from Centre for incubation hub</h2>
                            <p class='dsc'> 
                                The Telangana government today sought Rs 100-crore assistance from the Centre for development of infrastructure for second phase of the proposed technology incubation centre, T-Hub, coming up here.

                            </p>
                            <a href='http://articles.economictimes.indiatimes.com/2014-09-24/news/54279794_1_telangana-government-first-phase-second-phase' target="_blank">Read more.. <i class="icon_angle-right"></i></a>
                        </div>
                        <div class='clearfix'></div>
                    </li>
                    <li>
                        <div class='nws-dsc box'>
                            <img src='global/images/thub_img2.jpeg' class='tl-img' />
                            <div class="tl-dt" style="background-color: tomato"><h1>SEP</h1><h1>08</h1>
                                <p class="athr"><i class="icon_edit"></i> <i>Author: K V KURMANATH</i></p>
                                <p class="athr"><i>Source: Business Line</i></p>
                            </div>
                            <h2 class='s-h'>MoU for T-Hub, tech incubator in Hyderabad, to be inked on Tuesday</h2>
                            <p class='dsc'>
                                The first phase of T-Hub (technology start-up hub) in Hyderabad is set to get off the ground with the Telangana Government scheduled to sign an agreement with IIIT-Hyderabad and the Indian School of Business on Tuesday.

                            </p>
                            <a href='http://www.thehindubusinessline.com/features/smartbuy/mou-for-thubtech-incubator-in-hyderabad-to-be-inked-on-tuesday/article6390659.ece' target="_blank">Read more.. <i class="icon_angle-right"></i></a>
                        </div>
                        <div class='clearfix'></div>
                    </li>
                    <li>
                        <div class='nws-dsc box'>
                            <img src='global/images/thub_img2.jpeg' class='tl-img' />
                            <div class="tl-dt" style="background-color: slategrey"><h1>AUG</h1><h1>13</h1>
                                <p class="athr"><i class="icon_edit"></i> <i>Author: BS Reporter</i></p>
                                <p class="athr"><i>Source: Business Standard</i></p>
                            </div>
                            <h2 class='s-h'>Telangana to promote Hyderabad as India's startup capital</h2>
                            <p class='dsc'>It would go all out to bring to the fore innovations being generated at the grassroot level</p>
                            <a href='http://www.business-standard.com/article/economy-policy/telangana-to-promote-hyderabad-as-india-s-startup-capital-114081400057_1.html' target="_blank">Read more.. <i class="icon_angle-right"></i></a>
                        </div>
                        <div class='clearfix'></div>
                    </li>-->
                </ul>
            </section>
        </div>
 <?php require 'views/footer.php'; ?>
