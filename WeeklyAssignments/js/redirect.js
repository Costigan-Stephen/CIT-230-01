function redirect(x){
    
    switch (x){
        case "franklin":
            window.location.href = 'franklin-9.html';
            break;
        case "greenville":
            window.location.href = 'greenville.html';
            break;
        case "springfield":
            window.location.href = 'springfield.html';
            break;
        case "home":
            window.location.href = 'index.html';
            break;
        case "storm":
            window.location.href = 'stormcenter.html';
            break;
        case "gallery":
            window.location.href = 'gallery.html';
            break;
        default:
            return true;
        }
}