function initMap() {

let cancun = {

    lat:21.1492744,
    lng:-86.9428122

};

    let div = document.querySelector('div');

//create new map object (Italy)

    let map = new google.maps.Map(div, {
        zoom: 18,
        center: cancun
    });

//create a new marker object

    let marker = new google.maps.Marker({position:cancun, map:map});


}

window.onload = updateTitle;



//change title using text files and fetch command
function updateTitle() {
    let title = document.querySelector('h1');
    let url = "title4.txt";

    fetch(url).then(function(response) {
        response.text().then(function(text) {
            title.textContent = text;
        });
    });
}







