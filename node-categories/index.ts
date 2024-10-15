const express = require('express')
const app = express()
const port = 8092

const log = (message: string) => console.log(`* CATEGORY SERVICE CALLED * ${message}`)

const createCategory = (slug: string, title: string, description: string, items: number[]) => ({
    slug,
    title,
    description,
    items,
})

const categories = [
    createCategory('fantasy', 'Fantasy', 'These books are full of fantasy, much for you', [1, 2, 3]),
    createCategory('horror', 'Horror', 'These are books much scary, aaaaahh!', [4, 2, 5, 6]),
    createCategory('comedy', 'Comedy', 'These are funny, lol!', [3, 6]),
    createCategory('romance', 'Romance', 'These are much lovely!', [2, 4, 6]),
]

// BOOKS

app.get('/category', (req, res) => {
    log('GET /category')
    res.send([...categories])
})

app.get('/category/:slug', (req, res) => {
    log('GET /category:slug ' + JSON.stringify(req.params.slug))
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
    log('GET /recommendations')
    res.send([...recommendations])
})

// ------------------------------- START SERVER -------------------------------
app.listen(port, () => {
    console.log(`Categorization service listening on port ${port}`)
})
