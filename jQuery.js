console.log("Start jQuery.js");
$(document).ready(function(){


//expands LibEd course list
	$('#genEd').click(function(){
		if($('#genEdsub').css('display') == 'none')
			$('#genEdsub').css('display', 'block');
		else
			$('#genEdsub').css('display', 'none');
	});

//expands CSCI course list
	$('#CSCI').click(function(){
		if($('#CSCIsub').css('display') == 'none')
			$('#CSCIsub').css('display', 'block');
		else
			$('#CSCIsub').css('display', 'none');
	});
		
//expands SEcore course list
	$('#SEcore').click(function(){
		if($('#SEcoresub').css('display') == 'none')
			$('#SEcoresub').css('display', 'block');
		else
			$('#SEcoresub').css('display', 'none');
	});
		
//expands SEpath course list
	$('#SEpath').click(function(){
		if($('#SEpathsub').css('display') == 'none')
			$('#SEpathsub').css('display', 'block');
		else
			$('#SEpathsub').css('display', 'none');
	});

	
	
	
	
	
});//end doc ready