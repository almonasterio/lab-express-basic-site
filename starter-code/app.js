const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.static('public'));


app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
})

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');
})
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});
