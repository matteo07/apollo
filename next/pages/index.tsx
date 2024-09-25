import type {NextPage} from 'next';
import {useGetRecommendationsQuery} from '@lib/graphql/generated.types';


const HomePage: NextPage = () => {
    const {data, loading, error} = useGetRecommendationsQuery();

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error || !data?.recommendations) {
        return null;
    }

    return <div className="grid">
        {data.recommendations.map((recommendation) => <div key={recommendation?.id}
                                                           style={{display: 'flex', flexDirection: 'column'}}>
            <h2>
                {recommendation?.title}
            </h2>
            <h4>
                {recommendation?.description}
            </h4>
            <div style={{display: 'flex', gap: "4px"}}>
                {(recommendation?.items ?? []).map((item) => <div key={item.id}
                                                                  style={{
                                                                      display: 'flex',
                                                                      flexDirection: 'column',
                                                                      border: '1px solid red',
                                                                      padding: "4px"
                                                                  }}>
                    <h3>Book title: {item.title}</h3>
                    <h3>Author: {item.author.firstName} {item.author.lastName}</h3>
                </div>)}
            </div>
        </div>)}
    </div>;
};

export default HomePage;
