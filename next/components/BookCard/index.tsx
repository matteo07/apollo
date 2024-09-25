import type {ItemFragmentFragment} from "@lib/graphql/generated.types";

export const BookCard = ({book}: { book: ItemFragmentFragment }) => (<div key={book.id}
                                                                          style={{
                                                                              display: 'flex',
                                                                              flexDirection: 'column',
                                                                              border: '1px solid red',
                                                                              padding: "4px"
                                                                          }}>
    <h3>Book title: {book.title}</h3>
    <h3>Author: {book.author.firstName} {book.author.lastName}</h3>
</div>)
