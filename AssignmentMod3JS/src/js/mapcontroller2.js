function initMap() {


    let vegas = {

        lat:36.1249185,
        lng:-115.3150848

    };
    let div = document.querySelector('div');

//create new map object (Italy)

    let map = new google.maps.Map(div, {
        zoom: 18,
        center: vegas
    });

//create a new marker object

    let marker = new google.maps.Marker({position:vegas, map:map});

}


window.onload = updateTitle;



//change title using text files and fetch command
function updateTitle() {
    let title = document.querySelector('h1');
    let url = "title2.txt";

    fetch(url).then(function(response) {
        response.text().then(function(text) {
            title.textContent = text;
        });
    });
}








