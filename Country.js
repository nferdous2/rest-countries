const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();
const displayCountries = counties => {

    const countriesDiv = document.getElementById('countries');
    counties.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <div class="card h-100 w-75">
            <img src="${country.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Name: ${country.name.common}</h5>
                <h5 class="card-title">Capital: ${country.capital}</h5>
                <h5 class="card-title">Region: ${country.region}</h5>
                <h5 class="card-title">Area: ${country.area}</h5>
                <h5 class="card-title">Population: ${country.population}</h5>
                <h5 class="card-title">Language: ${country.languages[0]}</h5>
                <h5 class="card-title">Continents: ${country.continents}</h5>
            

            </div>
        </div>
        
        `;
        countriesDiv.appendChild(div);
    });
}
//search countries


document.getElementById('error-message').style.display = 'none';

const searchCountry = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none';
    if (searchText == '') {
    }
    else {
        // load data
        const url = `https://restcountries.com/v3.1/name/${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data))
            .catch(error => displayError(error));
    }
}

const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}

const displaySearchResult = countries => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (countries.length == 0) {
        // show no result found;

    }
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100  ">
            <img src="${country.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Name: ${country.name.common}</h5>
            <h5 class="card-title">Capital: ${country.capital}</h5>
            <h5 class="card-title">Region: ${country.region}</h5>
            <h5 class="card-title">Area: ${country.area}</h5>
            <h5 class="card-title">Population: ${country.population}</h5>
            <h5 class="card-title">Language: ${country.languages[0]}</h5>
            <h5 class="card-title">Continents: ${country.continents}</h5>
        
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}