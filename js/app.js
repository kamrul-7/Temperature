const API_KEY = `cf9b9cc4ae59c6e747b9d8263ae10b53`;
const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}
const displayTemperature = data => {
    // const temperature = document.getElementById('temperature');

    // temperature.innerText = data.main.temp;
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('weather', data.weather[0].main)
}

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}



document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');

    const city = searchField.value;
    searchField.value = '';
    document.getElementById('city').innerText = city;

    loadTemperature(city);

})

loadTemperature('dhaka');