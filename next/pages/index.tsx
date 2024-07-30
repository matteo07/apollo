import type { NextPage } from 'next';
import { gql, useQuery } from '@apollo/client';

const QUERY = gql`
    query Countries {
        countries {
            code
            name
            emoji
        }
    }
`;


const HomePage: NextPage = () => {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return <div className="grid">
    {data.countries.map((country) => (
      <div key={country.code} className="grid">
        <h3>{country.name}</h3>
        <p>
          {country.code} - {country.emoji}
        </p>
      </div>
    ))}
  </div>
}

export default HomePage;
