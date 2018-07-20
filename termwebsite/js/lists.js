function doCategory(id) {

    let file, xhttp;
    
    var v = document.getElementById("categoryname");
    var w = document.getElementById("storehead");
    var x = document.getElementById("list");
    var y = document.getElementById("cat");
    var z = document.getElementById("return");
    var c = "lists/" + id + ".html";

    x.includefile = c;
    
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                x.innerHTML = this.responseText;
                v.innerHTML = id.toUpperCase();
                w.style.display = "none";
                y.style.display = "none";
                z.style.display = "block";
            }
            if (this.status == 400) {
                x.innerHTML = "Page not found!";
                x.style.display = "none";
            }
            x.removeAttribute('includefile');
        }
    }
    
    xhttp.open('GET', './modules/' + c, true); // matching file names in includes folder
    xhttp.send();

    var content = document.getElementById('gallery'); //content exists
    if (content) {
        cNav();
    }

    var date = document.getElementById('date'); //content exists
    if (date) {
        date();
    }

    return;

}

function doRegister(id) {
    

    let file, xhttp;
    
    var x = document.getElementById("list");
    var y = document.getElementById("cat");
    var c = "lists/" + id + ".html";

    x.includefile = c;
    toggleList();
    
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                x.innerHTML = this.responseText;
                v.innerHTML = id.toUpperCase();
                w.style.display = "none";
                y.style.display = "none";
            }
            if (this.status == 400) {
                x.innerHTML = "Page not found!";
                x.style.display = "none";
            }
            x.removeAttribute('includefile');
        }
    }
    
    xhttp.open('GET', './modules/' + c, true); // matching file names in includes folder
    xhttp.send();

    return;

}

function toggleList(){ 
    
    var t = document.getElementById("list");
    
    if (t.style.display == "block"){
        t.style.display = "none";
    } else {
        t.style.display = "block";
    }
 
}


