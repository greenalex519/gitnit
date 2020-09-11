const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');

clear(); //clears console

console.log( //displays a banner
    chalk.yellow(
        figlet.textSync('Gitnit', {horizontalLayout: 'full'})
    )
);

//check for existence of .git
if (files.directoryExists('.git')) {
    console.log(chalk.red('Already a Git repository!'));
    process.exit();
};