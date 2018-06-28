var pName = document.getElementById('pagename').innerHTML;

var x, rep;

if (pName == "Greenville Weather"){ 
    x = 4;
    rep = 1;
}else if(pName == "Franklin Weather"){ 
    x = 3;
    rep = 0;
}else if(pName == "Springfield Weather"){ 
    x = 3;
    rep = 3;
}

var weatherobject = new XMLHttpRequest();

weatherobject.open('GET', './json/towns.json', true);

weatherobject.send();

if(x == 3){
    var element = document.getElementById("event3"); 
    element.parentNode.removeChild(element);
} //Remove extra event items

weatherobject.onload = function () {
    var weatherInfo = JSON.parse(weatherobject.responseText);
    console.log(weatherInfo);

    for (var i = 0; i < x; i++) {
        document.getElementById('event'+i).innerHTML = weatherInfo.towns[rep].events[i];
    }
}
