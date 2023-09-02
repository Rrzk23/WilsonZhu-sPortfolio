// pratice of using fs from node to read from grade.txt and convert it in to a new form and 
// write it in outcome.txt.
const fs = require('fs');
const modifyOutCome = (data) => {
    fs.writeFile('./outcome.txt', data, function(err) {
        if(err) {
            throw err;
        }
        console.log("write success")
    }
    )
}
const readFileHandler = (err, data) => {
    if(err) {
        throw err;
    }
    console.log("The content in the file is: " + data.toString());
    
    let message = data.toString().replaceAll(' ','\n');
    message = message.replaceAll('=', ':');
    console.log("The content in the file is: \n" + message);
    modifyOutCome(message);
}

fs.readFile('./grade.txt', readFileHandler);






