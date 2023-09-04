<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Email recipient (your email address)
    $to = "kareemyoussry@outlook.com";

    // Email subject
    $subject = "Contact Form Submission from $name";

    // Email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message";

    // Additional headers
    $headers = "From: $email\n";

    // Send the email
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Thank you for contacting us! We will get back to you soon.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    // If the form wasn't submitted, redirect to the contact page
    header("Location: contact.html");
    exit;
}
?>
