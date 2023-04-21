<?php 
$s1=$_POST['n1'];
$s2=$_POST['n2'];
$s3=$_POST['n3'];
$s4=$_POST['n4'];
$s5=$_POST['n5'];
$s6=$_POST['n6'];
$s6=$_POST['n7'];
include 'include/dbconn.php';
$con=dbconnect();
$query="insert into sign(First,Last,dob,Email,contact,password,address) values('$s1','$s2','$s3','$s4','$s5','$s6','$s7')";
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