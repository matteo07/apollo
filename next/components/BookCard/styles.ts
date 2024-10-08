import type { CSSProperties } from 'react'

export const cardWrapper: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid rgb(104, 145, 3)',
    borderRadius: '4px',
    backgroundColor: 'white',
    padding: '8px 8px',
}

export const title: CSSProperties = {
    display: 'inline-block',
    fontWeight: 600,
    cursor: 'pointer',
}

export const authorLink: CSSProperties = {
    cursor: 'pointer',
    color: '#7e637a',
    fontWeight: 600,
}

export const spacer: CSSProperties = { height: '12px' }

export const authorWrapper: CSSProperties = { display: 'inline-block' }
