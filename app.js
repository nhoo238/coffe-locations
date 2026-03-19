const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

const items = [
    { id: 1, name: 'Quán cà phê About', hot: true },
    { id: 2, name: 'Quán cà phê Wavie', hot: false },
    { id: 3, name: 'Quán cà phê Marina', hot: true },
    { id: 4, name: 'Quán cà phê Honey', hot: false },
    { id: 5, name: 'Quán cà phê Nho', hot: true }
];

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/list', (req, res) => {
    res.render('list', { items });
});

app.get('/detail/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(x => x.id === id);
    res.render('detail', { item });
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});
