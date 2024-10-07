import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { resolvers } from './resolvers.js'
import { schema } from './schema.js'
import { logger } from './logger.js'

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    plugins: [logger],
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 3001 },
})

console.log(`🚀  Apollo GraphQL Server ready at: ${url}`)
