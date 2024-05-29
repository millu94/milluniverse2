import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send("helloo world");
});

app.listen(5000);