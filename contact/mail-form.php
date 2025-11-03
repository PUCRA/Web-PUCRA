<?php
session_start();

$delaySegundos = 5;

if (isset($_SESSION['ultimo_envio']) && time() - $_SESSION['ultimo_envio'] < $delaySegundos) {
    die("Demasiado rápido, espera unos segundos antes de enviar de nuevo.");
}

$_SESSION['ultimo_envio'] = time();

sleep(2);
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "pucra.eebe@upc.edu";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: contact@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:index.html");
?>