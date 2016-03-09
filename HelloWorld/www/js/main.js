/*
* W&W - Futuristic Coming Soon Template
* Build Date: March 2015
* Author: Madeon08
* Copyright (C) 2015 Madeon08
* This is a premium product available exclusively on http://themeforest.net
*/

/*  TABLE OF CONTENTS
    ---------------------------
     1. Opening effect
     2. Anchor
     3. Section Opening
     4. Transition sections
     5. Newsletter
     6. Countdown
     7. Map, Structure & Design
*/

/* ------------------------------------- */
/* 1. Opening effect ................... */
/* ------------------------------------- */

// Effect item list and removing of the overlay
$(window).load(function() {

    setTimeout(function() {
        $('.item-list').each(function(i) {
        (function(self) {
            setTimeout(function() {
                $(self).addClass('show-ready');
            },(i*150)+150);
            })(this);
        });
    }, 250);

    setTimeout(function() {
        $('.overlay-prevent').removeClass("").addClass('display-none');
    }, 600);     
});

/* ------------------------------------- */
/* 2. Anchor ........................... */
/* ------------------------------------- */

$(document).ready(function($){
	
    // Anchor click chevron
    $('button.scroll-chevron').on('click', function(){
        $('.mfp-wrap').animate({'scrollTop':$(window).height() -100}, 500);
    });

/* ------------------------------------- */
/* 3. Section Opening .................. */
/* ------------------------------------- */

    $('.open-popup-link').magnificPopup({
      type:'inline',
      // Delay in milliseconds before popup is removed
      removalDelay: 300,
      showCloseBtn: false,

      // Class that is added to popup wrapper and background
      mainClass: 'animated-middle fade-entrance'
    });

    // Temp fix for magnific popup close issue
    $(document).on('click', '.mfp-close', function (e) {
        e.preventDefault();
        $('.mfp-bg , .mfp-wrap').removeClass("fadeIn").addClass('fadeOutDown');
        setTimeout(function(){ 
        $.magnificPopup.close();
        }, 1000);
    });	

/* ------------------------------------- */
/* 4. Transition sections .............. */
/* ------------------------------------- */
    
    $('a.open-popup-link').click(function(){
        $('#nav-item').removeClass("fadeOutUp opacity-0").addClass('fadeInDown index9999');
        $('.list-sections').removeClass("").addClass('fadeOutDown');
        setTimeout(function(){ 
            $('.item-list').removeClass("show-ready").addClass('');
        }, 800);
    });

    $('button.mfp-close').click(function(){
        $('#nav-item').removeClass("fadeInDown").addClass('fadeOutUp');
        setTimeout(function(){ 
            $('#nav-item').removeClass("index9999").addClass('');
            $('.list-sections').removeClass("fadeOutDown").addClass('');

            $('.item-list').each(function(i) {
            (function(self) {
                setTimeout(function() {
                    $(self).addClass('show-ready');
                },(i*150)+150);
                })(this);
            });

         }, 600);
    });

/* ------------------------------------- */
/* 5. Newsletter ....................... */
/* ------------------------------------- */

    // Plugin for the newsletter core
    $("#notifyMe").notifyMe();

/* ------------------------------------- */
/* 6. Countdown ........................ */
/* ------------------------------------- */

    // Set your end date just below
    $('#countdown_dashboard').countDown({
        targetDate: {
            'day':      30,
            'month':    04,
            'year':     2016,
            'hour':     11,
            'min':      13,
            'sec':      0
        },
        omitWeeks: true
    }); 
});

/* ------------------------------------- */
/* 7. Map, Structure & Design .......... */
/* ------------------------------------- */

 // When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', init);

function init() {

    // Basic options for a simple Google Map
    // The latitude and longitude to center the map (always required)
    var center = new google.maps.LatLng(-33.92, 151.25);
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,
        scrollwheel: false,
        draggable: true,
        center: center,
        
        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
        
            {
                "featureType": "administrative.locality",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": 7
                    },
                    {
                        "lightness": 19
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#2c3e50"
                    },
                    {
                        "weight": "0.01"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#ffffff"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#ffffff"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 100
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#bbc0c4"
                    },
                    {
                        "saturation": -93
                    },
                    {
                        "lightness": 31
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "hue": "#bbc0c4"
                    },
                    {
                        "saturation": -93
                    },
                    {
                        "lightness": 31
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                    {
                        "hue": "#bbc0c4"
                    },
                    {
                        "saturation": -93
                    },
                    {
                        "lightness": -2
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#e9ebed"
                    },
                    {
                        "saturation": -90
                    },
                    {
                        "lightness": -8
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#e9ebed"
                    },
                    {
                        "saturation": 10
                    },
                    {
                        "lightness": 69
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#e9ebed"
                    },
                    {
                        "saturation": -78
                    },
                    {
                        "lightness": 67
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            }
        ]
    };
    
    var map = new google.maps.Map(document.getElementById('map'), mapOptions, center);
            
    var locations = [
        ['<h6>Bondi Beach, East Coast</h6><p>This is where we are currently, the sun goes down...<br><i class="fa fa-coffee"></i> Visit us, we pay the coffee!</p>', -33.890542, 151.274856, 4],
        ['<h6>Coogee Beach, East Coast</h6><p>Opening Hours<br><i class="fa fa-clock-o"></i> 8:00 to 22:00</p>', -33.923036, 151.259052, 5],
        ['<h6>Cronulla Beach, East Coast</h6><p>Opening Hours<br><i class="fa fa-clock-o"></i> 10:00 to 20:00</p>', -34.028249, 151.157507, 3],
        ['<h6>Manly Beach, East Coast</h6><p>Opening Hours<br><i class="fa fa-clock-o"></i> 6:00 to 14:00</p>', -33.80010128657071, 151.28747820854187, 2],
        ['<h6>Maroubra Beach, East Coast</h6><p>Opening Hours<br><i class="fa fa-clock-o"></i> 12:00 to 23:30</p>', -33.950198, 151.259302, 1]
    ];

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
      
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });  

    $('a#map-init').click(function(){
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center); // var center = new google.maps.LatLng(-33.92, 151.25);
    });   
}