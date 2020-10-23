//IPO input -> Process -> Output
//Start with JS before styling

// Variables  (Data) 

// Constant Data
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

//State Data
let pokemonData; 

//Cached Element References
const $collection = $('#collection');

//Attached Event Listeners
$collection.on('click', 'article.card', handleClick);

// Functions
//called immediately
init();

function init(){
    getData()
}

function getData(){
    //fetch data using ajax
    $.ajax(BASE_URL).then(function(data) {

        pokemonData = data;
        
        render();

    }, function(error) {
        console.log('Error: ', data)
    });
    //take the returned data and assign it to a global state variable
    //call render to visualize it to the DOM
}

function handleClick(){
    alert ('a card was clicked');
}

function render(){
    //map over the objects inside of the pokemonData results array
    //dynamically generate HTML for each element in the array
    // add that HTML to our collection element
    const htmlArray = pokemonData.results.map(pokemon => {
        return `
        <article class="card flex-ctr">
                <h3>${pokemon.name}</h3>
        </article>
        `;
    })
    $collection.html(htmlArray);
}