import type {NextPage} from 'next';
import {useGetRecommendationsQuery} from '@lib/graphql/generated.types';
import {BookCard} from "@components/BookCard";


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
                {(recommendation?.items ?? []).map((item) => <BookCard key={item.id} book={item}/>)}
            </div>
        </div>)}
    </div>;
};

export default HomePage;
