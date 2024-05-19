<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $phone = $_POST["phone"];

    $to = "support@onlineacademichelper.com";
    $subject = "New Form Submission";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    $body = "Name: $name\nEmail: $email\nMessage:\n$message \nPhone: $phone";

    if (mail($to, $subject, $body, $headers)) {
        // Redirect to thanks.html
        header("Location: thanks.html");
        exit(); // Make sure to exit to prevent further execution
    } else {
        echo "Oops! Something went wrong.";
    }
}
?>
