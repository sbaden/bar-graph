console.log('connected');


$(document).ready(function(){
	var charArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    var templateSource = $('#barGraph-template').html();
    var template = Handlebars.compile(templateSource);

	for (var key in charArray){
	    var graph =  {
	        charCount: key,
	        
	    }

	    var readyTemplate = template(graph);
	    $('body').append(readyTemplate);
	}      
    
});