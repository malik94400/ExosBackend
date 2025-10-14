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
// app.get('/some-json', (req, res) => {
//     const person = {
//         age: 22,
//         nom: 'Jane'
//     }
//     res.json(person)
// })

app.get('/some-json', (req, res) => {
    // 🔹 Afficher les informations de la requête
    console.log('--- Headers ---')
    console.log(req.headers)

    console.log('--- Body ---')
    console.log(req.body)

    const person = { age: 22, nom: 'Jane' }
    res.json(person)
})

// route /transaction
app.get('/transaction', (req, res) => {
    const transactions = [100, 2000, 3000]
    res.json(transactions)
})

// route GET /exo-query-string
app.get('/exo-query-string', (req, res) => {
    console.log(req.query)

    const age = req.query.age

    // si un âge est fourni, on le renvoie dans une balise <h1>
    if (age) {
        res.send(`<h1>Age de la personne : ${age}</h1>`)
    } else {
        res.send('hello')
    }
})


// Route avec paramètre
app.get('/get-user/:userId', (req, res) => {
    console.log(req.params)
    const userId = req.params.userId
    res.send(`<h1>Utilisateur avec ID : ${userId}</h1>`)
})




app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`)
})