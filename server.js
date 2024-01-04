import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";


let app = express();

app.use(express.json());

let db = [];

app.get('/', (req, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '/PublicFE/index.html'));
});

app.get('/js', (req, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '/PublicFE/main.js'));
});

app.get('/css', (req, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '/PublicFE/styles.css'));
});

app.get('/notes', (req, res) => {
    res.status(200).send(db);
})

app.post('/create-note', (req, res) => {
    db.push(req.body);
    res.status(200).send(db);
});

app.delete('/delete-note', (req, res) => {
    let id = req.query.id
    for (let i = 0; i < db.length; i++) {
        if (db[i].id === id){
            db.splice(i, 1)
            i--
        }
    }
    res.status(200).send(db)
})


app.listen(8081, () => {
    console.log('Server cruising on port 8081');
});