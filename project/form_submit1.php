<?php 
$s1=$_POST['n1'];
$s2=$_POST['n2'];

include 'include/dbconn.php';
$con=dbconnect();
$query="insert into photography(
Email,password) values('$s1','$s2')";
$q1=mysqli_query($con,$query);
if ($q1) 
{
  header('location:home.php?inserted=success');
}
else
{
header('location:home.php?noinserted=unsuccess');	
}
?>