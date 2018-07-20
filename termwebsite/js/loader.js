var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 200);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
    document.getElementById("footer").style.display = "block";
}
