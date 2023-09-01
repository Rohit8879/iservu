const express = require('express')
const app = express()




app.listen(4000, (err) => {
    if (err) return console.log(err);
    console.log("server running at port 4000!");
})
