// Get selected values from list
$(document).ready(function() {
	$("button").click(function(){
	    if (this.name == "Ottawa") {
		    var data = [];
		    var date = [];
		    var city = this.name;
		    $.each($("input[name='value']:checked"), function(){            
		    	data.push($(this).val());
		    });
		    $.each($("input[name='daterange']"), function(){            
		    	date.push($(this).val());
		    });
	    	location.href = "/dashboard?" + "*&*" + city + "*&*" + data.join("*,*") + "*&*" + date.join("_");
	    } 
	});
});
