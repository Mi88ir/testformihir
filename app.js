const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    // We will be coding here
    res.send('Hello World').status(200)
});

app.listen(process.env.PORT, () => console.log(`Hello world app listening on port ${port}!`));