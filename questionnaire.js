var score = 0;
$(document).ready(function(){
$('.questionnaire').hide();
$('#q1').show();
$('#q1 #submit').click(function(){	
$('.questionnaire').hide();
questionScore('q1');
$('#q2').fadeIn(300);
return false;
});
$('#q2 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q2');
$('#q3').fadeIn(300);
return false;
});
$('#q3 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q3');
$('#q4').fadeIn(300);
return false;
});
$('#q4 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q4');
$('#q5').fadeIn(300);
return false;
});
$('#q5 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q5');
$('#q6').fadeIn(300);
return false;
});
$('#q6 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q6');
$('#q7').fadeIn(300);
return false;
});
$('#q7 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q7');
$('#q8').fadeIn(300);
return false;
});
$('#q8 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q8');
$('#q9').fadeIn(300);
return false;
});
$('#q9 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q9');
$('#q10').fadeIn(300);
return false;
});
$('#q10 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q10');
$('#q11').fadeIn(300);
return false;
});
$('#q11 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q11');
$('#q12').fadeIn(300);
return false;
});
$('#q12 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q12');
$('#q13').fadeIn(300);
return false;
});
$('#q13 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q13');
$('#q14').fadeIn(300);
return false;
});
$('#q14 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q14');
$('#q15').fadeIn(300);
return false;
});
$('#q15 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q15');
$('#q16').fadeIn(300);
return false;
});
$('#q16 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q16');
$('#q17').fadeIn(300);
return false;
});
$('#q17 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q17');
$('#q18').fadeIn(300);
return false;
});
$('#q18 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q18');
$('#q19').fadeIn(300);
return false;
});
$('#q19 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q19');
$('#q20').fadeIn(300);
return false;
});
$('#q20 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q20');
$('#q21').fadeIn(300);
return false;
});
$('#q21 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q21');
$('#q22').fadeIn(300);
return false;
});
$('#q22 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q22');
$('#q23').fadeIn(300);
return false;
});
$('#q23 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q23');
$('#q24').fadeIn(300);
return false;
});
$('#q24 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q24');
$('#q25').fadeIn(300);
return false;
});
$('#q25 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q25');
$('#q26').fadeIn(300);
return false;
});
$('#q26 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q26');
$('#q27').fadeIn(300);
return false;
});
$('#q27 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q27');
$('#q28').fadeIn(300);
return false;
});
$('#q28 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q28');
$('#q29').fadeIn(300);
return false;
});
$('#q29 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q29');
$('#q30').fadeIn(300);
return false;
});
$('#q30 #submit').click(function(){
$('.questionnaire').hide();
questionScore('q30');
$('#result').fadeIn(300);
questionScore('result')
return false;
});
});

function questionScore(q){
	for(i=1;i<=30;i++){
	if(q==("q"+i))
	{
		var submitted=$('input[name=q'+i+']:checked').val();	
	if(submitted=="a")
		score=score+1;
	else if(submitted=="b")
		score=score+2;
	else if(submitted=="c")
		score=score+3;
	else if(submitted=="d")
		score=score+4;
	else if(submitted=="e")
		score=score+5;
	else alert("choose an option");
	
	}
	}
    if(q=="result")	
	{	
	$('#results').html("<h3> YOUR FINAL SCORE IS "+score+" <br> GO back to main page:</h3> <a href='new.html'><button name='button'>Return Home</button></a>");
	}
		return false;
	}
