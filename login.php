<?php
$conn = mysql_connect("localhost","root","clara") or die (mysql_error());
$db=mysql_select_db('career',$conn) or die (mysql_error());

if(isset($_POST['submit'])){

	$name=$_POST['username'];
	$pass=$_POST['password'];
	
	if($name==''){
	
		echo "<script>alert('Email Id Incorrect, try again..')</script>";
		exit();
	}
	
	if($pass==''&&$pass.length<7){
	 if ($pass=='')
		echo "<script>alert('Password Incorrect, try again.. !!')</script>";
         if($pass.length<7)
                echo "<script>alert('Password is too short, try again..!!')</script>";
		exit();
	}
else
{

$query="select * from perdetails where username='$name' AND pass='$pass'";
$run=mysql_query($query) or die (mysql_error());

if(mysql_num_rows($run)==1){

	echo "<script>alert('Your Logged in Successfully !!')</script>";
echo "<script>window.open('new.html','_parent')</script>"
	
}
}
}
?>