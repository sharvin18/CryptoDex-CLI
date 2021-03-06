const Configstore = require('configstore');
const pkg = require('../package.json');

class KeyManager{

    constructor(){
        this.config = new Configstore(pkg.name);
    }

    setKey(key){
        this.config.set('apiKey', key);
        return key;
    }

    getKey(){
        const key = this.config.get('apiKey');

        if(!key){
            throw new Error('No Api key found! - Get an Api key at https://nomics.com');
        }

        return key;
    }

    deleteKey(){
        const key = this.config.get('apiKey');

        if(!key){
            throw new Error('No Api key found! - Get an Api key at https://nomics.com');
        }

        this.config.delete('apiKey');

        return;
    }
}

module.exports = KeyManager;