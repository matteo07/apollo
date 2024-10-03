import type { CSSProperties } from 'react'

export const headerStyle: CSSProperties = { display: 'flex', margin: '0 auto' }

export const sharedLinkStyle = {
    border: '2px solid',
    padding: '8px 16px',
    transition: 'background-color 600ms linear',
}

export const activeLinkStyle = {
    ...sharedLinkStyle,
    borderColor: 'rgb(104, 145, 3)',
    color: 'rgb(104, 145, 3)',
    backgroundColor: 'black',
}
export const nonActiveLinkStyle = {
    ...sharedLinkStyle,
    borderColor: '#453643',
}
