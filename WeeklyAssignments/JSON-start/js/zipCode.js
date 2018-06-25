function myFunction() {
    var weatherobject = new XMLHttpRequest();
    var zip = document.getElementById('zip').value;

    if (zip == null || zip == undefined || zip == "" || zip.length != 5) {
        alert ("invalid zip code!\nplease enter a 5 digit zip code and try again!");
    } else {

        var protocol = "";
        if (location.protocol !== 'https:') {
            protocol = "http:";
        } else {
            protocol = "https:";
        }

        weatherobject.open('GET', protocol + '//api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=bcaeef7f3f256798406a93ab87aa490d&units=imperial', true);

        document.getElementById("weather").classList.remove('hide');
        document.getElementById("weather").classList.add('show');

        weatherobject.send();

        weatherobject.onload = function () {
            var weatherInfo = JSON.parse(weatherobject.responseText);
            console.log(weatherInfo);

            document.getElementById('place').innerHTML = weatherInfo.name;
            document.getElementById('temp').innerHTML = weatherInfo.main.temp;
            document.getElementById('wind').innerHTML = weatherInfo.wind.speed;

            var iconcode = weatherInfo.weather[0].icon;
            var icon_path = protocol + "//openweathermap.org/img/w/" + iconcode + ".png";
            document.getElementById('weather_icon').src = icon_path;
        }
    }
}
