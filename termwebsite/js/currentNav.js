function navCheck() {
    
    var pName = document.getElementById('pagename').innerHTML;
    
    if (pName == "Adventure Tours") {
        var e = document.getElementById('adventure'); //Sidebar
        var e2 = document.getElementById('adventure2');

    } else if (pName == "Events") {
        
        var e = document.getElementById('events'); //Sidebar
        var e2 = document.getElementById('events2');

    } else if (pName == "Sales") {
        
        var e = document.getElementById('sales'); //Sidebar
        var e2 = document.getElementById('sales2');

    } else if (pName == "The Mountain Spoke") {
        
        var e = document.getElementById('home'); //Sidebar
        var e2 = document.getElementById('home2');
        

    } else if (pName == "Services") {
        
        var e = document.getElementById('services'); //Sidebar
        var e2 = document.getElementById('services2');

    } else if (pName == "Contact Us") {
        
        var e = document.getElementById('contact'); //Sidebar
        var e2 = document.getElementById('contact2');

    }

    e.classList.remove('currentSide');
    e.classList.add('currentSide');
    e2.classList.remove('currentNav');
    e2.classList.remove('allowHover');
    e2.classList.add('currentNav');
}
