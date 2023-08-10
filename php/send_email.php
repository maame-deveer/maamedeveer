<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $topic = $_POST["topic"];
    $message = $_POST["message"];

    // Set up the email
    $to = "maamelankar.deveer@gmail.com";
    $subject = "$topic";
    $body = "Name: $name\nEmail: $email\n\n$message";
    $headers = "From: $email";

    // Set the SMTP configuration dynamically
    ini_set("SMTP", "localhost");
    ini_set("smtp_port", "25");

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "There was a problem sending the email.";
    }
}
?>