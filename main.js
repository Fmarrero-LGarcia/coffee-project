"use strict"

// moved variables to top

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');


 // from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

function renderCoffee(coffee) {

    // changed tables into divs

    var html = '<div class="coffee">';
    // html += '<div>' + coffee.id + '</div>';
    html += '<div class="coffeeName"><h3> ' + coffee.name ;
    //added a span tag for names to beside each other
    html += '<span class="coffeeRoast"> ' + coffee.roast + '</span></div>';
    html += '</div>';

    return html;
}

// Nothing changed here
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {

      // We commented out the next line bc it will not pull up the specified roast types
     //e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];


//if all coffees are selected from Roast Selection: Shows ALL coffees.

    if(e === 'all') {
        coffees.forEach(function (coffee) {
            filteredCoffees.push(coffee);
        })
    } else coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// "coffeeElimination" : This function pulls up coffee names that matches the
// text typed into the "Coffee Name" search bar
// and eliminates the rest of the options.
function coffeeElimination(value) {
    var filteredCoffees = [];
    for(var i = 0; i < coffees.length; i++) {
        // This if statement makes it not case-sensitive
        if (coffees[i].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
            filteredCoffees.push(coffees[i]);
        }
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


// This function was done with the help of Tristan
// In this function (specified for the "Add a Coffee" section)
// It is grabbing the IDs and pushes the input into the array
// as a new coffee selection
function coffeeSearch() {
    console.log("hey sam")
    var coffeeInfo = {};
    //Id's start at 1 coffees.length + 1;
    coffeeInfo.id = coffees.length + 1;
    coffeeInfo.name = document.getElementById("nameOfAddedCoffee").value;
    coffeeInfo.roast = document.getElementById("addCoffeeRoast").value;
    coffees.push(coffeeInfo);

    updateCoffees();
}

tbody.innerHTML = renderCoffees(coffees);



// submitButton.addEventListener('click', updateCoffees);