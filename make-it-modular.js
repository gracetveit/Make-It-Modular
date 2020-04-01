const mymodule = require('./mymodule.js')

mymodule(process.argv[2], process.argv[3], (err, data) => {
    /*
        In the upper callback, it checks if it was passed an error. If not, it
        iterates through the list it was passed, printing any entries inside.
    */
    if (err) {return console.error('Error: ', err)}
    for (let i of data) {
        console.log(i);
    }
})