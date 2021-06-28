const KeyManager = require('../lib/KeyManager');
const CryptoApi = require('../lib/CryptoApi');

const check = {
    async price(cmd){
    
        try{

            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            const api = new CryptoApi(key);

            const priceData = await api.getPriceData(cmd.coin, cmd.cur);

            console.log(priceData);

        }catch(err){
            console.log(err.message.red);
        }
    
    }
}

module.exports = check;