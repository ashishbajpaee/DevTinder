const express = require('express');

const app = express();

// app.use((req, res) => {
//     res.send("Hello from the server");
// });

app.get('/hello', (req, res) => {
    res.send("Pranam kar rahe hai");
});

app.get('/', (req, res) => {
    res.send("Dashboard hai ye");
});

app.get('/login', (req, res) => {
    res.send("login kar rahe hai");
});

app.listen(7777, () => {
    console.log("Server is running on port 7777...");
});
