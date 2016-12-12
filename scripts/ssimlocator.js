// Get selected values from list
$(document).ready(function() {
	$("button").click(function(){
	    if (this.name == "Ottawa") {
	    	// Validate date range
	    	var date = [];
	    	$.each($("input[name='daterange']"), function(){            
		    	date =($(this).val()).split(" - ");
		    });
		    var jStartDate = new Date(date[0]);
		    var jEndDate = new Date(date[0]);
		    // Check intial date
		    if (jStartDate < new Date("12/8/2016 11:00 AM")) {
		    	jStartDate = new Date("12/8/2016 11:00 AM");
		    }
		    // Check end date
		    if (jEndDate > new Date()) {
		    	jEndDate = new Date();
		    }
		    // Get data selectec 
		    var data = [];
		    var city = this.name;
		    $.each($("input[name='value']:checked"), function(){            
		    	data.push($(this).val());
		    });
		    
	    	location.href = "/dashboard?" + "location=" + city + "*&*date=" + jStartDate + "*,*" + jEndDate + "*&*data=" + data.join("*,*");
	    } 
	});

});
