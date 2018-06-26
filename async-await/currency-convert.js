// USD CAD 23
// 23 USD is worth 28 CAD. You can spend these in the following countries:
const axios = require('axios');

const getExchangeRate = async  (from, to) => {
    try {
        const response = await axios.get(`https://exchangeratesapi.io/api/latest?base=${from}`);
        const rate =  response.data.rates[to];
        if (rate) {
            return rate;
        } else {
            throw new Error();
        }
    } catch (e) {
        throw new Error(`Unable to get exchange rate for ${from} and ${to}`);
    }
};

const getCountries = async (currencyCode) => {
    try {
        const countries = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
        return countries.data.map(country => country.name);
    } catch (e) {
        throw new Error(`Unable to get countries that use ${currencyCode}`);
    }
};

// getExchangeRate('USD', 'PHP').then(rate => {
//     console.log(rate);
// }).catch(e => {
//     console.log(e);
// });

const convertCurrency = (from, to, amount) => {
    let countries;

    return getCountries(to).then(tempCountries => {
        countries = tempCountries;
        return getExchangeRate(from, to);
    }).then(rate => {
        const exchangedAmount = amount * rate;

        return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
    });
};

const convertCurrencyAlt = async (from, to, amount) => {
    const countries = await getCountries(to);
    const rate = await getExchangeRate(from, to);

    const exchangedAmount = amount * rate;
    return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
}

convertCurrencyAlt('USD', 'EUR', 100).then(countries => {
    console.log(countries);
}).catch(e => {
    console.log(e.message);
});