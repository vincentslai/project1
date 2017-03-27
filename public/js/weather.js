$(document).ready(function(){
	
 	$('#submitWeather').click(function(){
		var city = $('#city').val();
		if(city != ''){
			$("#errorMessage").html("");
			$.ajax({
				url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&APPID=fe6b5cd2006ba4ed09c8694e00996820',
				type: "GET",
				dataType:"jsonp",
				success: function(data){
					console.log(data);

					var weatherCondition = showWeather(data);
					$("#searchResult").html(weatherCondition);
					$("#city").html("");
				}
			})
		}else{
			$("#errorMessage").html("City name needed");
		}
 	});

});

function showWeather(data){
	return  "<div class='alert alert-warning'><h3>Current Temp: " + data.main.temp + " F</h3>"+
			"<h3>Description: " + data.weather[0].description+" </h3></div>";
}