 
function Submit(){
 var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
 var fname = document.getElementById("Name");
 var lname = document.getElementById("LastName");
 var femail = document.getElementById("Email");
 var freemail = document.getElementById("enterEmail");
 var fpassword =document.getElementById("Password");
   if( fname == "")
   {
    alert("Enter the first name");
   return false;
   }
 if( lname == "" )
   {
   alert("Enter the last name");
   return false;
   }
    
   if (femail == "" )
 {
  alert("Enter the email address");
  return false;
  }
  else if(!emailRegex.test(femail)){
  alert("Enter valid email address");
  return false;
  }
   if (freemail == "" )
 {
  alert("Re-enter the email address");
  return false;
  } else if(!emailRegex.test(freemail)){
  alert("Re-enter valid email address");
  return false;
  }
  
  if(freemail !=  femail){
  alert("Emails are not matching, re-enter email");
  return false;
   }
   
   
 if(fpassword == "")
  {
  alert("Enter the password");
  return false;
  }
   
  if(document.form.radiobutton[0].checked == false && document.form.radiobutton[1].checked == false){
  alert("Select your gender");
  return false;
   }
  if(fname != '' && lname != '' && femail != '' && freemail != '' && fpassword != ''){
   alert("You have registered successfully!!!!");
    window.location = "new.html";
  }
}
