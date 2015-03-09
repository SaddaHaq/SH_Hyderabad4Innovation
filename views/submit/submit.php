<?php require 'views/header.php'; ?>
<div class="cntr">
    <div class="slt">
            <h2 style="color: black !important">Add News</h2>
            <form id="video_galry_fm">
                Url:<br> <input type="text" id="nws-url"><br>  
                Startup Name:<br> <input type="text" id="strp_nme"><br>
                Type of news: <br>
                <select id="nws-tp">
                    <option>Startups</option>
                    <option>IT news</option>
                    <option>Business</option>
                </select><br>
                <button class="nw-btn" id="add-nws-btn">Submit</button>
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