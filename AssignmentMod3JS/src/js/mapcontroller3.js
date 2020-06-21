function initMap() {


    let niagara = {

        lat:43.0660344,
        lng:-78.8190807

    };


    let div = document.querySelector('div');

//create new map object (Italy)

    let map = new google.maps.Map(div, {
        zoom: 18,
        center: niagara
    });

//create a new marker object

    let marker = new google.maps.Marker({position:niagara, map:map});


}


window.onload = updateTitle;



//change title using text files and fetch command
function updateTitle() {
    let title = document.querySelector('h1');
    let url = "title3.txt";

    fetch(url).then(function(response) {
        response.text().then(function(text) {
            title.textContent = text;
        });
    });
}






