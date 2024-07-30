import type { AuthorByIdArgument, Book, BookByIdArgument, RootValue } from '@lib/graphql/types';
import { REST_BASE_URL } from '@lib/graphql/types';

const getData = async (path: string) => await (await fetch(REST_BASE_URL + path)).json();
export const booksResolver = async (_: RootValue) => await getData('books');

export const bookByIdResolver = async (_: RootValue, { id }: BookByIdArgument): Promise<Book | null> => await getData(`book/${id}`);
export const authorByIdResolver = async (_: RootValue, { id }: AuthorByIdArgument): Promise<Book | null> => await getData(`author/${id}`);