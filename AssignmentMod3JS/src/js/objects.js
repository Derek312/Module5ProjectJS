// JavaScript Document
// Collaboration project with Bence K. and Derek D.

let body = document.querySelector('body');
let infoDiv = document.querySelector('div');

let descriptionBtns = document.getElementsByClassName('description');
let availabilityBtns = document.getElementsByClassName('availability');
let mapBtns = document.getElementsByClassName('mapView');
let properties;

// Rental Property Part
class RentalProperty {
    constructor(name, price, rating, location, rooms, availability, features) {
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.location = location;
        this.rooms = rooms;
        this.availability = availability;
        this.features = features;
    }

    description() {
        let info = document.getElementById('info');

        // Delete element in div, if there is any
        if(info.hasChildNodes()) {
            info.removeChild(info.querySelector('p'));
        }

        // The text
        let newPara = document.createElement('p');
        let text = 'Name: ' + this.name + '<br />' +
        'Price: $' + this.price + '/night <br />' +
        'Rating: ' + this.rating + '<br />' +
        'Location: ' + this.location + '<br />' +
        'Rooms: ' + this.rooms + '<br />' +
        'Features: ' + this.features;

        // Add to div with id info
        newPara.innerHTML = text;
        info.appendChild(newPara);
    }

    checkAvailability() {
        let info = document.getElementById('info');

        // Delete element in div, if there is any
        if(info.hasChildNodes()) {
            info.removeChild(info.querySelector('p'));
        }
        
        // The text
        let newPara = document.createElement('p');
        let text = this.name + ' Availability: ' + this.availability;

        // Add to div with id info
        newPara.innerHTML = text;
        info.appendChild(newPara);
    }

    findMap(){

        localStorage.setItem('')
        window.location = 'mapView.html';
    }
}

// Create rental property instances
let nostroPalazzo = new RentalProperty('Nostro Palazzo', 170, 4.51, 'Piazza del Duomo, PI, Italy', 5, 'Available', ['TVs', 'smoke alarm']);
let casinoViewPenthouse = new RentalProperty('Casino View Penthouse', 150, 3.91, 'Las Vegas, LA, United States', 4, 'Not Available', ['TVs']);


// Special Property Part
class SpecialProperty extends RentalProperty {
    constructor(name, price, rating, location, rooms, availability, features) {
        super(name, price, rating, location, rooms, availability, features);
    }

    description() {
        // 20% off
        this.specialPrice = this.price * 0.8
        let info = document.getElementById('info');

        // Delete element in div, if there is any
        if(info.hasChildNodes()) {
            info.removeChild(info.querySelector('p'));
        }

        // The text
        let newPara = document.createElement('p');
        let text = 'Name: ' + this.name + '<br />' +
        'Reduced Price: $' + this.specialPrice + '/night <br />' +
        'Rating: ' + this.rating + '<br />' +
        'Location: ' + this.location + '<br />' +
        'Rooms: ' + this.rooms + '<br />' +
        'Features: ' + this.features;

        // Add to div with id info
        newPara.innerHTML = text;
        info.appendChild(newPara);
    }
}

// Create special property instance
let niagaraView = new SpecialProperty('Niagara View', 120, 4.17, 'Niagara, ON, Canada', 3, 'Available', ['TVs', 'kitchen']);


// Super Host Property Part
class superProperty extends RentalProperty {
    constructor(name, price, rating, location, rooms, availability, features) {
        super(name, price, rating, location, rooms, availability, features);
    }

    description() {
        let info = document.getElementById('info');

        // Delete element in div, if there is any
        if(info.hasChildNodes()) {
            info.removeChild(info.querySelector('p'));
        }

        // The text
        let newPara = document.createElement('p');
        let text = 'Name: ' + this.name + ' (Superhost!)<br />' +
        'Price: $' + this.price + '/night <br />' +
        'Rating: ' + this.rating + '<br />' +
        'Location: ' + this.location + '<br />' +
        'Rooms: ' + this.rooms + '<br />' +
        'Features: ' + this.features;

        // Add to div with id info
        newPara.innerHTML = text;
        info.appendChild(newPara);
    }
}

// Create super host property instance
let casaDeLoco = new superProperty('Casa de Loco', 200, 4.86, 'Cancun, Mexico', 6, 'Not Available', ['TVs', 'kitchen', 'smoke alarm']);

// Put all rental properties into an array
properties = [nostroPalazzo, casinoViewPenthouse, niagaraView, casaDeLoco];

// Add event listener, and display when button is clicked
for(let i = 0; i < descriptionBtns.length; i++) {
    descriptionBtns[i].addEventListener('click', function() {
        properties[i].description();
    });

    availabilityBtns[i].addEventListener('click', function() {
        properties[i].checkAvailability();
    });

    mapBtns[i].addEventListener('click', function() {
        properties[i].findMap();
    });

}