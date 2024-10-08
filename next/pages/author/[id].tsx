import { useRouter } from 'next/router'
import Error from 'next/error'
import { useGetAuthorQuery } from '@lib/graphql/generated.hooks'
import { Loader } from '@components/Loader'
import { BookCard } from '@components/BookCard'

const AuthorPage = () => {
    const { query } = useRouter()
    const { error, loading, data } = useGetAuthorQuery({
        variables: { authorId: Number.parseInt(query.id as string) },
        skip: !query.id,
    })

    if (loading) {
        return <Loader />
    }
    if (error || !data) {
        return <Error statusCode={404} />
    }

    return (
        <>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>
                AUTHOR: {data.author.firstName} {data.author.lastName}
            </h3>
            <p>
                <b>Bio:</b> {data.author.bio}
            </p>
            <p style={{ fontSize: '12px', fontWeight: '600', margin: '8px 0' }}>
                List of the books written by this author
            </p>
            <div style={{ display: 'flex', gap: '4px' }}>
                {data.author.books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </>
    )
}

export default AuthorPage
