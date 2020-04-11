<?php
/******************************************************************************
 *                                                                     *
 *     (c) 2010-2020 Valentin Alexo                                           *
 *     Веб адрес: https://www.valexo.ru                                       *
 *     Email: info@valexo.ru                                                  *
 *                                                                            *
 * Это коммерческое программное обеспечение!                                  *
 * Только пользователи, которые приобрели действительную лицензию             *
 *  и согласились с условиями лицензионного соглашения могут                  *
 *  использовать эту программу.                                               *
 * ***********************************************************************    *
 * Данный файл защищен авторскими правами. Пожалуйста прочтите полный         *
 * текст лицензионного соглашения который находится в файле copyright.txt     *
 ******************************************************************************/
header('Content-type: text/html; charset=utf-8');
$ini = parse_ini_file('config.ini'); 
if (!$ini) {
	echo 'Ошибка в конфигурационном файле'; die();
}

// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "Нет аргументов!";
	return false;
   }
	
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
	
// Create the email and send the message
$to = $ini['request_email'];
$email_subject = "Сообщение с сайта ".$ini['company_name']." от :  $name";
$email_body = "Вы получили новое сообщение с вашего сайта Valexo.\n\n"."Вот подробности:\n\nИмя: $name\n\nEmail: $email_address\n\nТелефон: $phone\n\nСообщение:\n$message";
$headers = "From: $email_address\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>