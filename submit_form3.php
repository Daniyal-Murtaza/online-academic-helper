<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];
    
    $to = "support@onlineacademichelper.com";
    $subject = "New Form Submission";
    $headers = "From: $email";
    
    $emailContent = "Name: $name\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Phone: $phone\n";
    $emailContent .= "Message:\n$message\n";
    
    if (mail($to, $subject, $emailContent, $headers)) {
        header("Location: thanks.html");
    } else {
        echo "There was an error submitting the form. Please try again later.";
    }
}
?>
