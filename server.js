const express = require('express');
require('dotenv').config({path: './config/.env'})
const app = express();


app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})