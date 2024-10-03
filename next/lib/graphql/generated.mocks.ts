import { Author, Book, Category, Query, Recommendation } from 'lib/graphql/generated.types'

export const anAuthor = (overrides?: Partial<Author>): Author => {
    return {
        bio: overrides && overrides.hasOwnProperty('bio') ? overrides.bio! : 'quam',
        books: overrides && overrides.hasOwnProperty('books') ? overrides.books! : [aBook()],
        firstName: overrides && overrides.hasOwnProperty('firstName') ? overrides.firstName! : 'termes',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 57,
        lastName: overrides && overrides.hasOwnProperty('lastName') ? overrides.lastName! : 'assentator',
    }
}

export const aBook = (overrides?: Partial<Book>): Book => {
    return {
        author: overrides && overrides.hasOwnProperty('author') ? overrides.author! : anAuthor(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 2537,
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'vulgaris',
    }
}

export const aCategory = (overrides?: Partial<Category>): Category => {
    return {
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'vorax',
        items: overrides && overrides.hasOwnProperty('items') ? overrides.items! : [aBook()],
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'demens',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'vitiosus',
    }
}

export const aQuery = (overrides?: Partial<Query>): Query => {
    return {
        author: overrides && overrides.hasOwnProperty('author') ? overrides.author! : anAuthor(),
        book: overrides && overrides.hasOwnProperty('book') ? overrides.book! : aBook(),
        books: overrides && overrides.hasOwnProperty('books') ? overrides.books! : [aBook()],
        categories: overrides && overrides.hasOwnProperty('categories') ? overrides.categories! : [aCategory()],
        category: overrides && overrides.hasOwnProperty('category') ? overrides.category! : aCategory(),
        recommendations:
            overrides && overrides.hasOwnProperty('recommendations') ? overrides.recommendations! : [aRecommendation()],
    }
}

export const aRecommendation = (overrides?: Partial<Recommendation>): Recommendation => {
    return {
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'illo',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 6456,
        items: overrides && overrides.hasOwnProperty('items') ? overrides.items! : [aBook()],
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'venia',
    }
}
