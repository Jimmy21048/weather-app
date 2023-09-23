
export default function Information({text, value}) {

    fetch(`https://api.weatherapi.com/v1/current.json?key=7cc857551b0b43928a961427232209&q=${value}&aqi=no`)
    .then(response => {
        return response.json();
    })
    .then(value => {
        console.log(value);
        document.getElementById('country').innerHTML=value.location.country;
        document.getElementById('location').innerHTML=value.location.name;
        document.getElementById('region').innerHTML=value.location.region;
        document.getElementById('latitude').innerHTML=value.location.lat;
        document.getElementById('longitude').innerHTML=value.location.lon;
        document.getElementById('time').innerHTML=value.location.localtime;
        document.getElementById('weather-icon').innerHTML=`
        <h4>${value.current.condition.text}</h4>
        <img class='weather-icon-icon' src=${value.current.condition.icon} alt=${value.current.condition.text} />
        <p>Temperature: ${value.current.temp_c} C</p> `;
    });
    return (
        <div className="information">
            <div className="info-left">
                <div className="place">
                    <h3>Country</h3>
                    <p id="country"></p>
                </div>
                <div className="place">
                    <h3>Location</h3>
                    <p id="location"></p>
                </div>
                <div className="place">
                    <h3>Region</h3>
                    <p id="region"></p>
                </div>
                <div className="place">
                    <h3>Latitude</h3>
                    <p id="latitude"></p>
                </div>
                <div className="place">
                    <h3>Longitude</h3>
                    <p id="longitude"></p>
                </div>
                <div className="place">
                    <h3>Time</h3>
                    <p id="time"></p>
                </div>
            </div>
            <div className="info-right">
                <p id="weather-icon">
                    
                </p>
            </div>
        </div>
    )
}