// 223ca8c4b094accab5f6d6eb9b24a3e2e960465a - API KEY
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