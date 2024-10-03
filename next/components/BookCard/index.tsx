import Link from 'next/link'
import type { ItemFragmentFragment } from '@lib/graphql/generated.operations'
import { authorLink, authorWrapper, cardWrapper, spacer, title } from '@components/BookCard/styles'

export const BookCard = ({ book }: { book: ItemFragmentFragment }) => (
    <div key={book.id} style={cardWrapper}>
        <h3 style={title}>{book.title}</h3>
        <div style={spacer} />
        <Link href={`/author/${book.author.id}`}>
            <div style={authorWrapper}>
                Author:
                <h3 style={authorLink}>
                    {book.author.firstName} {book.author.lastName}{' '}
                </h3>
            </div>
        </Link>
    </div>
)
