<?php
switch ($_SERVER['REQUEST_METHOD']) {
    case "OPTIONS":
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;

    case "POST":
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents("php://input");
        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $userMessage = $params->message;

        $recipient = "mail@tobiasdreifke.com";
        $subject = "Contact Form <$email>";
        $message = "From: " . htmlspecialchars($name) . "<br>" . nl2br(htmlspecialchars($userMessage));

        $headers   = [];
        $headers[] = "MIME-Version: 1.0";
        $headers[] = "Content-type: text/html; charset=utf-8";
        $headers[] = "From: noreply@tobiasdreifke.com";

        mail($recipient, $subject, $message, implode("\r\n", $headers));

        echo "OK";
        break;

    default:
        header("Allow: POST", true, 405);
        exit;
}
