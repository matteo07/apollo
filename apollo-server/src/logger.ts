import { ApolloServerPlugin } from '@apollo/server'

export const logger: ApolloServerPlugin = {
    // Fires whenever a GraphQL request is received from a client.
    async requestDidStart(requestContext) {
        if (requestContext.request.operationName === 'IntrospectionQuery') {
            return
        }
        const hasVar = Object.keys(requestContext.request.variables).length > 0
        process.stdout.write('QUERY: ' + requestContext.request.operationName)
        if (hasVar) {
            console.log(' VARS:' + JSON.stringify(requestContext.request.variables))
        }
    },
}
