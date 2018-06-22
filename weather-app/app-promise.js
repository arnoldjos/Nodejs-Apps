const yargs = require('yargs');
const axios = require('axios');

const API_KEY = "d07b3c87c03b5b937f6e6de963f9b481";

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const address = encodeURIComponent(argv.address);
const geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`;



axios.get(geocodeUrl)
    .then(response => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address.');
        }

        const lat = response.data.results[0].geometry.location.lat;
        const lng = response.data.results[0].geometry.location.lng;
        const weatherUrl = `https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`;
        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherUrl);

    })
    .then(response => {
        const temp = response.data.currently.temperature;
        const apparentTemp = response.data.currently.apparentTemperature;

        console.log(`It is currently ${temp}. But it feels like ${apparentTemp}`);
    })
    .catch(e => {
        if (e.code === 'ENOTFOUND') {
            console.log('Unable to connect to API servers.');
        } else {
            console.log(e.message);
        }
    });


