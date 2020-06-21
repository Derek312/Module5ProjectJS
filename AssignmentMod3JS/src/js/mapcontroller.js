



let map;

function initMap() {

    let piazzaDuomo = {
        lat: 43.7232561,
        lng: 10.3931054
    };

//create new map object (Italy)
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: piazzaDuomo
    });
//create a new marker object
    let marker = new google.maps.Marker({position: piazzaDuomo, map: map});
}


window.onload = updateTitle;



//change title using text files and fetch command
function updateTitle() {
    let title = document.querySelector('h1');
    let url = "title.txt";

    fetch(url).then(function(response) {
        response.text().then(function(text) {
           title.textContent = text;
        });
    });
}
