import type {ReactNode} from "react";
import Link from "next/link";
import {useGetCategoriesQuery} from "@lib/graphql/generated.types";

const HeaderLink = ({url, title}: { url: string, title: string }) => (
    <div style={{border: '2px solid red', padding: '8px', borderTop: 'none',}}>
        <Link href={url}>{title}</Link>
    </div>)

const Layout = ({children}: { children: ReactNode }) => {
    const {error, loading, data} = useGetCategoriesQuery()
    if (error || loading) {
        return null
    }
    return <>
        <div style={{display: 'flex'}}>
            <HeaderLink url={`/`} title="Home"/>
            {data?.categories?.map((category) =>
                (<HeaderLink key={category?.slug} url={`/category/${category?.slug}`} title={category?.title}/>))
            }
        </div>
        <div style={{padding: '8px'}}>
            {children}
        </div>
    </>
}
export default Layout