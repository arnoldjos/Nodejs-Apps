const request = require('request');

const API_KEY = "d07b3c87c03b5b937f6e6de963f9b481";
const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const weather = {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            }
            callback(undefined, weather);
        } else {
            console.log('Unable to fetch weather');
        }
    });
};


module.exports = {
    getWeather
};
