/*
 Author: Ukieweb
 Template: ukieCard
 Version: 1.8.1
 URL: http://themeforest.net/user/UkieWeb
 */


$(document).ready(function () {

    "use strict";



    /*
     ----------------------------------------------------------------------
     Forms
     ----------------------------------------------------------------------
     */

    /* Email validation */
    function valid_email_address(email) {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        return pattern.test(email);
    }

    /*
     ----------------------------------------------------------------------
     Contact form validation
     ----------------------------------------------------------------------
     */

    $("#submit-btn").on("click", function () {
        $("#user-status").val("yes");
    });

    $("#contact-form").on('submit', function () {


        if (!valid_email_address($("#user-email").val()) || $("#user-name").val().length <= 2) {

            if (!valid_email_address($("#user-email").val())) {
                $("#user-email").addClass("error");
            }
            if ($("#user-name").val().length <= 2) {
                $("#user-name").addClass("error");
            }

        } else {

            var data_of_form = $(this).serialize();

            $.ajax({
                url: 'assets/php/contact.php',
                data: data_of_form,
                type: 'POST',
                success: function (data) {
                    if (data == "success") {
                        $("#user-name").val("");
                        $("#user-email").val("");
                        $("#user-message").val("");

                        $(".info-message-form p").text("Message sent!");
                        $(".info-message-form").addClass('success');
                        setTimeout(
                            function () {
                                $(".info-message-form").removeClass('success');
                                $(".info-message-form p").text("");
                            }, 5000
                        );
                    } else {
                        $(".info-message-form p").text("Error");
                        $(".info-message-form").addClass('error');
                        setTimeout(
                            function () {
                                $(".info-message-form").removeClass('error').fadeOut(500);
                                $(".info-message-form p").text("");
                            }, 5000
                        );
                    }
                },
                error: function () {
                    alert("te1");
                    $(".info-message-form p").text("Error");
                    $(".info-message-form").addClass('error');
                    setTimeout(
                        function () {
                            $(".info-message-form").removeClass('error');
                            $(".info-message-form p").text("");
                        }, 5000
                    );
                }
            });

        }

        return false;
    });

    $(".close-msg").on("click", function () {
        $(this).parent().removeClass("error");
    });

    $("#user-name, #user-email").on("click", function () {

        $(this).removeClass("error");

    });

    /*
     ----------------------------------------------------------------------
     Contact form panel validation
     ----------------------------------------------------------------------
     */

    $("#submit-btn-panel").on("click", function () {
        $("#user-status-panel").val("yes");
    });

    $("#contact-form-panel").on('submit', function () {


        if (!valid_email_address($("#user-email-panel").val()) || $("#user-name-panel").val().length <= 2) {

            if (!valid_email_address($("#user-email-panel").val())) {
                $("#user-email-panel").addClass("error");
            }
            if ($("#user-name-panel").val().length <= 2) {
                $("#user-name-panel").addClass("error");
            }

        } else {

            var data_of_form = $(this).serialize();

            $.ajax({
                url: 'assets/php/contact.php',
                data: data_of_form,
                type: 'POST',
                success: function (data) {
                    if (data == "success") {
                        $("#user-name-panel").val("");
                        $("#user-email-panel").val("");
                        $("#user-message-panel").val("");

                        $(".info-message-form p").text("Message sent!");
                        $(".info-message-form").addClass('success');
                        setTimeout(
                            function () {
                                $(".info-message-form").removeClass('success');
                                $(".info-message-form p").text("");
                            }, 5000
                        );
                    } else {
                        $(".info-message-form p").text("Error");
                        $(".info-message-form").addClass('error');
                        setTimeout(
                            function () {
                                $(".info-message-form").removeClass('error').fadeOut(500);
                                $(".info-message-form p").text("");
                            }, 5000
                        );
                    }
                },
                error: function () {
                    alert("te1");
                    $(".info-message-form p").text("Error");
                    $(".info-message-form").addClass('error');
                    setTimeout(
                        function () {
                            $(".info-message-form").removeClass('error');
                            $(".info-message-form p").text("");
                        }, 5000
                    );
                }
            });

        }

        return false;
    });

    $(".close-msg").on("click", function () {
        $(this).parent().removeClass("error");
    });

    $("#user-name-panel, #user-email-panel").on("click", function () {

        $(this).removeClass("error");

    });


}); // End $(document).ready(function(){

/*
 ----------------------------------------------------------------------
 Map
 ----------------------------------------------------------------------
 */


var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 39.987686, lng: -82.970916},
        zoom: 8,
        scrollwheel: false
    });

    var image = './assets/img/marker-' + $('#stylesheet-new').attr('data-color') + '.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 39.987686, lng: -82.970916},
        map: map,
        title: 'UkieWeb',
        icon: image
    });

}
