

module.exports = async (req, res) => {
    const { body } = req;
    const base_currency = body.base ? body.base : "USD";

    fetch("https://open.er-api.com/v6/latest/" + base_currency).then(res => res.json()).then(respn => {
        res.statusMessagec = "Success Get Rate With Base Currrency " + base_currency;
        res.send({ ...respn, rates: Object.keys(respn.rates).map(item => {
            return { id: Math.random(), code: item, value: respn.rates[item] }
        }) });
    }).catch(err => {
        console.log(err)
        res.status(500)
        res.statusMessagec = "Error " + err.toString();
        res.end();
    });

}