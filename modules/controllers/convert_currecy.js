
const { exchangeRates, currencies } = require('exchange-rates-api');
// const fx = require('fx');




module.exports = async (req, res) => {
    const { body } = req;

    fetch("https://open.er-api.com/v6/latest/" + body.currency_form).then(res => res.json()).then(respn => {

        const rate = respn.rates;
        if(rate) {
            res.statusMessagec = "Success Convert Currency From " + body.currency_form + " To " + body.currency_to;

            const rateValue = rate[body.currency_to];

            res.send({ result: Number(body.value) * Number(rateValue) });
        } else {
            res.status(500)
            res.statusMessagec = "Error " + "Currecy Rate Not Found";
            res.end();
        }
    }).catch(err => {
        res.status(500)
        res.statusMessagec = "Error " + err.toString();
        res.end();
    });
} 

