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
        
        $.ajax({
           url:  'index/adnws',
           type: 'post',
           data: {'url': $('#nws-url').val(),
                  'strtp': $('#strp_nme').val(),
                  'tp': $('#nws-tp option:selected').text()},
           success: function(d){
               alert(d);
           }
        });
    });
    
    var colours = ['darkseagreen', 'bisque', 'bisque', 'tomato', 'slategrey'];

});

