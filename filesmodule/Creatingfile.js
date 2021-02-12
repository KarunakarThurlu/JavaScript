const fs = require('fs')

fs.writeFileSync('./sample.txt', 'Hello World fromNodeJs', (error, foo) => {
    if (error)
        console.log(error);
});