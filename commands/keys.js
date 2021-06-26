const KeyManager = require('../lib/KeyManager');
const inquirer = require('inquirer');
const colors = require('colors');

const key = {

    async set() {

        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter Api Key'.green + 'https://nomics.com'
            }
        ]);

        const key = keyManager.setKey(input.key);

        if(key) console.log(`Api key set succesfully!  -- ${key}`);
    },
    show() {
        console.log("show key method");
    },
    remove() {
        console.log("remove key method");
    }
}

module.exports = key;