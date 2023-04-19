/*
 Author: Ukieweb
 Template: ukieCard
 Version: 1.8.1
 URL: http://themeforest.net/user/UkieWeb
 */

$(document).ready(function(){

    "use strict";

    /*
     ----------------------------------------------------------------------
     Menu-navigation
     ----------------------------------------------------------------------
     */

    if ($("#contents").hasClass("contents")) {
        jQuery(function ($) {

            $(document).ready(function () {
                $('.navbar-wrapper').stickUp({
                    parts: {
                        0: 'navhome',
                        1: 'navprofile',
                        2: 'navresume',
                        3: 'navportfolio',
                        4: 'navblog',
                        5: 'navcontact'
                    },
                    itemClass: 'menuItem',
                    itemHover: 'active',
                    topMargin: 'auto'
                });
            });

        });
    }


    $('.navigation-top').hide();
    $(function () {
        $(window).scroll(function (event) {
            if($(window).width() < 1231) {
                var hscrollTop = 523
            } else {
                var hscrollTop = 630
            }
            if ($(this).scrollTop() > hscrollTop) {
                $('.navigation-top').show();
                $('.navigation-top').fadeIn();
                $('.navigation-top').addClass('fixed');
            }
            else {
                $('.navigation-top').removeClass('fixed');
                $('.navigation-top').fadeOut();
                $('.navigation-top').hide();
            }
        });

    });

    var linkNav = document.querySelectorAll('[href^="#nav"]'),
        V = 1000;
    for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].onclick = function (event) {
            event.preventDefault();
            if($(window).width() < 769) {
                var hscroll = 0
            } else {
                var hscroll = 50
            }
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top - hscroll}, V);
        }
    }
    /*
     ----------------------------------------------------------------------
     Animated menu
     ----------------------------------------------------------------------
     */


    $(".menu .menu-img").on({
        mouseenter: function(){
            var $div = $(this);
            var img = document.createElement('img');
            var img_name = $div.attr("data-img-name");
            img.src = "./assets/img/menu/" + img_name + ".gif?t=" + new Date().getTime();

            $(img).load(function(){
                $div.attr("src",img.src);
            });
        },
        mouseleave: function () {
            var $div = $(this);
            var img_name = $div.attr("data-img-name");
            var src = "./assets/img/menu/" + img_name + ".png";
            $div.attr("src",src);

        }});


    /*
     ----------------------------------------------------------------------
     Preloader
     ----------------------------------------------------------------------
     */
    $(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");


    /*
     ----------------------------------------------------------------------
     Scroll
     ----------------------------------------------------------------------
     */
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').on('click', function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });




    /*
     ----------------------------------------------------------------------
     Animation
     ----------------------------------------------------------------------
     */
    $('.animated').appear(function() {
        var elem = $(this);
        var animation = elem.data('animation');
        if ( !elem.hasClass('visible') ) {
            var animationDelay = elem.data('animation-delay');
            if ( animationDelay ) {
                setTimeout(function(){
                    elem.addClass( animation + " visible" );
                }, animationDelay);
            } else {
                elem.addClass( animation + " visible" );
            }
        }
    });


   
    /*
     ----------------------------------------------------------------------
     Progress Bars
     ----------------------------------------------------------------------
     */
    $('.progress-bar').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).css('width',  function() {
                return ($(this).attr('aria-valuenow')+'%');
            });
        }
    });


    $('.dial').on('inview', function (event, isInView) {
        if (isInView) {
            var $this = $(this);
            var myVal = $this.attr("value");
            //var color = $this.attr("data-color"); // Uncomment after color selection
            var color = $.cookie("colour-skills"); // Delete after color selection
            $this.knob({
                readOnly: true,
                width: 160,
                height: 160,
                rotation: 'clockwise',
                thickness: .3,
                inputColor: color,
                bgColor: '#ffffff',
                fgColor: color,
                'draw' : function () {
                    $(this.i).val(this.cv + '%')
                }
            });
            $({
                value: 0
            }).animate({
                value: myVal
            }, {
                duration: 1000,
                easing: 'swing',
                step: function() {
                    $this.val(Math.ceil(this.value)).trigger('change');
                }
            });
        }
        $(this).unbind( event );

    });

    /*
     ----------------------------------------------------------------------
     Sliders
     ----------------------------------------------------------------------
     */
    $("#education-slider").owlCarousel({

        navigation : true, // Show next and prev buttons
        navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        pagination: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });

    $("#work-slider").owlCarousel({

        navigation : true, // Show next and prev buttons
        navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        pagination: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true

    });

    /*--------- Clients slider -------------*/
    var owl = $("#owl-clients");

    owl.owlCarousel({
        itemsCustom : [
            [0, 1],
            [450, 1],
            [600, 2],
            [700, 2],
            [991, 3],
            [1200, 4],
            [1400, 4],
            [1600, 4]
        ],
        navigation : true,
        navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    });

    $('.owl-pagination').fadeOut();

   /*--------- Testimonials slider -------------*/

    $('.flexslider').flexslider({
        animation: "fade",
        slideshow:false
    });



    /*
     ----------------------------------------------------------------------
     Animated Counter
     ----------------------------------------------------------------------
     */
    $('.count').each(function () {
        $(".total-numbers .sum").appear(function() {
            var counter = $(this).html();
            $(this).countTo({
                from: 0,
                to: counter,
                speed: 2000,
                refreshInterval: 60
            });
        });
    });


    /*
     ----------------------------------------------------------------------
     Style contact form
     ----------------------------------------------------------------------
     */

    $('.style-open-form').on("click", function(el){
        el.preventDefault();
        $('.style-contact-form').toggleClass('style-off-form');
    });

    $('.btn-close-form').on("click", function(el){
        el.preventDefault();
        $('.style-contact-form').toggleClass('style-off-form');
    });

    $(".ratyli").ratyli();

    /*
     ----------------------------------------------------------------------
     Calendar
     ----------------------------------------------------------------------
     */

    if ($("#calendar").hasClass("fc-calendar-container")) {

        $("#calendar").calendario();


        var codropsEvents = {
            '09-01-2016': '<span>Day of Knowledge</span>',
            '09-05-2016': '<span>Day of Knowledge</span>',
            '09-10-2016': '<span>Day of Knowledge</span>',
            '09-23-2016': '<span>Day of Knowledge</span>',
            '10-01-2016': '<span>Day of Knowledge</span>',
            '10-05-2016': '<span>Day of Knowledge</span>',
            '10-10-2016': '<span>Day of Knowledge</span>',
            '11-01-2016': '<span>Day of Knowledge</span>',
            '11-05-2016': '<span>Day of Knowledge</span>',
            '11-10-2016': '<span>Day of Knowledge</span>',
            '11-23-2016': '<span>Day of Knowledge</span>',
            '12-01-2016': '<span>Day of Knowledge</span>',
            '12-05-2016': '<span>Day of Knowledge</span>',
            '12-10-2016': '<span>Day of Knowledge</span>',
            '01-01-2017': '<span>Day of Knowledge</span>',
            '01-05-2017': '<span>Day of Knowledge</span>',
            '01-10-2017': '<span>Day of Knowledge</span>',
            '01-23-2017': '<span>Day of Knowledge</span>',
            '02-01-2017': '<span>Day of Knowledge</span>',
            '02-05-2017': '<span>Day of Knowledge</span>',
            '02-10-2017': '<span>Day of Knowledge</span>',
            '03-01-2017': '<span>Day of Knowledge</span>',
            '03-05-2017': '<span>Day of Knowledge</span>',
            '03-10-2017': '<span>Day of Knowledge</span>',
            '03-23-2017': '<span>Day of Knowledge</span>',
            '04-01-2017': '<span>Day of Knowledge</span>',
            '04-05-2017': '<span>Day of Knowledge</span>',
            '04-10-2017': '<span>Day of Knowledge</span>',
            '05-01-2017': '<span>Day of Knowledge</span>',
            '05-05-2017': '<span>Day of Knowledge</span>',
            '05-10-2017': '<span>Day of Knowledge</span>',
            '05-23-2017': '<span>Day of Knowledge</span>'
        };


        var transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            },
            transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
            $wrapper = $('#custom-inner'),
            $calendar = $('#calendar'),
            cal = $calendar.calendario({
                onDayClick: function ($el, $contentEl, dateProperties) {

                    if ($contentEl.length > 0) {
                        showEvents($contentEl, dateProperties);
                    }

                },
                caldata: codropsEvents,
                displayWeekAbbr: true
            }),
            $month = $('#custom-month').html(cal.getMonthName()),
            $year = $('#custom-year').html(cal.getYear());

        $('#custom-next').on('click', function () {
            cal.gotoNextMonth(updateMonthYear);
        });
        $('#custom-prev').on('click', function () {
            cal.gotoPreviousMonth(updateMonthYear);
        });


        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var weekdayhtml = weekday[d.getDay()];
        document.getElementById("week-day").innerHTML = weekdayhtml;

        var dateObj = new Date();
        var month = new Array(12);
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jul";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sep";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";

        var monthhtml = month[dateObj.getUTCMonth()];
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        document.getElementById("day").innerHTML = day;
        document.getElementById("month").innerHTML = monthhtml;
    }
    function updateMonthYear() {
        $month.html(cal.getMonthName());
        $year.html(cal.getYear());
    }

    // just an example..
    function showEvents($contentEl, dateProperties) {

        hideEvents();

        var $events = $('<div id="custom-content-reveal" class="custom-content-reveal"><h4>Events for ' + dateProperties.monthname + ' ' + dateProperties.day + ', ' + dateProperties.year + '</h4></div>'),
            $close = $('<span class="custom-content-close"></span>').on('click', hideEvents);

        $events.append($contentEl.html(), $close).insertAfter($wrapper);

        setTimeout(function () {
            $events.css('top', '0%');
        }, 25);

    }

    function hideEvents() {

        var $events = $('#custom-content-reveal');
        if ($events.length > 0) {

            $events.css('top', '100%');
            Modernizr.csstransitions ? $events.on(transEndEventName, function () {
                $(this).remove();
            }) : $events.remove();

        }

    }

    /*
     ----------------------------------------------------------------------
     Style switcher
     ----------------------------------------------------------------------
     */

    var style = ('#stylesheet-new');
    $('.new-colour').on("click", function(el){
        el.preventDefault();
        var id = $(this).attr('href');

        $.cookie("colour-scheme",id);

        $(style).attr('href', 'assets/css/colour-scheme/' + id + '.css');
        $(style).attr('data-color', colour_scheme);
        $.cookie("colour-skills",$(this).attr('data-color'));
    });

    $('.new-bg').on("click", function(el){
        el.preventDefault();
        var color = $(this).attr('data-bg');

        $.cookie("colour-bg",color);

        $(style).attr('data-bg', color);
        $("body").css('background-color',color);
    });

    $('#box_shadow').on('click', function (el) {

        var shadow_checkbox = $(this).is(':checked');

        if(!shadow_checkbox){
            $.cookie("box-shadow","0px 0px 50px rgba(0, 0, 0, 0.1)");
            $("#wraper").css('box-shadow',"0px 0px 50px rgba(0, 0, 0, 0.1)");
        } else {
            $.cookie("box-shadow","none");
            $("#wraper").css('box-shadow',"none");
        }

    });

    $('.style-open').on("click", function(el){
        el.preventDefault();
        $('.style-switcher').toggleClass('style-off');
    });

    var colour_scheme = $.cookie("colour-scheme");
    var colour_bg = $.cookie("colour-bg");
    var box_shadow = $.cookie("box-shadow");
    if( colour_scheme != "" && colour_scheme != undefined ){
        $(style).attr('href', 'assets/css/colour-scheme/' + colour_scheme + '.css');
        $(style).attr('data-color', colour_scheme);
    } else{
        $.cookie("colour-scheme","color-blue");
    }
    if ( colour_bg != "" && colour_bg != undefined ){
        $("body").css('background-color',colour_bg);
    }

    if ( box_shadow != "" && box_shadow != undefined ){
        $("#wraper").css('box-shadow',box_shadow);

        if(box_shadow=='none'){
            $('#box_shadow').attr('checked','checked');
        }
    }


}); // End $(document).ready(function(){















