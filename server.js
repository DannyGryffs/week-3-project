import express from "express"
import { dirname, join } from "path"
import { fileURLToPath } from "url"


let app = express()

app.get('/', (req, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '/PublicFE/index.html'))
})

app.get('/js', (req, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '/PublicFE/main.js'))
})

app.get('/css', (req, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '/PublicFE/styles.css'))
})


app.listen(8081, () => {
    console.log('Server cruising on port 8081')
})