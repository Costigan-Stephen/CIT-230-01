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