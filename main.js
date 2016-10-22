console.log('connected');


/*$(document).ready(function(){

    var charArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    var charValues = [10, 35, 90, 72, 50, 22, 16, 20, 10, 5, 2, 3, 1];

    var templateSource = $('#barGraph-template').html();
    var template = Handlebars.compile(templateSource);

    for (var key in charArray){
        var value = charValues[key] + '%';
		
        var graph =  {
            charCount: charArray[key],
        }

        var readyTemplate = template(graph);
        $('body').append(readyTemplate);

        $('.bar'+charArray[key]).css('height',value);
    }      
});*/



$(document).ready(function(){

	var graph = [
		{x:2,y:10},{x:3,y:35},{x:4,y:90},{x:5,y:72},{x:6,y:50},{x:7,y:22},{x:8,y:16},
		{x:9,y:20},{x:10,y:10},{x:11,y:5},{x:12,y:2},{x:13,y:3},{x:14,y:1}
	];
    
    var templateSource = $('#barGraph-template').html();
    var template = Handlebars.compile(templateSource);

    var readyTemplate = template(graph);
    $('body').append(readyTemplate);

});

