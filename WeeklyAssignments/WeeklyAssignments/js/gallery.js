function img(x) {
    if (x == 1){
        document.getElementById("full").src = "images/gallery/image1.jpg";
        document.getElementById("caption").src = document.getElementById("cap1").innerHTML;
    }else if(x == 2){
        document.getElementById("full").src = "images/gallery/image2.jpg";
        document.getElementById("caption").src = document.getElementById("cap2").innerHTML;
    }else if(x == 3){
        document.getElementById("full").src = "images/gallery/image3.jpg";
        document.getElementById("caption").src = document.getElementById("cap3").innerHTML;
    }else if(x == 4){
        document.getElementById("full").src = "images/gallery/image4.jpg";
        document.getElementById("caption").src = document.getElementById("cap4").innerHTML;
    }else if(x == 5){
        document.getElementById("full").src = "images/gallery/image5.jpg";
        document.getElementById("caption").src = document.getElementById("cap5").innerHTML;
    }else if(x == 6){
        document.getElementById("full").src = "images/gallery/image6.jpg";
        document.getElementById("caption").src = document.getElementById("cap6").innerHTML;
    }
    
    document.getElementById("modal01").style.display = "block";
}