const program = require('commander');
const key = require('../commands/keys');

program
    .command('set')
    .description('Set API key -- Get at http://nomics.com')
    .action(key.set);

program
    .command('show')
    .description('Display API key')
    .action(key.show);

program
    .command('remove')
    .description('Remove API Key')
    .action(key.remove);

program.parse(process.argv);