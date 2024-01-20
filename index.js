/*
- inquirer npm to get user input 
qr image to trn the user entered URL into QR code. 
create a text file to save user input using native fs node module
*/

import  inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
.prompt([
    {message:"Type in your URL",
    name:"URL"}
])
.then((answers)=>{    
    const url= answers.URL; //user's input stored in answers object under key URL
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr.png'));
 
})
.catch((error) => {
    if (error.isTtyError) {
      "Prompt couldn't be rendered in the current environment"
    } else {
      "Something else went wrong"
    }
  });