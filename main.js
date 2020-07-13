"use strict"
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
    var html = '<div class="coffee">';
    // html += '<div>' + coffee.id + '</div>';
    html += '<div class="coffeeName"><h3> ' + coffee.name ;
    //added a span tag for names to beside each other
    html += '<span class="coffeeRoast"> ' + coffee.roast + '</span></div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
//if all coffees are selected from Roast Selection:
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

// "coffeeElimination"
function coffeeElimination(value) {
    var filteredCoffees = [];
    for(var i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
            filteredCoffees.push(coffees[i]);
        }
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function coffeeSearch() {
    var coffeeInfo = {
        id: " ",
        name: " ",
        roast: " ",
    };
    //Id's start at 1 coffees.length + 1;
    coffeeInfo.id = coffees.length + 1;
    coffeeInfo.name = document.getElementById("coffeeName").value;
    coffeeInfo.roast = document.getElementById("coffeeName").value;
    coffeeInfo.push(coffeeInfo);
}

function addNewCoffee (input) {
    var searchID = coffees.length+1;
    var searchName = inputName.value.toString();
    var searchRoast = inputRoast.value.toString();
    input = {id: searchID, name: searchName, roast: searchRoast};
    coffees.push(input);
    console.log(coffees);
    tbody.innerHTML = renderCoffees(coffees);
}




tbody.innerHTML = renderCoffees(coffees);



// submitButton.addEventListener('click', updateCoffees);