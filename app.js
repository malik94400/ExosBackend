const express = require('express')
const app = express()
const port = 3000

app.use(express.json())


app.post('/data', (req, res) => {
    console.log('Corps reçu :', req.body)
    res.json(req.body)
})

app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`)
})