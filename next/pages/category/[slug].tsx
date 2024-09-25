import {useRouter} from "next/router";
import Error from "next/error";
import {useGetCategoryQuery} from "@lib/graphql/generated.types";
import {BookCard} from "@components/BookCard";

const CategoryPage = () => {
    const {query} = useRouter()
    const {error, loading, data} = useGetCategoryQuery({
        variables: {categorySlug: query.slug as string},
        skip: !query.slug
    })

    if (loading) {
        return <>loading...</>
    }

    if (error || !query.slug || !data) {
        return <Error statusCode={404}/>
    }

    return <>
        <h2>{data.category.title}</h2>
        <p>{data.category.description}</p>
        <div style={{display: 'flex', gap: "4px"}}>
            {(data.category?.items ?? []).map((item) => <BookCard key={item.id} book={item}/>)}
        </div>
    </>
}

export default CategoryPage