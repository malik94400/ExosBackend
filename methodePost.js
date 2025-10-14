const express = require('express')
const app = express()
const port = 3000

// Middleware pour permettre à Express de lire le JSON dans le corps
app.use(express.json())

app.post('/user', (req, res) => {
    console.log('Headers:', req.headers)
    console.log('Body:', req.body)

    res.send(`Utilisateur reçu : ${req.body.nom}, âge ${req.body.age}`)
})

app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`)
})