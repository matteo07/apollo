import type {ReactNode} from "react";
import Link from "next/link";
import {useGetCategoriesQuery} from "@lib/graphql/generated.types";

const Layout = ({children}: { children: ReactNode }) => {
    const {error, loading, data} = useGetCategoriesQuery()
    if (error || loading) {
        return null
    }
    return <>
        <>{data?.categories?.map((category) =>
            <Link key={category?.slug} href={`/category/${category?.slug}`}>{category?.title}</Link>)}
        </>
        {children}
    </>
}
export default Layout