import {useRouter} from "next/router";
import Error from "next/error";
import {useGetAuthorQuery} from "@lib/graphql/generated.types";
import {Loader} from "@components/Loader";

const AuthorPage = () => {
    const {query} = useRouter()
    const {error, loading, data} = useGetAuthorQuery({
        variables: {authorId: Number.parseInt(query.id as string)},
        skip: !query.id
    })

    if (loading) {
        return <Loader/>
    }
    if (error || !data) {
        return <Error statusCode={404}/>
    }

    return <>
        <h3 style={{fontSize: '20px', fontWeight: '600'}}>{data.author.firstName} {data.author.lastName}</h3>
        <p>
            Bio:<br/>{data.author.bio}
        </p>
        <div>
            {data.author.books.map((book) => <p key={book.title}>{book.title}</p>)}
        </div>
    </>
}

export default AuthorPage