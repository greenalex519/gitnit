//basic file management
const fs = require('fs');
const path = require('path');

module.exports = {
    //get current directory to get default repo name
    getCurrentDirectoryBase: () => {
        return path.basename(process.cwd());
    },
    //determine existence of .git file
    directoryExists: (filePath) => {
        return fs.existsSync(filePath);
    }
};