function doSearch(){
    
    var x = document.getElementById("search").value;

    var urlStart = "https://www.google.com/search?biw=1920&bih=493&tbm=shop&ei=rmZOW47mGca-ggf53oOgCQ&q="
    var urlEnd = x.replace(" ", "+");

    window.location.href = urlStart + urlEnd;
    
}