<?php require 'views/header.php'; ?>
        <div class="cntr">
            <!--<div class="hdr">Contact</div>-->
                        <div id="contact-form">
                            <h3>EMAIL US</h3>
                            <div class="form-group clearfix">
                                <input type="email" class="requiredField ct-ipt email" id="contact-email" name="email" placeholder="Email">
                            </div>
                            <div class="form-group clearfix">
                                <input type="text" class="requiredField ct-ipt" id="name" name="name" placeholder="Name">
                            </div>
                            <div class="form-group clearfix">
                                <input type="text" class="requiredField ct-ipt" id="subject" name="name" placeholder="Subject">
                            </div>
                            <div class="form-group">
                                <textarea class="requiredField ct-txara" id="message" name="message" rows="1" placeholder="Message"></textarea>
                            </div>
                            <button id="cnt-send" class="btn btn-theme">Submit</button>
                        </div>
            
            
        </div>
<?php require 'views/footer.php'; ?>