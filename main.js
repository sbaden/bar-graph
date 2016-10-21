console.log('connected');


$(document).ready(function(){
	var sheet = document.styleSheets[0];
	console.log(sheet);
	
	var charArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
	var charValues = [10, 35, 90, 72, 50, 22, 16, 20, 10, 5, 2, 3, 1];

    var templateSource = $('#barGraph-template').html();
    var template = Handlebars.compile(templateSource);

	for (var key in charArray){
		var value = "'" + charValues[key] + '%' + "'";
		console.log(key);

	    // $('.bar').css('height','70%');
	    $('.bar').css('height', 'value');

	    var graph =  {
	        charCount: charArray[key],
	     	   
	    }

	    var readyTemplate = template(graph);
	    $('body').append(readyTemplate);
	}      
    
});


