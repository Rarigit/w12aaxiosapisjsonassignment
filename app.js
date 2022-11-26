//Functions
function searchCocktail(){
    axios.request({
        url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
        method: "GET"
    }).then(scSuccess).catch(scFail)
}

function scSuccess(response){
    let cocktailData = response.data.drinks;
    for(cocktail of cocktailData){
        divCrate.insertAdjacentHTML(`beforeend`,`<h1>${cocktail.strDrink}</h1>`);
    }
    divCrate.insertAdjacentHTML = `<h1>${cocktailData}</h1>`;
}
    

function scFail(error){
    divCrate.innerHTML = `<h1>ERROR!</h1>`;
    console.log(error);
}

//Constants
const divCrate = document.getElementById(`displayResults`);

//Event Listeners
document.getElementById(`pushButton`).addEventListener(`click`, searchCocktail);