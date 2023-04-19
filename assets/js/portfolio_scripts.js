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
     Portfolio
     ----------------------------------------------------------------------
     */

    // Instantiate MixItUp:
    $('#portfolio-grid').mixItUp();

    $('#portfolio-grid').on('mixEnd', function(e, state){
        console.log("event mixEnd activeFilter="+state.activeFilter);
        $(".fancybox").attr("rel", "");
        $(state.activeFilter+" a").attr("rel", "visiblegallery");
    });
    
    

    $('#portfolio-grid').on('mixEnd', function (e, state) {
        var n = state.$show.length;
        var ourClass = state.$show;
        $('.mix').removeClass('active-mix');
        $('.mix').removeClass('active-mix-first');
        $(ourClass[0]).addClass('active-mix-first');
        for (var i = 0; i < n; i++) {
            $(ourClass[i]).addClass('active-mix');
        }
    });

    $('.fancybox').fancybox({
        prevEffect: 'true',
        nextEffect : 'true',
        padding:0
    });


    $(".portfolio-item").each(function(i) {
        $(this).find("a.view-work").attr("href", "#work-" + i);
        $(this).find(".podrt-desc").attr("id", "work-" + i);
    });

}); // End $(document).ready(function(){