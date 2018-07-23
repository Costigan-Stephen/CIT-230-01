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
                    date();
                    navCheck();
                    
                }
            }
            xhttp.open('GET', './modules/' + file, true); // matching file names in includes folder
            xhttp.send();
            
            var content = document.getElementById('gallery');  //content exists
            if (content) {
                navCheck();
            }
            content = document.getElementById('services');  //content exists
            if (content) {
                service();
            }

            return;
        }
    }
}
// initial call to the include function
include();


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


function service(){
    var object = new XMLHttpRequest();

    object.open('GET', 'json/services.json', true);

    object.send();

    object.onload = function () {
        var objectInfo = JSON.parse(object.responseText);
        console.log(objectInfo);

        for (var i = 0; i < 6; i++) {
            rep = i + 1;
            document.getElementById('t' + rep + 'name').innerHTML = objectInfo.service[i].name;
            document.getElementById('t' + rep + 'price').innerHTML = objectInfo.service[i].price;

        }
    }

}