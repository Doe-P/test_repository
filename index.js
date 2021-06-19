const express = require("Express");

const app = express();

const port = process.env.port || 5000;

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});