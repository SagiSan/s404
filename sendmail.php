<?php
require_once 'vendor/autoload.php';

$mail = new PHPMailer();

$mail->SMTPDebug = 3;
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'solution404mailer@gmail.com';
$mail->Password = 'sagihacker';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;
$mail->setFrom('solution404mailer@gmail.com', 'Solution404 Mailer');
$mail->addAddress('symorgh@solution404.io');
$mail->Subject = 'Pitanje sa stranice';
$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['msg'];
$mail->Body = "Ime: $name\nE-Mail: $email\n\n$msg";

if(!$mail->send()){
    http_response_code(400);
    echo "$mail->ErrorInfo";
} else {
    http_response_code(200);
    echo 'ok';
}