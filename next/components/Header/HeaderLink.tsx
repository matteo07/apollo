import Link from 'next/link'
import { activeLinkStyle, nonActiveLinkStyle } from './styles'

type HeaderLinkProps = { url: string; title: string; active?: boolean }

export const HeaderLink = ({ url, title, active }: HeaderLinkProps) => (
    <div style={active ? activeLinkStyle : nonActiveLinkStyle}>
        <Link href={url}>{title}</Link>
    </div>
)
