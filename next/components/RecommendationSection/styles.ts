import type {CSSProperties} from "react";

export const wrapper: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: "16px"
}

export const title: CSSProperties = {fontSize: '22px', fontWeight: '600'}
export const description: CSSProperties = {fontSize: '18px', fontWeight: '400'}
export const booksSection: CSSProperties = {
    display: 'flex',
    gap: "4px",
    border: '1px dotted black',
    padding: '8px',
    margin: '4 px -8px',
    borderRadius: '4px'
}