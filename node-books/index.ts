const express = require('express')
const app = express()
const port = 8091

const log = (message: string) => console.log(`* BOOK SERVICE CALLED * ${message}`)

const createBook = (id: number, author: number, title: string, year: number) => ({
    id,
    author,
    title,
    year,
})

const createAuthor = (id: number, firstName: string, lastName: string, bio: string) => ({
    id,
    firstName,
    lastName,
    bio,
})

const books = [
    createBook(1, 1, 'The Awakening', 1899),
    createBook(2, 1, 'The Storm', 1902),
    createBook(3, 3, 'Libro', 2020),
    createBook(4, 3, 'Libro 2', 2022),
    createBook(5, 1, 'Lmt enterprise', 1903),
    createBook(6, 2, 'Harry Potter', 1997),
    createBook(7, 2, 'Fantastic beasts', 2001),
    createBook(8, 1, 'Invisible', 1904),
]

// BOOKS

app.get('/book', (req, res) => {
    log(`GET /book ${JSON.stringify(req.query)}`)
    if (req.query.authorId) {
        res.send(books.filter((book) => book.author.toString() === req.query.authorId))
        return
    }
    if (req.query.ids) {
        res.send(books.filter((book) => req.query.ids.split(',').includes(book.author.toString())))
        return
    }
    res.send([...books])
})

app.get('/book/:id', (req, res) => {
    log('GET /book:id ' + JSON.stringify(req.params.id))
    res.send(books.filter((book) => book.id.toString() === req.params.id)[0])
})

// AUTHOR

const authors = [
    createAuthor(
        1,
        'Kate',
        'Chopin',
        'Kate Chopin (1850–1904) was an American author known for her pioneering short stories and novels, particularly The Awakening (1899).',
    ),
    createAuthor(
        2,
        'J.K.',
        'Rowling',
        'Joanne Rowling was born on July 31, 1965, in Yate, near Bristol, England. She grew up in England and in Chepstow, Gwent, Wales. She loved reading and wrote her first story at the age of six.',
    ),
    createAuthor(
        3,
        'Maccio',
        'Capatonda',
        'Marcello Macchia (born 2 August 1978) is an Italian comedian, actor, writer and filmmaker. He is best known by his stage name Maccio Capatonda',
    ),
]

app.get('/author', (req, res) => {
    log('GET /author')
    res.send([...authors])
})

app.get('/author/:id', (req, res) => {
    log('GET /author/:id ' + JSON.stringify(req.params.id))
    res.send(authors.filter((author) => author.id.toString() === req.params.id)[0])
})

// ------------------------------- START SERVER -------------------------------
app.listen(port, () => {
    log(`Books app listening on port ${port}`)
})
