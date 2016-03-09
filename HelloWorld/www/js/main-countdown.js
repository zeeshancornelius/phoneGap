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
     3. Countdown
     4. Newsletter JS
*/

/* ------------------------------------- */
/* 1. Opening effect ................... */
/* ------------------------------------- */

// Effect item list and removing of the overlay
$(window).load(function() {

    setTimeout(function() {
        $('.loading').removeClass("").addClass('fadeOut');
    }, 400); 
    setTimeout(function() {
        $('.loading').removeClass("").addClass('display-none');
    }, 1800);  

});

/* ------------------------------------- */
/* 2. Anchor ........................... */
/* ------------------------------------- */

$(document).ready(function($){
	
    // Anchor click chevron
    $('button.scroll-chevron').on('click', function(){
        $('body').animate({'scrollTop':$(window).height() -150}, 500);
    });

/* ------------------------------------- */
/* 3. Countdown ........................ */
/* ------------------------------------- */

    // Set you end date just below
    $('#countdown_dashboard').countDown({
        targetDate: {
            'day':      30,
            'month':    12,
            'year':     2016,
            'hour':     11,
            'min':      13,
            'sec':      0
        },
        omitWeeks: true
    }); 

/* ------------------------------------- */
/* 4. Newsletter JS .................... */
/* ------------------------------------- */

    // Plugin for the newsletter
    $("#notifyMe").notifyMe();

});