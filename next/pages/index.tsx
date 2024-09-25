import type {NextPage} from 'next';
import {useGetRecommendationsQuery} from '@lib/graphql/generated.types';
import {RecommendationSection} from "@components/RecommendationSection";
import {Loader} from "@components/Loader";


const HomePage: NextPage = () => {
    const {data, loading, error} = useGetRecommendationsQuery();

    if (loading) {
        return <Loader/>;
    }

    if (error || !data?.recommendations) {
        return null;
    }

    return <div className="grid">
        {data.recommendations.map((recommendation) =>
            <RecommendationSection key={recommendation?.id} recommendation={recommendation}/>)}
    </div>;
};

export default HomePage;
