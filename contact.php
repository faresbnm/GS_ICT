<script src="sweetAlert.js"></script> 
<?php
$connection = new mysqli("localhost", "root", "GSICT", "gs_ict_db");


$fullName = $_POST['full_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$sql = "INSERT INTO contacts_db (fullname, email, phone_number, message) VALUES (?,?,?,?)";
$state = mysqli_stmt_init($connection);

if (mysqli_stmt_prepare($state, $sql)){
    header('location: success.html'); 
}else{
    die(mysqli_error($connection));
}

mysqli_stmt_bind_param($state, "ssis", $fullName, $email, $phone, $message);
mysqli_stmt_execute($state);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if (isset($_POST['sub'])){
    $mail = new PHPMailer(true);
    //Server settings
    $mail->isSMTP();                                           
    $mail->Host       = 'smtp.gmail.com';                     
    $mail->SMTPAuth   = true;                                   
    $mail->Username   = 'contact.gs.ict@gmail.com';                    
    $mail->Password   = 'vymobflcmqpwciog';                            
    $mail->SMTPSecure = 'ssl';    
    $mail->Port       = 465;  


    $mail->setFrom($email);
    $mail->addAddress('contact.gs.ict@gmail.com');
    
    $mail->isHTML(true);                                 
    $mail->Subject = $fullName;
    $mail->Body    = "name:  $fullName <br> email:  $email <br> phone: $phone <br> message
    : $message";

    $mail->send();

}


?>
