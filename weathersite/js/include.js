function include() {
    let file, xhttp;

    let allElements = document.getElementsByTagName('*'); // get all elements on the page

    for (let i = 0; i < allElements.length; i++) { // process all the elements looking for the custom attribute 'includefile'
        file = allElements[i].getAttribute("includefile");
        if (file) { // if the attribute is found, process an AJAX XMLHttpRequest
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        allElements[i].innerHTML = this.responseText;
                    }
                    if (this.status == 400) {
                        allElements[i].innerHTML = "Page not found!";
                    }
                    allElements[i].removeAttribute('includefile');
                    include(); // call the function again to start the process over
                }
            }
            xhttp.open('GET', './modules/' + file, true); // matching file names in includes folder
            xhttp.send();
            
            var content = document.getElementById('gallery');  //content exists
            if (content) {
                cNav();
            }
            
            var date = document.getElementById('date'); //content exists
            if (date) {
                date();
            }

            return;
        }
    }
}
// initial call to the include function
include();

function cNav() {
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

    } else if (pName == "Your Weather") {
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

function date() {
    var d = new Date();
    var weekday = new Array( "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var day = d.getDate();
    var n = weekday[d.getDay()];
    var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
        month = months[d.getMonth()];
    var year = d.getFullYear();
    var today = n + ', '  + day + ' ' + month + ' ' + year;

    document.getElementById("date").innerHTML = today;
}
