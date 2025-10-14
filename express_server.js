const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// route /some-html
app.get('/some-html', (req, res) => {
    res.send('<html lang="fr"><body><h1>Bonjour html</h1></body></html>')
})

// route /some-json
app.get('/some-json', (req, res) => {
    const person = {
        age: 22,
        nom: 'Jane'
    }
    res.json(person) // envoie l'objet au format JSON
})

// route /transaction
app.get('/transaction', (req, res) => {
    const transactions = [100, 2000, 3000]
    res.json(transactions)
})


app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`)
})