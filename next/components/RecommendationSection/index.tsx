import type { GetRecommendationsQuery } from '@lib/graphql/generated.operations'
import { BookCard } from '@components/BookCard'
import { booksSection, description, title, wrapper } from './styles'

type RecommendationSectionProps = {
    recommendation: GetRecommendationsQuery['recommendations'][0]
}
export const RecommendationSection = ({ recommendation }: RecommendationSectionProps) => (
    <div style={wrapper}>
        <h2 style={title}>{recommendation?.title}</h2>
        <h4 style={description}>{recommendation?.description}</h4>
        <div style={booksSection}>
            {(recommendation?.items ?? []).map((item) => (
                <BookCard key={item.id} book={item} />
            ))}
        </div>
    </div>
)
