<?php

    // Here we get all the information from the fields sent over by the form.
    $name = $_REQUEST['user-name'];
    $email = $_REQUEST['user-email'];
    $message = ( $_REQUEST['user-message'] ) ? $_REQUEST['user-message'] : '';
    $status = $_REQUEST['user-status'];

    $to = 'msghobadian80@gmail.com';
    $message = 'Name: '.$name.'<br /> Email: '.$email.'<br />Message: '.$message;

    $subject = 'Subject';

    $headers = "From: You company <".$to.">". "\r\n" .
                  "Return-Path: You company <info@yousite.com>\r\n".
                  "Reply-To: You company <".$to.">" . "\r\n" .
                  "MIME-Version: 1.0\r\n".
                  "Content-type: text/html; charset=iso-8859-1\r\n".
                  "X-Priority: 3\r\n" .
                  'X-Mailer: PHP/' . phpversion();

    if (filter_var($email, FILTER_VALIDATE_EMAIL) && $status == "yes" ) { // shis line checks that we have a valid email address
        mail($to, $subject, $message, $headers); // this method sends the mail.
        echo "success"; // success message
        exit;
    }else{
        echo "error"; //error
    }

?>