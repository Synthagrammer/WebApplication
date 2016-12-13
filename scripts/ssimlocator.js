// Get selected values from list
$(document).ready(function() {
	$("button").click(function(){
	    if (this.name == "Ottawa") {
	    	 // Get data selectec 
		    var data = [];
		    var city = this.name;
		    $.each($("input[name='value']:checked"), function(){            
		    	data.push($(this).val());
		    });
		    if (data.length == 0) {
		    	alert("Please selected data to be viewed.");
		    } else {
		    	// Check if live data is selected
		    	if ($("input[name='live_daq']:checked")) {
		    		// Create url	    		
		    		location.href = "/dashboard?" + "location=" + city + "&date=live" + "&data=" + data.join("&data=") + "&done";
		    	} else {
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
			    	// Create URl	    		
			    	location.href = "/dashboard?" + "location=" + city + "&date=" + jStartDate + "&date=" + jEndDate + "&data=" + data.join("&data=") + "&done";
		    	}
		    }
	    } 
	});

});
