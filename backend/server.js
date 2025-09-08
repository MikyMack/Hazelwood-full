
const app = require('./app');  

const PORT = process.env.PORT || 3012;


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
