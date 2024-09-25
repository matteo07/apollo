import type {ReactNode} from "react";
import Link from "next/link";
import {useGetCategoriesQuery} from "@lib/graphql/generated.types";

const HeaderLink = ({url, title}: { url: string, title: string }) => (
    <div style={{border: '2px solid #453643', padding: '8px 16px',}}>
        <Link href={url} prefetch>{title}</Link>
    </div>)

const Layout = ({children}: { children: ReactNode }) => {
    const {error, loading, data} = useGetCategoriesQuery()
    if (error || loading) {
        return null
    }
    return <div style={{backgroundColor: '#453643'}}>

        <div style={{
            display: 'flex',
            width: "100%",
            margin: '0 auto',
            maxWidth: '768px',
            flexDirection: "column",
            padding: '4px 8px',
            backgroundColor: 'rgb(253, 255, 248)',
            minHeight: '100vh'
        }}>
            <div style={{display: 'flex', margin: "0 auto"}}>
                <HeaderLink url={`/`} title="Home"/>
                {data?.categories?.map((category) =>
                    (<HeaderLink key={category?.slug} url={`/category/${category?.slug}`} title={category?.title}/>))
                }
            </div>
            <div style={{padding: '8px'}}>
                {children}
            </div>
        </ div>
    </ div>
}
export default Layout