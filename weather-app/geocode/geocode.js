const request = require('request');

const API_KEY = "d07b3c87c03b5b937f6e6de963f9b481";


geocodeAddress = (addr, callback) => {
    const address = encodeURIComponent(addr);
    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
        json: true
    }, (error, response, body) => {
        // console.log(JSON.stringify(body.results[0], undefined, 2));
        if (error) {
            callback('Unable to connect to Google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Address not found.')
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        }
    });
}

module.exports = {
    geocodeAddress
};