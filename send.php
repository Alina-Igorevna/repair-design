<?php

$formName = $_POST['nameForm'];
$userName =  $_POST['UserName'];
$usereMail = $_POST['UserEmail'];
$userPhone = $_POST['UserPhone'];
$userQuestion = $_POST['UserQuestion'];





// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'makhnovaalina@gmail.com';                     // SMTP username
    $mail->Password   = 'alessanafanya';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('makhnovaalina@gmail.com', 'Алина');
    $mail->addAddress('alindlay@yandex.ru');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';

    if ($formName == 'modal_Form'){
      $mail->Body    = "Пользователь заказал звонок. Имя пользователя: ${userName}, его телефон: ${userPhone}. Его почта: ${usereMail}";
    }
    else if($formName == 'control_Form'){ 
      $mail->Body    = "Имя пользователя: ${userName}, его телефон: ${userPhone}";
    } 
    else if($formName == 'measurement_Form'){ 
      $mail->Body    = "Пользователь желает вызвать замерщика. Имя пользователя: ${userName}, его телефон: ${userPhone}. Его почта: ${usereMail}";
    } else 
    {$mail->Body   = "Поступил вопрос от пользователя. Имя пользователя: ${userName}, его телефон: ${userPhone}. Его сообщение: ${userQuestion}";}
    
    if ($mail->send()) {
      echo "ok";
    } else {
      echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }
    
    
} catch (Exception $e) {
  echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}