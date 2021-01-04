const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
var shortUrl = require('node-url-shortener');
 


app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/:url', (req, res) => {
    // We will be coding here
    shortUrl.short(req.params.url, function(err, url){
    console.log(url);
    res.send(url).status(200)

    });
});

app.listen(process.env.PORT, () => console.log(`Hello world app listening on port ${port}!`));