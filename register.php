<?php
$conn=mysql_connect("localhost","root","clara") or die (mysql_error());
$db=mysql_select_db('my_db',$conn) or die (mysql_error());

if(isset($_POST['Submit']))
{
	$fname=$_POST['fname'];
	$lname=$_POST['lname'];
	$gender=$_POST['gender'];
	$email=$_POST['email'];
	$name=$_POST['username'];
	$pass=$_POST['password'];
	
	if($fname=='')
	{
		echo "<script>alert('Please Enter First Name')</script>";
		exit();
	}
	if($lname=='')
	{
		echo "<script>alert('Please Enter Last Name')</script>";
		exit();
	}
	if($pass==''&&$pass.length<7)
	{
              if($pass=='')
		echo "<script>alert('Please Enter a Password')</script>";
              if($pass.length<7)
                echo "<script>alert('Please Enter password with min 7 characters')</script>";
		exit();
	}
	if($cpass==''&& $pass.equals($cpass))
	{
		echo "<script>alert('Password is do not Match,Please try again')</script>";
		exit();
	}
	if($email=='')
	{
		echo "<script>alert('Please Enter Email')</script>";
		exit();
	}

	if($name=='')
	{
		echo "<script>alert('Please Enter valid Username')</script>";
		exit();
	}
	else
	{
		
$query="insert into perdetails(fname,lname,gender,email,username,password) values ('$fname','$lname','$gender','$email','$name','$pass')";
		
	if(mysql_query($query)){	
		
			echo "<script>alert('Signing Successfully !!')</script>";
			echo "<script>window.open('new.html','_parent')</script>";
			
		}	
	}
}
?>