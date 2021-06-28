const program = require('commander');
const check = require('../commands/check');

program
    .command('price')
    .description('Check price of coins')
    .option(
        '--coin <type>',
        'Add Specific coin type in CSV format',
        'BTC,ETH,USDT'
    )
    .option(
        '--cur <currency>',
        'Change the currency',
        'INR'
    )
    .action((cmd) => check.price(cmd));
    
program.parse(process.argv);
