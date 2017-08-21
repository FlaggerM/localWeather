var city,country,temp_c,temp_f,wth_main, flag;

function round(v) {
    return (v >= 0 || -1) * Math.round(Math.abs(v));
}

function main() {
    $("#location").html("<p>" + city + ", " + country + "</p>");
    $("#temperature").html("<p id='tmp_cf'>" + temp_c + "</p>&#176<a id='tmp_switch'> C</a>");
    flag = true;
    $("#description").html("<p>" + wth_main + "</p>");
}

function tooggle(){
    if(flag) {
        $("#tmp_switch").text(" F");
        $("#tmp_cf").text(temp_f);
        flag = false;              
    }
    else{
        $("#tmp_switch").text(" C");        
        $("#tmp_cf").text(temp_c);
        flag = true;
    }
}

function icons(){
    wth_main = wth_main.toLowerCase();
    switch (wth_main) {
      case 'drizzle':
        $('div.' + wth_main).removeClass('hide');
        break;
      case 'clouds':
        $('div.' + wth_main).removeClass('hide');
        break;
      case 'rain':
        $('div.' + wth_main).removeClass('hide');
        break;
      case 'snow':
        $('div.' + wth_main).removeClass('hide');
        break;
      case 'clear':
        $('div.' + wth_main).removeClass('hide');
        break;
      case 'thunderstom':
        $('div.' + wth_main).removeClass('hide');
        break;
      default:
    $('div.clouds').removeClass('hide');
    }
}

$(document).ready(function(){
    $.getJSON("http://ipinfo.io/json",function(data){
    	console.log(data);
    	console.log(data.city);
    	console.log(data.country);
    	city = data.city;
    	country = data.country;
    	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+data.city+"&units=metric&appid=4784d2f1ee8bd84021ddced7856ba125",
            function(json){
        		console.log(json.weather[0].main);
        		console.log(json.main.temp);
        		temp_c = round(json.main.temp);
        		temp_f = round((temp_c * 9)/5 + 32);
        		wth_main = json.weather[0].main;
                main();
                icons();
                $("#tmp_switch").on("click", tooggle);
    	});
    });
});


