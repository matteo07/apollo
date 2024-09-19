import type { NextPage } from 'next';
import { useGetBookQuery } from '@lib/graphql/generated.types';


const HomePage: NextPage = () => {
  const { data, loading, error } = useGetBookQuery({ variables: { bookId: 2 } });

  console.log({ data, loading, error });
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error || !data?.book) {
    console.error(error);
    return null;
  }

  return <div className="grid">
    {data.book.author?.firstName} {data.book.author?.lastName}
  </div>;
};

export default HomePage;
