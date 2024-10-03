import { ApolloServer } from '@apollo/server'
import { nextHandler } from '@lib/nextHandler'
import { schema } from '@lib/graphql/schema'
import { resolvers } from '@lib/graphql/resolvers'

const server = new ApolloServer({ typeDefs: schema, resolvers })

export default nextHandler(server)
