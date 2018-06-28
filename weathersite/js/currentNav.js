function navCheck() {

    var pName = document.getElementById('pagename').innerHTML;
    
    if (pName == "Greenville Weather") {
        document.getElementById('green').classList.remove('currentSide');
        document.getElementById('green').classList.add('currentSide');
        document.getElementById('green2').classList.remove('currentNav');
        document.getElementById('green2').classList.add('currentNav');

    } else if (pName == "Franklin Weather") {
        document.getElementById('frank').classList.remove('currentSide');
        document.getElementById('frank').classList.add('currentSide');
        document.getElementById('frank2').classList.remove('currentNav');
        document.getElementById('frank2').classList.add('currentNav');

    } else if (pName == "Springfield Weather") {
        document.getElementById('spring').classList.remove('currentSide');
        document.getElementById('spring').classList.add('currentSide');
        document.getElementById('spring2').classList.remove('currentNav');
        document.getElementById('spring2').classList.add('currentNav');

    } else if (pName == "Weather") {
        document.getElementById('home').classList.remove('currentSide');
        document.getElementById('home').classList.add('currentSide');
        document.getElementById('home2').classList.remove('currentNav');
        document.getElementById('home2').classList.add('currentNav');

    } else if (pName == "Storm Center") {
        document.getElementById('storm').classList.remove('currentSide');
        document.getElementById('storm').classList.add('currentSide');
        document.getElementById('storm2').classList.remove('currentNav');
        document.getElementById('storm2').classList.add('currentNav');

    } else if (pName == "Gallery") {
        document.getElementById('gallery').classList.remove('currentSide');
        document.getElementById('gallery').classList.add('currentSide');
        document.getElementById('gallery2').classList.remove('currentNav');
        document.getElementById('gallery2').classList.add('currentNav');

    }
}
