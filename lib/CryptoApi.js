const axios = require('axios');
const colors = require('colors');

class CryptoApi {

    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
    }

    async getPriceData(coinOption, currOption){

        try{

            // Formatter for currencies
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: currOption
            });

            const res = await axios.get(
                `${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${currOption}`    
            );

            let output = '';

            res.data.forEach(coin => {
                output += `Coin: ${coin.symbol.green} (${coin.name}) | Price: ${formatter.format(coin.price).
                    red} | Rank: ${coin.rank.yellow}\n`
            });

            return output;

        } catch(err){
            handleApiError(err);
        }
    }
}

function handleApiError(err){
    if(err.response.status === 401){
        throw new Error('Your API Key is invalid -- Go to https://nomics.com');
    } else if(err.response.status === 404){
        throw new Error('Your API is not responding');
    }else{
        throw new Error('Oops.. Something went wrong');
    }
}

module.exports = CryptoApi;