
//jQuery

// ------------------------------------------CLOCK----------------
$(document).ready(function() {
	window.setInterval(updateTime, 10);
});



function updateTime () {
	var start = new Date();
	var hours = start.getHours();
	var minutes = start.getMinutes();

	//----- CREATED to keep a 0 - when is single digit --------
	var min = "0";
		if (minutes<10)
			min="0";
		else 
			min=""
	var seconds = start.getSeconds();


	//----- CREATED to keep a 0 - when is single digit --------
	var sec = "0";
		if (seconds<10)
			sec="0";
		else 
			min=""
	var ms = start.getMilliseconds();

	$("#time").html(hours + ":" + min + minutes + ":" + sec + seconds);
}





