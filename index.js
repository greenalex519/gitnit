const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');
const inquirer = require('./lib/inquirer'); //for testing 

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

//run questions defined in inquirer
const run = async () => {
    const credentials = await inquirer.askGithubCredentials();
    console.log(credentials);
};

run();