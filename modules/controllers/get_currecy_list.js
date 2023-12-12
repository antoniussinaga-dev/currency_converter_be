

const currencies = [
    { name: 'Australian Dollar', code: 'AUD' },
    { name: 'Brazilian Real', code: 'BRL' },
    { name: 'British Pound Sterline', code: 'GBP' },
    { name: 'Bulgarian Lev', code: 'BGN' },
    { name: 'Canadian Dollar', code: 'CAD' },
    { name: 'Chinese Yuan Renminbi', code: 'CNY' },
    { name: 'Croatian Kuna', code: 'HRK' },
    { name: 'Czech Koruna', code: 'CZK' },
    { name: 'Danish Krone', code: 'DKK' },
    { name: 'Euro', code: 'EUR' },
    { name: 'Hong Kong Dollar', code: 'HKD' },
    { name: 'Hungarian Forint', code: 'HUF' },
    { name: 'Icelandic Krona', code: 'ISK' },
    { name: 'Indonesian Rupiah', code: 'IDR' },
    { name: 'Indian Rupee', code: 'INR' },
    { name: 'Israeli Shekel', code: 'ILS' },
    { name: 'Japanese Yen', code: 'JPY' },
    { name: 'Malaysian Ringgit', code: 'MYR' },
    { name: 'Mexican Peso', code: 'MXN' },
    { name: 'New Zealand Dollar', code: 'NZD' },
    { name: 'Norwegian Krone', code: 'NOK' },
    { name: 'Philippine Peso', code: 'PHP' },
    { name: 'Polish Zloty', code: 'PLN' },
    { name: 'Romanian Leu', code: 'RON' },
    { name: 'Russian Rouble', code: 'RUB' },
    { name: 'Singapore Dollar', code: 'SGD' },
    { name: 'South African Rand', code: 'ZAR' },
    { name: 'South Korean Won', code: 'KRW' },
    { name: 'Swedish Krona', code: 'SEK' },
    { name: 'Swiss Franc', code: 'CHF' },
    { name: 'Thai Baht', code: 'THB' },
    { name: 'Turkish Lira', code: 'TRY' },
    { name: 'US Dollar', code: 'USD' }
  ];

module.exports = (req, res) => {


    res.statusMessage = "Success Get Alll Currency";
    res.send({ currencies });
    res.end();
} 
