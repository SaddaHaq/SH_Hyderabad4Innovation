$(document).ready(function () {

    var map;
    function initialize() {
        var mapOptions = {
            zoom: 8,
            center: new google.maps.LatLng(-34.397, 150.644)
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
    $(function () {

        $('#popver').popover({
            html: true,
            placement: 'bottom',
            title: '<p id="new" class="cnt" data-toggle="modal" data-target="#newentry">New</p>',
            content: '<p id="admn" class="cnt" data-toggle="modal" data-target="#admin_aprv">Admin</p>'
        }).parent().on('click', '#admn', function () {

            $.ajax({
                url: 'index/new_entries',
                method: 'post',
                data: {
                    'tp': 'new'
                },
                success: function (d) {
                    var data = JSON.parse(d);
                    var i;
                    var lng = data.length;
                    $('.lst-tab').html('');
                    $('.lst-tab').html('<tr><th>Company Name</th><th>Type</th>' +
                            '<th>City</th></tr>')
                    for (i = 0; i < lng; i++) {
                        $('.lst-tab').append('<tr><td align="center"><a id="0" href="#" class="modal_trigger6 hr-lev prsnl-levs-list">' + data[i]._name_ + '</a></td>' +
                                '<td align="center">' + data[i]._type_ + '</td>'+
                                '<td align="center"><a id="0" href="#payslip-popup" class="modal_trigger6 hr-lev prsnl-levs-list"><i class="icon-eye-open"></i>' +
                                '' + data[i]._city_ + '</a></td></tr>');
                    }
                }
            });
        });


        $('#new_etry').click(function () {

            $.ajax({
                url: 'index/map',
                method: 'post',
                data: {
                    'name': $('#name').val(),
                    'website': $('#website').val(),
                    'type': $('#tp').val(),
                    'about': $('#abt').val(),
                    'city': $('#cty').val(),
                    'addres': $('#adrss').val(),
                    'contact': $('#cntat').val(),
                    'rating': $('#rtng').val(),
                    'langitude': $('#lng').val(),
                    'latitude': $('#ltd').val(),
                },
                success: function (d) {
                    $('#newentry .p-cls').trigger('click');
                    alert(d);
                    
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
//                    console.log(d);return;
                    var data = JSON.parse(d);
                    var i;
                    var lng = data.length;
                    $('.lst-tab').html('');
                    $('.lst-tab').html('<tr><th>Company Name</th><th>Type</th>' +
                            '<th>city</th></tr>')
                    for (i = 0; i < lng; i++) {
                        $('.lst-tab').append('<tr><td align="center"><a id="0" href="#" class="modal_trigger6 hr-lev prsnl-levs-list">' + data[i]._name_ + '</a></td>' +
                                '<td align="center">' + data[i]._type_ + '</td>' +
                                '<td align="center"><a id="0" href="#payslip-popup" class="modal_trigger6 hr-lev prsnl-levs-list"><i class="icon-eye-open"></i>' +
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
                    var data = JSON.parse(d);
                    var i;
                    var lng = data.length;
                    $('.lst-tab').html('');
                    $('.lst-tab').html('<tr><th>Company Name</th><th>Type</th>' +
                            '<th>City</th></tr>')
                    for (i = 0; i < lng; i++) {
                        $('.lst-tab').append('<tr><td align="center"><a id="0" href="#" class="modal_trigger6 hr-lev prsnl-levs-list">' + data[i]._name_ + '</a></td>' +
                                '<td align="center">' + data[i]._type_ + '</td>' +
                                '<td align="center"><a id="0" href="#payslip-popup" class="modal_trigger6 hr-lev prsnl-levs-list"><i class="icon-eye-open"></i>' +
                                '' + data[i]._city_ + '</a></td></tr>');
                    }
                }
            });
        });



    });



});
