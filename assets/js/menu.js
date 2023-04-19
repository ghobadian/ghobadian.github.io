/*
 Author: Ukieweb
 Template: ukieCard
 Version: 1.8.1
 URL: http://themeforest.net/user/UkieWeb
 */


$(document).ready(function(){

    var $shareButtons = $(".icons-menu-button"),
        $toggleButton = $(".icons-menu-toggle-button"),
        menuOpen = false,
        buttonsNum = $shareButtons.length,
        buttonsMid = 0,
        spacing = 85;

    function openShareMenu(){
        TweenMax.to($toggleButton,0.1,{
            scaleX:1.2,
            scaleY:0.6,
            ease:Quad.easeOut,
            onComplete:function(){
                TweenMax.to($toggleButton,.8,{
                    scale:0.9,
                    ease:Elastic.easeOut,
                    easeParams:[1.1,0.9]
                })
                TweenMax.to($toggleButton.children(".icons-menu-icon"),.8,{
                    scale:1.4,
                    ease:Elastic.easeOut,
                    easeParams:[1.1,0.9]
                })
            }
        });
        $shareButtons.each(function(i){
            var $cur = $(this);
            var pos = i - buttonsMid;
            if( pos >= 0 ) pos += 1;
            var dist = Math.abs(pos);
            $cur.css({
                zIndex:Math.abs(buttonsMid-dist)
            });
            TweenMax.to($cur,1.1*(dist),{
                x:pos*spacing,
                scaleY:0.9,
                scaleX:1.1,
                ease:Elastic.easeOut,
                easeParams:[1.01,0.9]
            });
            TweenMax.to($cur,.8,{
                delay:(0.2*(dist))-0.1,
                scale:0.9,
                ease:Elastic.easeOut,
                easeParams:[1.1,0.9]
            })

            TweenMax.fromTo($cur.children(".icons-menu-icon"),0.2,{
                scale:0
            },{
                delay:(0.2*dist)-0.1,
                scale:1,
                ease:Quad.easeInOut
            })
        });
    }
    function closeShareMenu(){
        TweenMax.to([$toggleButton,$toggleButton.children(".icons-menu-icon")],1.4,{
            delay:0.1,
            scale:1,
            ease:Elastic.easeOut,
            easeParams:[1.1,0.3]
        });
        $shareButtons.each(function(i){
            var $cur=$(this);
            var pos=i-buttonsMid;
            if(pos>=0) pos+=1;
            var dist=Math.abs(pos);
            $cur.css({
                zIndex:dist
            });

            TweenMax.to($cur,0.4+((buttonsMid-dist)*0.1),{
                x:0,
                scale:.95,
                ease:Quad.easeInOut
            });

            TweenMax.to($cur.children(".icons-menu-icon"),0.2,{
                scale:0,
                ease:Quad.easeIn
            });
        })
        $(".small-menu .arrow").show();
    }

    function toggleShareMenu(){
        menuOpen=!menuOpen;

        menuOpen?openShareMenu():closeShareMenu();
    }
    $toggleButton.on("mousedown",function(){
        $(".small-menu .arrow").hide();
        toggleShareMenu();
    })

});