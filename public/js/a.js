$(function() {
  srvr = 'http://localhost:8888/'
  $(window).on("load", function() {
    usr = $('#user-nav').find('.usrname').attr('href');
    if(usr == undefined || usr == '')
      usr = '';
    else
      usr = usr.split('/')[3];
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: srvr+'a/an',
        data: {'cl':document.URL, 'pl':document.referrer, 'u':usr, 'ck': getCookie('hqu'),
              'r':$(window).width()+'X'+$(window).height()},
        success: function(r) {
          if(r){
            d = new Date();
            d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
            document.cookie="hqu="+r.u+";expires="+d.toGMTString()+";path=/";
          }
        }
    });
  });
  
  function getCookie(n){
    cks = document.cookie;
    if(cks.indexOf(';') != -1){
      t = cks.split(';');
      for(i=0; i< t.length; i++){
        if(t[i].trim().indexOf(n) == 0){
          return t[i].split('=')[1];
        }
      }
    }
    return '';
  }
});