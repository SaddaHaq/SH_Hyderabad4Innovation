$(document).ready(function () {
    
    
    
//$('.').click(function(){
//   $('.left--mbl-mnu').css({'width': '200px'}).toggle(); 
//});
    $('.mbl-rsp-mnu').click(function(e){
        e.preventDefault();
        if($('.left--mbl-mnu').width() == 0){
           $('.left--mbl-mnu').css({'width': '200px'});
           $(this).css({'color': '#F74895'})
        }else{
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
        var typ  = $('#tp').val();
        var abt =  $('#abt').val();
        var cty = $('#cty').val();
        var adr = $('#adrss').val();
        var cnt = $('#cntat').val();
        var rtng = $('#rtng').val();
        var lang = $('#lng').val();
        var lat = $('#ltd').val();
        if(nme.trim() == '' || nme.trim() == null){
            $('.er').css({'opacity': '1'}).text('Company name cannot be empty');
            $('#name').focus();
            $('.modal-body').effect('shake', {
                times: 2,
                distance: 4
            }, 300);
            return;
        }
        else if(web.trim() == '' || web.trim() == null){
            $('.er').css({'opacity': '1'}).text('Company wbsite cannot be empty');
            $('#website').focus();
            $('.modal-body').effect('shake', {
                times: 2,
                distance: 4
            }, 300);
            return;
        }
        else if(typ.trim() == '' || typ.trim() == null){
            $('.er').css({'opacity': '1'}).text('Company Type cannot be empty');
            $('#tp').focus();
            $('.modal-body').effect('shake', {
                times: 2,
                distance: 4
            }, 300);
            return;
        }
        else if(abt.trim() == '' || abt.trim() == null){
             $('.er').css({'opacity': '1'}).text('Company Description cannot be empty');
            $('#abt').focus();
            $('.modal-body').effect('shake', {
                times: 2,
                distance: 4
            }, 300);
            return;
        }
        else if(cty.trim() == '' || cty.trim() == null){
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
                            '' + data[i]._city_ + '</a></td><td style="text-align: center"><a id="aprv-etry" data-id='+ data[i].id +' href="#" class="mps-inpt btn btn-info btn-small">Approve</a></td></tr>');
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
    
    $('#comny_name').change(function () {
//        $('.itms').html('');
        $.ajax({
            url: 'index/bytp',
            method: 'post',
            data: {'tp': $('#comny_name option:selected').text()},
            success: function (d) {
                var r = JSON.parse(d);
                var l = r.length;
                var i;
                
                for (i = 0; i < l; i++) {

                    var id = r[i]._search_id.toLowerCase();
                    var $this = $('#' + id);
                    $this.css({'display': 'block'});
                    $this.find('.indx-nme').text(r[i]._search_id);
                    $('.itms').find('#' + id).append('<div class="cmpny-items">'+
                                                        '<div class="cmpy_ttl">' + r[i]._resources_name + '</div>'+
                                                        '<p class="dtls-w"><span>Website:</span><a href="' + r[i]._resources_website + '" target="_blank">' + r[i]._resources_website + '</a></p>'+
                                                        '<p class="dtls-p"><span>Email:</span>' + r[i]._resources_email + '</p>'+
                                                        '<p class="dtls-w"><span>Key Member:</span>' + r[i]._resources_key_members + '</p>'+
                                                        '<p class="dtls-p"><span>Phone:</span>' + r[i]._resources_phone + '</p>'+
                                                        '<p><span>Description:</span><br>' + r[i]._resources_description + '</p>'+
                                                        '<p><span>Contact:</span>' + r[i]._resources_contact_person + '</p><p><span>Address:</span>' + r[i]._resources_address + '</p></div>');
                            
                }

            }
        });

    });
    
    $("#index").on('click', 'li a', function() {
        var id = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 1800);
});
    
    
    
    $('.modal-body').on('click', '#aprv-etry', function(e){
        e.preventDefault();
        
        $.ajax({
           url: 'index/aprv',
           method: 'post',
           data: {
               sts: 'aprv',
               id: $(this).data('id'),
           },
           success: function(d){
               $('#admin_aprv .p-cls').trigger('click');
               alert(d);
           }
        });
    });















////<![CDATA[
//      // this variable will collect the html which will eventually be placed in the side_bar 
//      var side_bar_html = ""; 
//    
//      // arrays to hold copies of the markers and html used by the side_bar 
//      // because the function closure trick doesnt work there 
//      var gmarkers = []; 
//      var gicons = [];
//     // global "map" variable
//      var map = null;
//gicons["red"] = new google.maps.MarkerImage("images/marker.png",
//      // This marker is 20 pixels wide by 34 pixels tall.
//      new google.maps.Size(20, 34),
//      // The origin for this image is 0,0.
//      new google.maps.Point(0,0),
//      // The anchor for this image is at 9,34.
//      new google.maps.Point(9, 34));
//  // Marker sizes are expressed as a Size of X,Y
//  // where the origin of the image (0,0) is located
//  // in the top left of the image.
// 
//  // Origins, anchor positions and coordinates of the marker
//  // increase in the X direction to the right and in
//  // the Y direction down.
//
//  var iconImage = new google.maps.MarkerImage('/images/marker.png',
//      // This marker is 20 pixels wide by 34 pixels tall.
//      new google.maps.Size(20, 34),
//      // The origin for this image is 0,0.
//      new google.maps.Point(0,0),
//      // The anchor for this image is at 9,34.
//      new google.maps.Point(9, 34));
//  var iconShadow = new google.maps.MarkerImage('http://www.google.com/mapfiles/shadow50.png',
//      // The shadow image is larger in the horizontal dimension
//      // while the position and offset are the same as for the main image.
//      new google.maps.Size(37, 34),
//      new google.maps.Point(0,0),
//      new google.maps.Point(9, 34));
//      // Shapes define the clickable region of the icon.
//      // The type defines an HTML &lt;area&gt; element 'poly' which
//      // traces out a polygon as a series of X,Y points. The final
//      // coordinate closes the poly by connecting to the first
//      // coordinate.
//  var iconShape = {
//      coord: [9,0,6,1,4,2,2,4,0,8,0,12,1,14,2,16,5,19,7,23,8,26,9,30,9,34,11,34,11,30,12,26,13,24,14,21,16,18,18,16,20,12,20,8,18,4,16,2,15,1,13,0],
//      type: 'poly'
//  };
//
//function getMarkerImage(iconColor) {
//   if ((typeof(iconColor)=="undefined") || (iconColor==null)) { 
//      iconColor = "red"; 
//   }
//   if (!gicons[iconColor]) {
//      gicons[iconColor] = new google.maps.MarkerImage("mapIcons/marker_"+ iconColor +".png",
//      // This marker is 20 pixels wide by 34 pixels tall.
//      new google.maps.Size(20, 34),
//      // The origin for this image is 0,0.
//      new google.maps.Point(0,0),
//      // The anchor for this image is at 6,20.
//      new google.maps.Point(9, 34));
//   } 
//   return gicons[iconColor];
//
//}
//
//      gicons["blue"] = getMarkerImage("blue");
//      gicons["green"] = getMarkerImage("green");
//      gicons["yelow"] = getMarkerImage("yellow");
//// A function to create the marker and set up the event window function 
//function createMarker(latlng,name,html,color) {
//    var contentString = html;
//    var marker = new google.maps.Marker({
//        position: latlng,
//        icon: gicons[color],
//        shadow: iconShadow,
//        map: map,
//        title: name,
//        zIndex: Math.round(latlng.lat()*-100000)<<5
//        });
//
//    google.maps.event.addListener(marker, 'click', function() {
//        infowindow.setContent(contentString); 
//        infowindow.open(map,marker);
//        });
//        // Switch icon on marker mouseover and mouseout
//        google.maps.event.addListener(marker, "mouseover", function() {
//          marker.setIcon(gicons["yellow"]);
//        });
//        google.maps.event.addListener(marker, "mouseout", function() {
//          marker.setIcon(gicons["blue"]);
//        });
//    gmarkers.push(marker);
//    // add a line to the side_bar html
//    var marker_num = gmarkers.length-1;
//    side_bar_html += '<a href="javascript:myclick(' + marker_num + ')" onmouseover="gmarkers['+marker_num+'].setIcon(gicons.yellow)" onmouseout="gmarkers['+marker_num+'].setIcon(gicons.blue)">' + name + '<\/a><br>';
//}
// 
//// This function picks up the click and opens the corresponding info window
//function myclick(i) {
//  google.maps.event.trigger(gmarkers[i], "click");
//}
//
//function initialize() {
//  // create the map
//  var myOptions = {
//    zoom: 8,
//    center: new google.maps.LatLng(17.3840500,78.4563600),
//    mapTypeControl: true,
//    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
//    navigationControl: true,
//    mapTypeId: google.maps.MapTypeId.ROADMAP
//  }
//  
//  map = new google.maps.Map(document.getElementById("map_canvas"),
//                                myOptions);
// var marker = new google.maps.Marker({
//    position: homeLatLng,
//    map:map,
//    draggable:true,
//    animation: google.maps.Animation.DROP,
//  });
//  google.maps.event.addListener(map, 'click', function() {
//        infowindow.close();
//        });
//      // Read the data from example.xml
////      downloadUrl("example.xml", function(doc) {
////        var xmlDoc = xmlParse(doc);
////        var markers = xmlDoc.documentElement.getElementsByTagName("marker");
////        for (var i = 0; i < markers.length; i++) {
////          // obtain the attribues of each marker
////          var lat = parseFloat(markers[i].getAttribute("lat"));
////          var lng = parseFloat(markers[i].getAttribute("lng"));
////          var point = new google.maps.LatLng(lat,lng);
////          var html = markers[i].getAttribute("html");
////          var label = markers[i].getAttribute("label");
////          // create the marker
////          var marker = createMarker(point,label,html,"blue");
////        }
////        // put the assembled side_bar_html contents into the side_bar div
////        document.getElementById("side_bar").innerHTML = side_bar_html;
////      });
//    }
// 
//var infowindow = new google.maps.InfoWindow(
//  { 
//    size: new google.maps.Size(150,50)
//  });
//    
//
//    // This Javascript is based on code provided by the
//    // Community Church Javascript Team
//    // http://www.bisphamchurch.org.uk/   
//    // http://econym.org.uk/gmap/
//    // from the v2 tutorial page at:
//    // http://econym.org.uk/gmap/basic3.htm 
////]]>


//    jQuery(function ($) {
//
//
//
//        // Asynchronously Load the map API 
////        var script = document.createElement('script');
////        script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
////        document.body.appendChild(script);
////    });

//    function initialize() {
//        var map;
//        var bounds = new google.maps.LatLngBounds();
//        var mapOptions = {
//            mapTypeId: 'roadmap'
//        };
//        var markers = []
//        // Display a map on the page
//        map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
//        map.setTilt(45);
//        $.ajax({
//            url: 'index/langlat',
//            method: 'post',
//            success: function (d) {
//                var data = JSON.parse(d);
//                var i;
//                var infoWindowContent = [
//                    ['<div class="info_content">' +
//                                '<h3>Hyderabad</h3>' +
//                                '<p></p>' + '</div>']
//                ];
//
//                var infoWindow = new google.maps.InfoWindow(), marker, i;
//                for (i = 0; i < data.length; i++) {
//                    
////                    markers.push(['Hyderabad', +data[i]._latitude_ + ',' + data[i]._latitude_])
////                   var l = +data[i]._latitude_ + ',' + data[i]._longitude_;
//                   var loc = 'hyderabad';
////                   alert(data[i]._latitude_ +',' +data[i]._longitude_);
//                    var position = new google.maps.LatLng(data[i]._latitude_ , data[i]._longitude_);
//                    bounds.extend(position);
//                    marker = new google.maps.Marker({
//                        position: position,
//                        map: map,
//                        title: loc
//                    });
//
//                    google.maps.event.addListener(marker, 'click', (function (marker, i) {
//                        return function () {
//                            infoWindow.setContent(infoWindowContent[i][0]);
//                            infoWindow.open(map, marker);
//                        }
//                    })(marker, i));
//
//                    map.fitBounds(bounds);
//                }
//
//                var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
//                    this.setZoom(3);
//                    google.maps.event.removeListener(boundsListener);
//                });
//
//
//
//            }
//        })
//
//
//
//    }






//function initialize() {
//    var map;
//    var bounds = new google.maps.LatLngBounds();
//    var mapOptions = {
//        mapTypeId: 'roadmap'
//    };
//           var markers = []          
//    // Display a map on the page
//    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
//    map.setTilt(45);
//        $.ajax({
//        url: 'index/langlat',
//        method: 'post',
//        success:function(d){
//            var data = JSON.parse(d);
//            var i;
//            for (i=0; i<data.length; i++){
//                
////            markers.push(['Hyderabad', +data[i]._latitude_+','+data[i]._latitude_])
//            }
////            console.log(markers);
//        }
//    })
////     Multiple Markers
////     markers = [
////        ['Hyderabad', 17.3660, 78.4760]
//////        ['Palace of Westminster, London', 51.499633,-0.124755]
////    ];
//                        console.log(markers);
//    // Info Window Content
//    var infoWindowContent = [
//        ['<div class="info_content">' +
//        '<h3>Hyderabad</h3>' +
//        '<p></p>' + '</div>']
//    ];
//        
//    // Display multiple markers on a map
//    var infoWindow = new google.maps.InfoWindow(), marker, i;
//    
//    // Loop through our array of markers & place each one on the map  
//    for( i = 0; i < markers.length; i++ ) {
//        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
//        bounds.extend(position);
//        marker = new google.maps.Marker({
//            position: position,
//            map: map,
//            title: markers[i][0]
//        });
//        
//        // Allow each marker to have an info window    
//        google.maps.event.addListener(marker, 'click', (function(marker, i) {
//            return function() {
//                infoWindow.setContent(infoWindowContent[i][0]);
//                infoWindow.open(map, marker);
//            }
//        })(marker, i));
//
//        // Automatically center the map fitting all markers on the screen
//        map.fitBounds(bounds);
//    }
//
//    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
//    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
//        this.setZoom(14);
//        google.maps.event.removeListener(boundsListener);
//    });
//    
//}














});

