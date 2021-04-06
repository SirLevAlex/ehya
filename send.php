
<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$tmail=$_POST['mail'];
$message = $_POST['message'];
$comment = $_POST['comment'];

// Формирование самого письма
if (isset($_POST['btnNew'])) {
  $title = "Ehya подписка";
  $body = "
  <h2>Новый подписчик</h2>
  <b>Email:</b> $tmail<br>
  "; 
} else if (isset($_POST['btnMod'])) {
  $title = "Новое сообщение Ehya";
  $body = "
  <h2>Новое сообщение</h2>
  <b>Name:</b> $name<br>
  <b>Phone:</b> $phone<br>
  <b>Email:</b> $email<br>
  <b>Message:</b><br>$message
  ";
} else if (isset($_POST['btnComment'])) {
    $title = "Новый комментарий Ehya";
  $body = "
  <h2>Новый комментарий</h2>
  <b>Comment:</b> $comment<br>
  "; 
}
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;
  // $mail->SMTPDebug = 2;
  $mail->Debugoutput = function ($str, $level) {
    $GLOBALS['status'][] = $str;
  };

  // Настройки вашей почты
  $mail->Host       = 'mail.levanboryan.ru'; // SMTP сервера вашей почты
  $mail->Username   = 'besttour@levanboryan.ru'; // Логин на почте
  $mail->Password   = ''; // Пароль на почте
  $mail->SMTPAutoTLS = false;
  $mail->SMTPSecure = false;
  $mail->Port       = 25;
  $mail->setFrom('besttour@levanboryan.ru', 'Levan Boryan'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('boss.lary@mail.ru');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  // Проверяем отравленность сообщения
  if ($mail->send()) {
    $result = "success";
  } else {
    $result = "error";
  }
} catch (Exception $e) {
  $result = "error";
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

if (isset($_POST['btnNew'])) {
  header('Location: subscribe.html');
} else if (isset($_POST['btnMod'])) {
  header('Location: thankyou.html');
} else if (isset($_POST['btnComment'])) {
  header('Location: comment.html');
}