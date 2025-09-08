const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../assets')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));



app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

app.get('/news', (req, res) => {
    res.render('blogs', { title: 'blogs' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});
app.get('/services', (req, res) => {
    res.render('services', { title: 'Services' });
});
app.get('/accounting-and-consultancy', (req, res) => {
    res.render('accounting-consultancy', { title: 'Accounting and Consultancy' });
});
app.get('/company-incorporation', (req, res) => {
    res.render('company-incorporation', { title: 'Company incorporation (UK & Non-UK)' });
});
app.get('/wealth-management', (req, res) => {
    res.render('wealth-management', { title: 'Wealth Management' });
});
app.get('/Trademark-Registration-And-Alcohol-Licensing', (req, res) => {
    res.render('Trademark-Registration-And-Alcohol-Licensing', { title: 'Trademark Registration And Alcohol-Licensing' });
});
app.get('/export-and-Import-licensing', (req, res) => {
    res.render('export-and-Import-licensing', { title: 'Export and import licensing' });
});
app.get('/building-financial-clarity', (req, res) => {
    res.render('building-financial-clarity', { title: 'Accounting & Consultancy: Building Financial Clarity' });
});
app.get('/your-gateway-to-growth', (req, res) => {
    res.render('your-gateway-to-growth', { title: 'Company Incorporation: Your Gateway to Growth' });
});
app.get('/secure-and-grow-your-assets', (req, res) => {
    res.render('secure-and-grow-your-assets', { title: 'Wealth Management: Secure & Grow Your Assets' });
});

app.use((req, res, next) => {
    res.status(404).render('error', { title: '404' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { title: '404' });
});



module.exports = app;