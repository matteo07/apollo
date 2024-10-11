const express = require('express')
const app = express()
const port = 8092

const createCategory = (slug: string, title: string, description: string, items: number[]) => ({
    slug,
    title,
    description,
    items,
})

const createAuthor = (id: number, firstName: string, lastName: string, bio: string) => ({
    id,
    firstName,
    lastName,
    bio,
})

const categories = [
    createCategory('fantasy', 'Fantasy', 'These books are full of fantasy, much for you', [1, 2, 3]),
    createCategory('horror', 'Horror', 'These are books much scary, aaaaahh!', [4, 2, 5, 6]),
    createCategory('comedy', 'Comedy', 'These are funny, lol!', [3, 6]),
    createCategory('romance', 'Romance', 'These are much lovely!', [2, 4, 6]),
]

// BOOKS

app.get('/category', (req, res) => {
    console.log('GET /book', req.query)
    res.send([...categories])
})

app.get('/category/:slug', (req, res) => {
    console.log('GET /book:slug ' + JSON.stringify(req.params.slug))
    res.send(categories.filter((book) => book.slug === req.params.slug)[0])
})

const createRecommendation = (id: number, title: string, description: string, items: number[]) => ({
    id,
    title,
    description,
    items,
})

const recommendations = [
    createRecommendation(1, 'For you', "These books base on what you've read", [1, 2, 3, 4, 6, 7]),
    createRecommendation(2, 'Most popular', "These books base on what you've read", [2, 3, 5, 6]),
    createRecommendation(3, 'Most recent', 'These books have been published recently', [1, 4, 5, 6, 7]),
]

app.get('/recommendation', (req, res) => {
    console.log('GET /recommendations', req.query)
    res.send([...recommendations])
})

// ------------------------------- START SERVER -------------------------------
app.listen(port, () => {
    console.log(`Books app listening on port ${port}`)
})
