
let express = require('express');

let app = express();

const PORT = process.env.PORT || 3000;

//Redirect any https request to http
app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
})

app.use(express.static('build'));

app.listen(PORT, () => {
    console.log("Server running at ", PORT);
})
