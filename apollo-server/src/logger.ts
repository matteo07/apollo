import { ApolloServerPlugin } from '@apollo/server'

export const logger: ApolloServerPlugin = {
    async requestDidStart(requestContext) {
        try {
            if (requestContext?.request?.operationName === 'IntrospectionQuery') {
                return
            }
            const hasVar = Object.keys(requestContext.request.variables).length > 0
            process.stdout.write('QUERY: ' + requestContext.request.operationName)
            console.log(hasVar ? ' VARS:' + JSON.stringify(requestContext.request.variables) : '')
        } catch (e) {}
    },
}
