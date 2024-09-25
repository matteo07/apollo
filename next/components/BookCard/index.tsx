import type {ItemFragmentFragment} from "@lib/graphql/generated.types";

export const BookCard = ({book}: { book: ItemFragmentFragment }) => (<div key={book.id}
                                                                          style={{
                                                                              display: 'flex',
                                                                              flexDirection: 'column',
                                                                              border: '2px solid rgb(104, 145, 3)',
                                                                              borderRadius: '4px',
                                                                              backgroundColor: 'white',
                                                                              padding: "8px 8px"
                                                                          }}>
    <h3>Book title: {book.title}</h3>
    <h3>Author: {book.author.firstName} {book.author.lastName}</h3>
</div>)
