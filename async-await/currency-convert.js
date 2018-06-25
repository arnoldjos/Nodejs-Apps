// USD CAD 23
// 23 USD is worth 28 CAD. You can spend these in the following countries:
const axios = require('axios');

const getExchangeRate = (from, to) => {
    return axios.get(`https://exchangeratesapi.io/api/latest?base=${from}`).then(res => {
        return res.data.rates[to];
    });
};

const getCountries = (currencyCode) => {
    return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then(res => {
        return res.data.map(country => country.name);
    });
};

getExchangeRate('USD', 'PHP').then(rate => {
    console.log(rate);
}).catch(e => {
    console.log(e);
});

getCountries('PHP').then(countries => {
    console.log(countries);
}).catch(e => {
    console.log(e);
}); 