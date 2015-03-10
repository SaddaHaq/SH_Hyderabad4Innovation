<?php require 'views/header.php'; ?>
<div class="cntr">
    <div class="slt">
            <h2 style="color: black !important">Add Start up</h2>
            <form id="strp_ad_fm">
                *Startup name:<br> <input type="text" id="strp-nme"><br>  
                *Website:<br> <input type="text" id="strp-site"><br>  
                *Founders:<br> <input type="text" id="strp-fundrs"><br>  
                *Point of contact -- name:<br> <input type="text" id="strp-poccnt"><br>  
                *PoC Phone-no:<br> <input type="text" id="strp-pocphne"><br>  
                *PoC Email Address:<br> <input id="strp-poceml" type="email"  required><br>  
                *office address:<br> <textarea id="strp-ofcadrs"></textarea><br>  
                Description:<br> <textarea id="strp-desc"></textarea><br>
                <button class="nw-btn" id="add-strp-btn">Submit</button>
                <span class="nws-err"></span>
            </form>
            <table id="frm">

            </table>
        </div>
        <style>
            
            h2{
                font-family: lato;
                font-weight: 700;   
            }
            input{
                width: 350px;
                height: 30px;
                margin-bottom: 20px;
                /*margin-left: 10px*/

            }
            textarea{
                width: 350px;
                height: 100px;
                margin-bottom: 20px;
            }
            .nw-btn {
                font-size: 1.3em;
                color: #23aad3;
                border: 2px solid #23aad3;
                padding: 8px 12px 8px 12px;
                border-radius: 5px;
                cursor: pointer;
                 font-family: lato !important; 
                font-weight: 500;
                background-color: white;
}
            .slt{
                margin: 10px;
                color: black !important;
                float: left;
            }
            select{
                width: 350px;
                padding: 4px;
                margin-bottom: 16px;
                display: inline-block;
                /*margin-left: 10px;*/
                margin-right: 10px;
            }
            b{
                padding-left: 100px;
            }
            th{
                font-size: 1.3em;
                text-align: center;
            }
            button{
                padding: 10px;
            }
        </style>
    <!--<iframe src="https://docs.google.com/forms/d/1aHrSrp765LiK6jDKdBvlQMVMlz56y2rbaovsmwm9kUA/viewform" style="position: absolute; height: 100%; width: 100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>-->
</div>
<?php require 'views/footer.php'; ?>