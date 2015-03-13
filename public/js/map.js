$(document).ready(function () {



//$('.').click(function(){
//   $('.left--mbl-mnu').css({'width': '200px'}).toggle(); 
//});
    $('.mbl-rsp-mnu').click(function (e) {
        e.preventDefault();
        if ($('.left--mbl-mnu').width() == 0) {
            $('.left--mbl-mnu').css({'width': '200px'});
            $(this).css({'color': '#F74895'})
        } else {
            $('.left--mbl-mnu').css({'width': '0px'});
            $(this).css({'color': '#333'})
        }
    });

//$('html').on('click', function (e) {
//    if (typeof $(e.target).data('original-title') == 'undefined') {
//    $('[data-original-title]').popover('hide');
//  }
//});

//    var map;
//    function initialize() {
//        var mapOptions = {
//            zoom: 8,
//            center: new google.maps.LatLng(-34.397, 150.644)
//        };
//        map = new google.maps.Map(document.getElementById('map-canvas'),
//                mapOptions);
//    }
//
//    google.maps.event.addDomListener(window, 'load', initialize);


//    $('.popver').popover({
//        html: true,
//        placement: 'bottom',
//        title: '<p id="new" class="cnt" data-toggle="modal" data-target="#newentry">New</p>',
//        content: ''
//    }).parent().on('click', '#admn', function () {
//
//        $.ajax({
//            url: 'index/new_entries',
//            method: 'post',
//            data: {
//                'tp': 'new'
//            },
//            success: function (d) {
//                $('.new-lst').css({'background-color': 'rgba(146, 24, 24, 0.6)'})
//                var data = JSON.parse(d);
//                var i;
//                var lng = data.length;
//                $('.lst-tab').html('');
//                $('.lst-tab').html('<tr><th>Company Name</th><th>Type</th>' +
//                        '<th>City</th><th>Status</th></tr>')
//                for (i = 0; i < lng; i++) {
//                    $('.lst-tab').append('<tr><td align="center"><a id="0" href="#">' + data[i]._name_ + '</a></td>' +
//                            '<td align="center">' + data[i]._type_ + '</td>' +
//                            '<td align="center"><a id="0" href="#"><i class="icon-eye-open"></i>' +
//                            '' + data[i]._city_ + '</a></td><td style="text-align: center"><a id="aprv-etry" data-id='+ data[i].id +' href="#" class="mps-inpt btn btn-info btn-small">Approve</a></td></tr>');
//                }
//            }
//        });
//    });


    $('#new_etry').click(function () {
        var nme = $('#name').val();
        var web = $('#website').val();
        var typ = $('#tp').val();
        var abt = $('#abt').val();
        var cty = $('#cty').val();
        var adr = $('#adrss').val();
        var cnt = $('#cntat').val();
        var rtng = $('#rtng').val();
        var lang = $('#lng').val();
        var lat = $('#ltd').val();
        if (nme.trim() == '' || nme.trim() == null) {
            $('.er').css({'opacity': '1'}).text('Company name cannot be empty');
            $('#name').focus();
            $('.modal-body').effect('shake', {
                times: 2,
                distance: 4
            }, 300);
            return;
        }
        else if (web.trim() == '' || web.trim() == null) {
            $('.er').css({'opacity': '1'}).text('Company wbsite cannot be empty');
            $('#website').focus();
            $('.modal-body').effect('shake', {
                times: 2,
                distance: 4
            }, 300);
            return;
        }
        else if (typ.trim() == '' || typ.trim() == null) {
            $('.er').css({'opacity': '1'}).text('Company Type cannot be empty');
            $('#tp').focus();
            $('.modal-body').effect('shake', {
                times: 2,
                distance: 4
            }, 300);
            return;
        }
        else if (abt.trim() == '' || abt.trim() == null) {
            $('.er').css({'opacity': '1'}).text('Company Description cannot be empty');
            $('#abt').focus();
            $('.modal-body').effect('shake', {
                times: 2,
                distance: 4
            }, 300);
            return;
        }
        else if (cty.trim() == '' || cty.trim() == null) {
            $('.er').css({'opacity': '1'}).text('Company Location cannot be empty');
            $('#cty').focus();
            $('.modal-body').effect('shake', {
                times: 2,
                distance: 4
            }, 300);
            return;
        }
        $.ajax({
            url: 'index/map',
            method: 'post',
            data: {
                'name': nme.trim(),
                'website': web.trim(),
                'type': typ.trim(),
                'about': abt.trim(),
                'city': cty.trim(),
                'addres': adr.trim(),
                'contact': cnt.trim(),
                'rating': rtng.trim(),
                'langitude': lang.trim(),
                'latitude': lat.trim(),
            },
            success: function (d) {
                $('#newentry .p-cls').trigger('click');
                alert(d);
                document.getElementById("cpmy-frm").reset();

            }
        })
    });

    $('.al-lst').click(function () {

        $.ajax({
            url: 'index/all_entries',
            method: 'post',
            data: {
                'tp': 'all'
            },
            success: function (d) {
                $('.new-lst').css({'background-color': 'rgba(51, 51, 51, 0.53)'})
                $('.al-lst').css({'background-color': 'rgba(146, 24, 24, 0.6)'})
                var data = JSON.parse(d);
                var i;
                var lng = data.length;
                $('.lst-tab').html('');
                $('.lst-tab').html('<tr><th>Company Name</th><th>Type</th>' +
                        '<th>city</th></tr>')
                for (i = 0; i < lng; i++) {
                    $('.lst-tab').append('<tr><td align="center"><a id="0" href="#">' + data[i]._name_ + '</a></td>' +
                            '<td align="center">' + data[i]._type_ + '</td>' +
                            '<td align="center"><a id="0" href="#"><i class="icon-eye-open"></i>' +
                            '' + data[i]._city_ + '</a></td></tr>');
                }
            }
        });
    });

    $('.new-lst').click(function () {
        $.ajax({
            url: 'index/new_entries',
            method: 'post',
            data: {
                'tp': 'all'
            },
            success: function (d) {
                $('.al-lst').css({'background-color': 'rgba(51, 51, 51, 0.53)'})
                $('.new-lst').css({'background-color': 'rgba(146, 24, 24, 0.6)'})
                var data = JSON.parse(d);
                var i;
                var lng = data.length;
                $('.lst-tab').html('');
                $('.lst-tab').html('<tr><th>Company Name</th><th>Type</th>' +
                        '<th>City</th><th>Status</th></tr>')
                for (i = 0; i < lng; i++) {
                    $('.lst-tab').append('<tr><td align="center"><a id="0" href="#">' + data[i]._name_ + '</a></td>' +
                            '<td align="center">' + data[i]._type_ + '</td>' +
                            '<td align="center"><a id="0" href="#"><i class="icon-eye-open"></i>' +
                            '' + data[i]._city_ + '</a></td><td style="text-align: center"><a id="aprv-etry" data-id=' + data[i].id + ' href="#" class="mps-inpt btn btn-info btn-small">Approve</a></td></tr>');
                }
            }
        });
    });

    $.ajax({
        url: 'index/clst',
        method: 'post',
        success: function (d) {
            var data = JSON.parse(d);
            var i;
            var lngt = data.length;
            for (i = 0; i < lngt; i++) {
                $('#comny_name').append('<option value="' + i + '" >' + data[i]._resources_type + '</option>')
            }
        }
    });


    $.ajax({
        url: 'index/all_entries',
        method: 'post',
        success: function (d) {
            var r = JSON.parse(d);
            var l = r.length;
            var i;
            for (i = 0; i < l; i++) {
                
                if(r[i]._resources_logo == ''){
                    var logo = 'default.png';
                }else{
                    logo = r[i]._resources_logo;
                }
                var id = r[i]._resources_name.slice(0, 1);
                id = id.toLowerCase();
                var $this = $('#' + id);
                $this.css({'display': 'inline-block'});
                $this.find('.indx-nme').css({'display': 'block'});
                $this.find('.indx-nme').text(id);
                $('#index').find("li[data-index='" + id + "']").children('a').css({'color': '#23aad3', 'pointer-events': 'all'});
                $('.itms').find('#' + id).append('<div class="cmpny-items"><div class="cmpy_ttl">' + r[i]._resources_name + '</div>' +
                        '<div class="cmp-cnct"><div class="dtls-lst">' +
                        '<p class=""><i class="icon-home"></i><span>Website:</span><a href="' + r[i]._resources_website + '" target="_blank">' + r[i]._resources_website + '</a></p>' +
                        '<p class=""><i class="icon-mail"></i><span>Email:</span>' + r[i]._resources_email + '</p>' +
                        '<p class=""><i class="icon-call"></i><span>Phone:</span>' + r[i]._resources_phone + '</p></div>' +
                        '<div class="cp-lgo"><img src="/images/logos/'+ logo +'"></div><div class="clearfix"></div></div>' +
                        '<p><span>About Company:</span><br>' + r[i]._resources_description + '</p><p><i class="icon-profile"></i><span>Contact:</span>' + r[i]._resources_contact_person + '</p>' +
                        '<p><i class="icon-map-location"></i><span>Address:</span>' + r[i]._resources_address + '</p></div>');

                //                $('.itms').find('#' + id).append('<div class="cmpny-items">' +
//                        '<div class="cmpy_ttl">' + r[i]._resources_name + '</div>' +
//                        '<p class="dtls-w"><span>Website:</span><a href="' + r[i]._resources_website + '" target="_blank">' + r[i]._resources_website + '</a></p>' +
//                        '<p class="dtls-p"><span>Email:</span>' + r[i]._resources_email + '</p>' +
//                        '<p class="dtls-w"><span>Key Member:</span>' + r[i]._resources_key_members + '</p>' +
//                        '<p class="dtls-p"><span>Phone:</span>' + r[i]._resources_phone + '</p>' +
//                        '<p><span>Description:</span><br>' + r[i]._resources_description + '</p>' +
//                        '<p><span>Contact:</span>' + r[i]._resources_contact_person + '</p><p><span>Address:</span>' + r[i]._resources_address + '</p></div>');
            }
        }
    });

    $('#comny_name').change(function () {
        $('.indx-nme').empty();
        $('.cmpny-items').remove();
        $('.indx-nme').css({'display': 'none'});
        $.ajax({
            url: 'index/bytp',
            method: 'post',
            data: {'tp': $('#comny_name option:selected').text()},
            success: function (d) {
                var r = JSON.parse(d);
                var l = r.length;
                var i;
                $('#index').find("li").children('a').css({'color': '#727272'});
                for (i = 0; i < l; i++) {
                    if(r[i]._resources_logo == ''){
                    var logo = 'default.png';
                }else{
                    logo = r[i]._resources_logo;
                }
                    var id = r[i]._resources_name.slice(0, 1);
                    id = id.toLowerCase();
                    var $this = $('#' + id);
                    $this.css({'display': 'inline-block'});
                    $this.find('.indx-nme').css({'display': 'block'});
                    $this.find('.indx-nme').text(id);

                    $('#index').find("li[data-index='" + id + "']").children('a').css({'color': '#23aad3', 'pointer-events': 'all'});
                    $('.itms').find('#' + id).append('<div class="cmpny-items"><div class="cmpy_ttl">' + r[i]._resources_name + '</div>' +
                            '<div class="cmp-cnct"><div class="dtls-lst">' +
                            '<p class=""><i class="icon-home"></i><span>Website:</span><a href="' + r[i]._resources_website + '" target="_blank">' + r[i]._resources_website + '</a></p>' +
                            '<p class=""><i class="icon-mail"></i><span>Email:</span>' + r[i]._resources_email + '</p>' +
                            '<p class=""><i class="icon-call"></i><span>Phone:</span>' + r[i]._resources_phone + '</p></div>' +
                            '<div class="cp-lgo"><img src="/images/logos/'+ logo + '"></div><div class="clearfix"></div></div>' +
                            '<p><span>About Company:</span><br>' + r[i]._resources_description + '</p><p><i class="icon-profile"></i><span>Contact:</span>' + r[i]._resources_contact_person + '</p>' +
                            '<p><i class="icon-map-location"></i><span>Address:</span>' + r[i]._resources_address + '</p></div>');




//                    $('.itms').find('#' + id).append('<div class="cmpny-items">'+
//                                                        '<div class="cmpy_ttl">' + r[i]._name_ + '</div>'+
//                                                        '<p class="dtls-w"><span>Website:</span><a href="' + r[i]._website_ + '" target="_blank">' + r[i]._website_ + '</a></p>'+
//                                                        '<p class="dtls-w"><span>Type:</span>' + r[i]._type_ + '</p>'+
//                                                        '<p class="dtls-p"><span>Phone:</span>' + r[i]._contact_details_ + '</p>'+
//                                                        '<p><span>About Company:</span><br>' + r[i]._desc_ + '</p>'+
//                                                        '<p><span>Address:</span>' + r[i]._address_ + '</p></div>');

                }

            }
        });

    });

    $("#index").on('click', 'li a', function () {
        var id = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 1800);
    });



    $('.modal-body').on('click', '#aprv-etry', function (e) {
        e.preventDefault();

        $.ajax({
            url: 'index/aprv',
            method: 'post',
            data: {
                sts: 'aprv',
                id: $(this).data('id'),
            },
            success: function (d) {
                $('#admin_aprv .p-cls').trigger('click');
                alert(d);
            }
        });
    });


    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $('body').find('#goTop').fadeIn('slow');
        } else {
            $('body').find('#goTop').fadeOut('slow');
        }
    });

    $('#goTop').click(function () {
        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 500);
    });


    $('#add-nws-btn').click(function(e){
        e.preventDefault();
        var url = $('#nws-url').val().trim();
        var strtp = $('#strp_nme').val().trim();
        var tp = $('#nws-tp option:selected').text();
        if(url == ''){
            $('.nws-err').text('URL cannot be empty');
            return false;
        }
        else if(strtp == ''){
            $('.nws-err').text('Startup cannot be empty');
            return false;
        }
        $.ajax({
           url:  'index/adnws',
           type: 'post',
           data: {'url': url,
                  'strtp': strtp,
                  'tp': tp},
              beforeSend: function () {
                  $('.add-new-dly').show();
              },
           success: function(data){
               var d = JSON.parse(data);
               if(d.length > 1){
               alert(d[1]);    
               $('.add-new-dly').hide();
               document.getElementById("adnws_form").reset();
               $('.ad-nws-navg').click();
               var html = "<li><div class='nws-dsc bx'><div class='tl-dt' style='background-color:tomato'>";
                    html += "<h1><a href='#' data-cnt="+strtp+" data-tp='strtp' class='nws-strp'>"+strtp+"</a></h1><p class='athr'><i>Type: <a href='#' data-cnt='"+tp+"' data-tp='nwstype' class='nws-strp'>"+tp+"</a></i></p>";
                    html += "</div><h2 class='s-h'><a href='"+url+"' target='_blank'>"+d[0]['og:title']+"</a></h2>";
                    html += "<p class='dsc'>"+d[0]['og:description']+"</p>";
                    html += "<a href='"+url+"' target='_blank' class='rd-mre'>Read more.. <i class='icon_angle-right'></i></a>";
                    html += "<p class='dsc' style='display: inline-block'><i>Published by <a href='#' data-cnt='"+d[0]['og:site_name']+"' data-tp='nwssrc' class='nws-strp'>"+d[0]['og:site_name']+"<a/> on "+ d[0]['article:published_time'].substr(0,10)+"</i></p>";
                    html += "</div><div class='clearfix'></div></li>";
                    $('#nws-lst').prepend(html);
               }else{
                   
                   if(d[0] == '-1'){
                       $('.no-strtp').css({'display': 'block', 'color':'red'});
                       alert('hha find');
                   }
                   else{
                       alert(d[0]);
                   }
                   $('.add-new-dly').hide();
               }
                              
               
           }
        });
    });
    
    
    $('#strp_nme').autocomplete({
        source: function( request, response ) {
        $.ajax({
          url: "index/strtpsrch",
          method: 'post',
          data: {
            kwd: request.term
          },
          success: function( data ) {
              var data = JSON.parse(data);
              if(data.length == 0){
                  $('.no-strtp').css({'display': 'block', 'color':'red'});
              }else{
                  $('.no-strtp').css({'display': 'none', 'color':'red'});
              }
              $(".ui-autocomplete").addClass('srch');
             response( $.map(data, function(item, i) {
              return{
                  label: item._name_,
                  id: item.id        
              }
            }));
            
          }
        });
      }
  });
  
  
 
  $('.ad-nws-navg').click(function(){
      
       if($('.ad-nws').hasClass('ad-nww-clps')){
           $('.ad-nws').removeClass('ad-nww-clps');
           $(this).find('i').removeClass('icon-plus-circle').addClass('icon-remove-circle');
           $(this).css({'left': '0'});
      }else{
         $('.ad-nws').addClass('ad-nww-clps');
         $(this).find('i').removeClass('icon-remove-circle').addClass('icon-plus-circle');
         $(this).css({'left': '-38px'});
      }
  });
  
  $('#nws-ldmre-btn').click(function(){
     
     $.ajax({
         url: 'index/getnws',
         'type': 'post',
         data: {'cnt': $('#nws-lst li').length},
         success: function(data){
             var d = JSON.parse(data);
             if(d == 0){
                 $('#nws-ldmre-btn').fadeOut('slow');
             }
             var c = 0;
             for (var i=0; i<d.length; i++){
                 var colours = ['darkseagreen', 'bisque', 'tomato', 'slategrey'];
                 if(c >= 4){
                     c = 0;
                 }
                var html = "<li><div class='nws-dsc bx'><div class='tl-dt' style='background-color:"+colours[c]+"'>";
                    html += "<h1><a href='#' data-cnt="+d[i]._news_addedby+" data-tp='strtp' class='nws-strp'>"+d[i]._news_addedby+"</a></h1><p class='athr'><i>Type: <a href='#' data-cnt='"+d[i]._news_type+"' data-tp='nwstype' class='nws-strp'>"+d[i]._news_type+"</a></i></p>";
                    var x = new Date(d[i]._news_pubtime*1000) + "";
                    html += "</div><h2 class='s-h'><a href='"+d[i]._news_link+"' target='_blank'>"+d[i]._news_hdlne+"</a></h2>";
                    html += "<p class='dsc'>"+d[i]._news_smry+"</p>";
                    html += "<a href='"+d[i]._news_link+"' target='_blank' class='rd-mre'>Read more..</a>";
                    html += "<p class='dsc' style='display: inline-block'><i>Published by <a href='#' data-cnt='"+d[i]._news_src+"' data-tp='nwssrc' class='nws-strp'>"+d[i]._news_src+"<a/> on "+x.substr(4,12)+"</i></p>";
                    html += "</div><div class='clearfix'></div></li>";
                    $('#nws-lst').append(html);
                    c++;
            }
             
         }
     }) 
  });
  
  $('#add-strp-btn').click(function(e){
      e.preventDefault();
      var nme = $('#strp-nme').val().trim();
      var site = $('#strp-site').val().trim();
      var fundrs = $('#strp-fundrs').val().trim();
      var poccnt = $('#strp-poccnt').val().trim();
      var pocphne = $('#strp-pocphne').val().trim();
      var poceml = $('#strp-poceml').val().trim();
      var ofceadrs = $('#strp-ofcadrs').val().trim();
      var desc = $('#strp-desc').val().trim();
      var emRegx = /^[a-z0-9_\+-]+(\.[a-z0-9_\+-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*\.([a-z]{2,4})$/;
      var regx = new RegExp(emRegx);
      if(nme == ''){
          $('.nws-err').text('Startup name cannot be empty');
          return;
      }
      else if(site == ''){
          $('.nws-err').text('Startup Website cannot be empty');
          return;
      }
      else if(fundrs == ''){
          $('.nws-err').text('Startup founders name cannot be empty');
          return;
      }
      else if(poccnt == ''){
          $('.nws-err').text('Startup contact name cannot be empty');
          return;
      }
      else if(pocphne == ''){
          $('.nws-err').text('Startup phone no cannot be empty');
          return;
      }
      else if(poceml == ''){
          $('.nws-err').text('Startup contact email cannot be empty');
          return;
      }
      else if(!emRegx.test(poceml)){
          $('.nws-err').text('Please enter valid email');
          return;
      }
      else if(ofceadrs == ''){
          $('.nws-err').text('Startup address cannot be empty');
          return;
      }
     
     $.ajax({
        url: 'index/addstrp',
        method: 'post',
        data: {
            'name': nme,
            'site': site,
            'fundrs': fundrs,
            'poccnt': poccnt,
            'pocphne': pocphne,
            'poceml': poceml,
            'ofceadrs': ofceadrs,
            'desc': desc,
        },
        success: function(d){
            alert(d);
            document.getElementById('strp_ad_fm').reset();
            $('.nws-err').text('');
        },
     });
      
  });
  
  $('#nws-lst').on('click', '.nws-strp', function(e){
      e.preventDefault();
      
      $.ajax({
          url: 'index/fltrnws',
          method: 'post',
          'data': {'cnt': $(this).data('cnt'),
                    'tp': $(this).data('tp')},
           success: function(data){
               var d = JSON.parse(data);
             if(d.length < 20){
                 $('#back-btn').show();
                 $('#nws-ldmre-btn').hide();
             }
             if(d.length != 0){
             $('#nws-lst').html('');
             var c = 0;
             for (var i=0; i<d.length; i++){
                 var colours = ['darkseagreen', 'bisque', 'tomato', 'slategrey'];
                 if(c >= 4){
                     c = 0;
                 }
                var html = "<li><div class='nws-dsc bx'><div class='tl-dt' style='background-color:"+colours[c]+"'>";
                    html += "<h1><a href='#' data-cnt="+d[i]._news_addedby+" data-tp='strtp' class='nws-strp'>"+d[i]._news_addedby+"</a></h1><p class='athr'><i>Type: <a href='#' data-cnt='"+d[i]._news_type+"' data-tp='nwstype' class='nws-strp'>"+d[i]._news_type+"</a></i></p>";
                    var x = new Date(d[i]._news_pubtime*1000) + "";
                    html += "</div><h2 class='s-h'><a href='"+d[i]._news_link+"' target='_blank'>"+d[i]._news_hdlne+"</a></h2>";
                    html += "<p class='dsc'>"+d[i]._news_smry+"</p>";
                    html += "<a href='"+d[i]._news_link+"' target='_blank' class='rd-mre'>Read more..</a>";
                    html += "<p class='dsc' style='display: inline-block'><i>Published by <a href='#' data-cnt='"+d[i]._news_src+"' data-tp='nwssrc' class='nws-strp'>"+d[i]._news_src+"<a/> on "+x.substr(4,12)+"</i></p>";
                    html += "</div><div class='clearfix'></div></li>";
                    $('#nws-lst').append(html);
                    c++;
            }
           }
       }
      })
      
  });
  
  $('#nws-fltr-optn').change(function(){
     var slctd = $('#nws-fltr-optn option:selected').data('slct');
     if(slctd == 'date'){
                $('#flter_sub_sctn').html('');
                var html = '<input type="text" placeholder="Select date" class="date-sclet" data-tp="nwsdate"><button class="butn btn-primary" id="tme-fltr-btn" style="margin-top: -4px; margin-left: 8px;">Go</button>';
                $('#flter_sub_sctn').append(html);
                return;
            }
     $.ajax({
        url: 'index/fltroptns',
        method: 'post',
        data: {'slctd': slctd},
        success: function(data){
            var d = JSON.parse(data);
            if(slctd == 'src'){
                $('#flter_sub_sctn').html('');
                var html = '<select id="'+slctd+'_suboptns">';
                html += '<option>Select</option>';
                for(var i=0; i<d.length; i++){
                   html += '<option data-sub="'+d[i]['_news_src']+'" data-tp="nwssrc">'+d[i]['_news_src']+'</option>'
            }
                        html +='</select>';
                $('#flter_sub_sctn').append(html);
            }
            else if(slctd == 'strtp'){
                $('#flter_sub_sctn').html('');
                var html = '<select id="'+slctd+'_suboptns">';
                 html += '<option>Select</option>';
                for(var i=0; i<d.length; i++){
                   html += '<option data-sub="'+d[i]['_news_addedby']+'" data-tp="strtp">'+d[i]['_news_addedby']+'</option>'
            }
                        html +='</select>';
                $('#flter_sub_sctn').append(html);
            }
            else if(slctd == 'tp'){
                $('#flter_sub_sctn').html('');
                var html = '<select id="'+slctd+'_suboptns">';
                html += '<option>Select</option>';
                for(var i=0; i<d.length; i++){
                   html += '<option data-sub="'+d[i]['_news_type']+'" data-tp="nwstype">'+d[i]['_news_type']+'</option>'
            }
                        html +='</select>';
                $('#flter_sub_sctn').append(html);
            }
            
        }
     });
  });
  
  $('#flter_sub_sctn').on('change, click', 'select, #tme-fltr-btn', function(e){
      
      if($(this).attr('id') == 'tme-fltr-btn'){
          var slctd = $('#flter_sub_sctn').find('.date-sclet').val();
          var tp = $('#flter_sub_sctn .date-sclet' ).data('tp');
      }else{
          var slctd = $('#flter_sub_sctn option:selected' ).data('sub');
          var tp = $('#flter_sub_sctn option:selected' ).data('tp');
      }
          
      
      $.ajax({
          url: 'index/fltrnws',
          method: 'post',
          data: {'tp': tp, 'cnt': slctd},
          success: function(data){
              var d = JSON.parse(data);
             if(d.length < 20){
                 $('#back-btn').show();
                 $('#nws-ldmre-btn').hide();
             }
             if(d.length != 0){
             $('#nws-lst').html('');
             var c = 0;
             for (var i=0; i<d.length; i++){
                 var colours = ['darkseagreen', 'bisque', 'tomato', 'slategrey'];
                 if(c >= 4){
                     c = 0;
                 }
                var html = "<li><div class='nws-dsc bx'><div class='tl-dt' style='background-color:"+colours[c]+"'>";
                    html += "<h1><a href='#' data-cnt="+d[i]._news_addedby+" data-tp='strtp' class='nws-strp'>"+d[i]._news_addedby+"</a></h1><p class='athr'><i>In: <a href='#' data-cnt='"+d[i]._news_type+"' data-tp='nwstype' class='nws-strp'>"+d[i]._news_type+"</a></i></p>";
                    var x = new Date(d[i]._news_pubtime*1000) + "";
                    html += "</div><h2 class='s-h'><a href='"+d[i]._news_link+"' target='_blank'>"+d[i]._news_hdlne+"</a></h2>";
                    html += "<p class='dsc'>"+d[i]._news_smry+"</p>";
                    html += "<a href='"+d[i]._news_link+"' target='_blank' class='rd-mre'>Read more..</a>";
                    html += "<p class='dsc' style='display: inline-block'><i>Published by <a href='#' data-cnt='"+d[i]._news_src+"' data-tp='nwssrc' class='nws-strp'>"+d[i]._news_src+"<a/> on "+x.substr(4,12)+"</i></p>";
                    html += "</div><div class='clearfix'></div></li>";
                    $('#nws-lst').append(html);
                    c++;
            }
           }else{
               $('#nws-lst').html("<h2>We coudnt find any stroies</h2>");
           }
          }
      })
  });


  $("#flter_sub_sctn" ).on('focus', '.date-sclet', function(){
    $(this).datepicker({dateFormat: 'dd-mm-yy', minDate: new Date(1999, 10 - 1, 25)});
  });
 
    $('body').on('click', '#contact-fab', function(){
        $('#contact-fab').floatingAction();
    });
    
    $('.pg').on('click', '.nws-clps', function(){
        if($(this).height() < 40){
        if($(this).index() == 0){
            var hght = '310px';
        }else{
            var hght = '640px';
        };
        $(this).find('h2').addClass('clps-actv');
        $(this).find('h2').children('i').removeClass('icon-chevron-down').addClass('icon-chevron-up');
        $(this).children().css({'opacity': '1'});
        $(this).css({'height': hght, 'border-top-left-radius': '4px', 'border-top-right-radius': '4px'});
        $(this).siblings('.nws-clps').css({'height': '39px', 'overflow': 'hidden', 'border-top-left-radius': '0px', 'border-top-right-radius': '0px'});
        $(this).siblings('.nws-clps').find('h2').removeClass('clps-actv');
        $(this).siblings('.nws-clps').find('h2').children('i').removeClass('icon-chevron-up').addClass('icon-chevron-down');
        $(this).siblings('.nws-clps').find('h2').css({'border-top-left-radius': '0px', 'border-top-right-radius': '0px'});
    }else{
//        $(this).find('h2').removeClass('clps-actv').css({'padding-bottom': '0px'});
//        $(this).find('h2').children('i').removeClass('icon-chevron-up').addClass('icon-chevron-down');
//        $(this).children().css({'opacity': '1'});
//        $(this).css({'height': 38, 'border-top-left-radius': '0px', 'border-top-right-radius': '0px'});
    }
      });
      
       $('body').on('click', 'button, .media', function (e) {
        var $this = $(this);
        var parent = $this.parent()
        var color = $this.css('color');
        if ($this.find(".rippl").length == 0) {
            $this.append("<span class='rippl'></span>");
        }
        var rpl = $this.find(".rippl");
        rpl.removeClass("animate");
        if (!rpl.height() && !rpl.width())
        {
            var d = Math.max($this.outerWidth(), $this.outerHeight());
            rpl.css({height: d, width: d});
        }
        var x = e.pageX - $this.offset().left - rpl.width() / 2;
        var y = e.pageY - $this.offset().top - rpl.height() / 2;
        rpl.css({top: y + 'px', left: x + 'px', 'background-color': color, 'opacity': '0.5'}).addClass("animate");
    });
    
      $('body').on('focus', 'input', function (e) {
        var $this = $(this);
        var parent = $this.parent();
        var color = "red";
        if ($this.children(".ripple-input").length == 0) {
            $this.after("<span class='ripple-input'></span>");
        }
        var rpl = $this.children(".ripple-input");
        rpl.removeClass("animate");
        if (!rpl.height() && !rpl.width())
        {
            var d = Math.max($this.outerWidth(), $this.outerHeight());
           rpl.css({height: "2px", width: d});
        }
        var x =  0;
        var y =rpl.height() / 2;
        rpl.css({top: y + 'px', left: x + 'px', 'background-color': color, 'opacity': '1'}).addClass("animate");
                setTimeout(function () {
                  rpl.css({'-webkit-transform': 'scale(1)'});
                }, 300);
    });
    
    
      
      // @selected menu background changing
      var p = location.pathname.split("/")[1];
        var mn = $('.media[data-pg="'+p+'"]');
            mn.addClass('mnu-activ');
      
      // @input box metaril effect
//      $('input').not(':input[type=file]').addClass("form-control");
//      $('input').not(':input[type=file]').addClass("form-control");
//      $('textarea').addClass("form-control");
        $('input').wrap('<div>');
//        $('input').after("</div>");
});

//99