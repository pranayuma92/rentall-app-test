const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'app')));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

//Port to listen
app.listen(port, () => console.log(`Listening on port ${port}`));