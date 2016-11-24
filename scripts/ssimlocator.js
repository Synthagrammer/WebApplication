// Get selected values from list
$(document).ready(function() {
	$("button").click(function(){
	    if (this.name == "Ottawa") {
		    var data = [];
		    var city = this.name;
		    $.each($("input[name='" + city + "']:checked"), function(){            
		    	data.push($(this).val());
		    });
	    
	    	alert("Show dashboard for: " + data.join(", "));
	    	location.href = "/dashboard?" + this.name + "&" + data.join("&");
	    } else {
	    	alert(this.name + " has not been set up yet.")
	    }
	});
});
