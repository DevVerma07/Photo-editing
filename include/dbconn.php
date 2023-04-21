<?php 
 function dbconnect()
 {
/* 
   $servername="localhost";
   $username="root";
   $password="";
   $databasename="ritmanagement";
   $con=mysqli_connect($servername,$username,$password,$databasename);
   syntax-mysqli_connect(servername,username,password,databasename)
   */
   $con=mysqli_connect("localhost","root","","project");
   return $con;
   // if($con)
   // {
   // 	echo "connected";
   // }
   // else
   // {
   // 	echo "not connected";
   // }	
}
function checksession()
{
   session_start();
   if(!$_SESSION['user'])
   {
      header('location:login.php?redirect=yes');
   }
}  
?>