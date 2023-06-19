<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['b_name'];
    $email = $_POST['b_email'];
    $number = $_POST['b_num'];
    $message = $_POST['b_msg'];

    // Validate and sanitize the input data
    $name = filter_var($name, FILTER_SANITIZE_STRING);
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $number = filter_var($number, FILTER_SANITIZE_NUMBER_INT);
    $message = filter_var($message, FILTER_SANITIZE_STRING);

    // Create the email message
    $to = 'support@onlineacademichelper.com';
    $subject = 'New form submission';
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Number: $number\n";
    $body .= "Message: $message\n";
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        // Email sent successfully
    echo '<script type="text/javascript">
            window.alert("Email sent successfully!");
            window.location.href = "index.html"; // Redirect to another page if needed
          </script>';
    } else {
    echo '<script type="text/javascript">
            window.alert("Failed to send email.");
            window.history.back(); // Go back to the previous page
          </script>';
    }
}
?>
