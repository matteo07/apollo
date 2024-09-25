import type {GetRecommendationsQuery} from "@lib/graphql/generated.types";
import {BookCard} from "@components/BookCard";

type RecommendationSectionProps = {
    recommendation: GetRecommendationsQuery["recommendations"][0]
}
export const RecommendationSection = ({recommendation}: RecommendationSectionProps) =>
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: "16px"
        }}>
        <h2 style={{fontSize: '22px', fontWeight: '600'}}>
            {recommendation?.title}
        </h2>
        <h4 style={{fontSize: '18px', fontWeight: '400'}}>
            {recommendation?.description}
        </h4>
        <div style={{
            display: 'flex',
            gap: "4px",
            border: '1px dotted black',
            padding: '8px',
            margin: '4 px -8px',
            borderRadius: '4px'
        }}>
            {(recommendation?.items ?? []).map((item) => <BookCard key={item.id} book={item}/>)}
        </div>
    </div>