import { useRouter } from 'next/router'
import Error from 'next/error'
import { useGetBookQuery } from '@lib/graphql/generated.hooks'
import { Loader } from '@components/Loader'

const AuthorPage = () => {
    const { query } = useRouter()
    const { error, loading, data } = useGetBookQuery({
        variables: { bookId: Number.parseInt(query.id as string) },
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
            <h3 style={{ fontSize: '20px', fontWeight: '600' }}>{data.book.title}</h3>
            <p>
                Author:
                <br />
                {data.book.author.firstName} {data.book.author.lastName}
            </p>
        </>
    )
}

export default AuthorPage
