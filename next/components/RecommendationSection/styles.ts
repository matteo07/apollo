import type { CSSProperties } from 'react'

export const wrapper: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '16px',
}

export const title: CSSProperties = { fontSize: '22px', fontWeight: '600' }
export const description: CSSProperties = { fontSize: '18px', fontWeight: '400' }
export const booksSection: CSSProperties = {
    display: 'flex',
    gap: '4px',
    backgroundColor: 'hsl(77.1, 93.3%, 88.2%)',
    border: '4px dotted rgb(104, 145, 3)',
    padding: '16px 8px',
    margin: '12px -8px 4px -8px',
    borderRadius: '4px',
}
