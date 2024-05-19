<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $fullname = $_POST["fullname"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    
    // Validate data (you can add more validation if needed)
    if (empty($fullname) || empty($phone) || empty($email)) {
        echo "Please fill out all the required fields.";
        exit;
    }
    
    // Set recipient email address
    $to = "support@onlineacademichelper.com";
    
    // Set email subject
    $subject = "New Form Submission from Online Academic Helper";
    
    // Build email message
    $message = "Full Name: $fullname\n";
    $message .= "Contact Number: $phone\n";
    $message .= "Email: $email\n\n";
    
    // Set email headers
    $headers = "From: webmaster@example.com"; // You can modify the "From" email address
    
    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        header("Location: thanks.html");
    } else {
        echo "There was a problem submitting the form. Please try again later.";
    }
}
?>
