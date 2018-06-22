const request = require('request');

const geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        const response = request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Cannot connect to google servers');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Address not found.')
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    lat: body.results[0].geometry.location.lat,
                    lng: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress(`6300 cogon`).then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (error) => {
    console.log(error);
});



module.exports = {
    geocodeAddress
};