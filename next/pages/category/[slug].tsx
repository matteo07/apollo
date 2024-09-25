import {useRouter} from "next/router";
import Error from "next/error";
import {useGetCategoryQuery} from "@lib/graphql/generated.types";

const CategoryPage = () => {
    const {query} = useRouter()
    const {error, loading, data} = useGetCategoryQuery({
        variables: {categorySlug: query.slug as string},
        skip: !query.slug
    })

    if (loading) {
        return <>loading...</>
    }

    if (error || !query.slug) {
        return <Error statusCode={404}/>
    }
    
    return <>
        <h2>{data?.category?.title}</h2>
        <p>{data?.category?.description}</p>
    </>
}

export default CategoryPage