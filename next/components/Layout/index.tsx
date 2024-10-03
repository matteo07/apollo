import type { ReactNode } from 'react'
import { useGetCategoriesQuery } from '@lib/graphql/hooks.generated'
import { Header } from '@components/Header'
import { pageBgStyle, pageContentStyle } from './styles'

const Layout = ({ children }: { children: ReactNode }) => {
    const { error, loading, data } = useGetCategoriesQuery()
    if (error || loading || !data) {
        return null
    }

    return (
        <div style={pageBgStyle}>
            <div style={pageContentStyle}>
                <Header data={data} />
                <div style={{ padding: '8px' }}>{children}</div>
            </div>
        </div>
    )
}

export default Layout
