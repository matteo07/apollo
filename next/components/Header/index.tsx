import { useRouter } from 'next/router'
import type { GetCategoriesQuery } from '@lib/graphql/operations.generated'
import { HeaderLink } from './HeaderLink'
import { headerStyle } from './styles'

type HeaderProps = { data: GetCategoriesQuery }
export const Header = ({ data }: HeaderProps) => {
    const { query, asPath } = useRouter()

    return (
        <div style={headerStyle}>
            <HeaderLink url={`/`} title='Home' active={asPath === '/'} />
            {data?.categories?.map((category) => (
                <HeaderLink
                    key={category?.slug}
                    url={`/category/${category?.slug}`}
                    title={category?.title}
                    active={(query.slug as string) === category?.slug}
                />
            ))}
        </div>
    )
}
