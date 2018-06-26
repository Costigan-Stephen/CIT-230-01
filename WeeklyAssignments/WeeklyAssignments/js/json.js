var weatherobject = new XMLHttpRequest();

weatherobject.open('GET', './json/towns.json', true);

weatherobject.send();

weatherobject.onload = function () {
    var weatherInfo = JSON.parse(weatherobject.responseText);
    console.log(weatherInfo);

    for (var i = 0; i < 4; i++) {
        rep = i + 1;
        document.getElementById('t' + rep + 'name').innerHTML = weatherInfo.towns[i].name;
        document.getElementById('t' + rep + 'motto').innerHTML = weatherInfo.towns[i].motto;
        document.getElementById('t' + rep + 'year').innerHTML = weatherInfo.towns[i].yearFounded;
        document.getElementById('t' + rep + 'pop').innerHTML = weatherInfo.towns[i].currentPopulation;
        document.getElementById('t' + rep + 'rain').innerHTML = weatherInfo.towns[i].averageRainfall;

//        var imgcode = weatherInfo.towns[i].name;
//        var img_path = './images/' + imgcode + ".jpg";
//        document.getElementById('t' + rep + 'img').src = img_path;
    }
}
