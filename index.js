/* 
1. Get user input; inquirer npm package
2. Convet URL to QR img; qr-image npm
3. Save user input into a created txt file; native fs node module
*/

/* done: install node.js, run npm i inquirer qr-image */

/* in package.json, 1) add type: module, 2) run npm init-y */

/*check documentation and paste required code*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([{
        message: 'Type in your URL: ', 
        name: 'URL'}
    ])
    .then((answers) => {
        /* console.log(answers); */
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_img.png'));

        fs.writeFile('URL.txt', url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        }); 
    })
    .catch((error) => {
        if (error.isTtyError) {
        } else {
        }
    })
