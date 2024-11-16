<?php
// contact.php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize input to prevent injection
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    if (!$name || !$email || !$message) {
        echo "Invalid input. Please fill in all fields correctly.";
        exit;
    }

    // Email configuration
    $to = "sylivanusmomanyi@gmail.com"; // Your email address
    $subject = "New Contact Message from Silva MD Bot";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    // Attempt to send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you, $name! Your message has been sent successfully.";
    } else {
        echo "Failed to send your message. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>
