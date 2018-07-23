function redirect(x){
    
    switch (x){
        case "adventure":
            window.location.href = 'adventure.html';
            break;
        case "contact":
            window.location.href = 'contact.html';
            break;
        case "events":
            window.location.href = 'events.html';
            break;
        case "home":
            window.location.href = 'index.html';
            break;
        case "sales":
            window.location.href = 'sales.html';
            break;
        case "services":
            window.location.href = 'services.html';
            break;
        case "overview":
            window.location.href = 'overview.html';
            break;
        case "references":
            window.location.href = 'references.html';
            break;
        default:
            return true;
        }
}