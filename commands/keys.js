const KeyManager = require('../lib/KeyManager');
const inquirer = require('inquirer');
const colors = require('colors');
const { isRequired } = require('../utils/validation');

const key = {

    async set() {

        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter Api Key'.yellow + ' (https://nomics.com)',
                validate: isRequired
            }
        ]);

        const key = keyManager.setKey(input.key);   

        if(key) console.log(`Api key set succesfully!  -- ${key}`.yellow);
    },
    show() {

        try{
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            
            console.log("Current API Key:", key.green);

            return key;

        }catch(err){ console.log(err.message.red);}
    },
    remove() {

        try{
            const keyManager = new KeyManager();
            keyManager.deleteKey();

            console.log("Key removed succesfully".blue);

            return;

        }catch(err){ console.log(err.message.red);}

    }
}

module.exports = key;