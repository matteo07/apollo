import type { CodegenConfig } from '@graphql-codegen/cli'
import { APOLLO_SERVER_URL } from '../ENV'

export const GENERATED_TYPES_PATH = 'lib/graphql/generated.types'
export const GENERATED_TYPES_PATH_TS = GENERATED_TYPES_PATH + '.ts'

export const GENERATED_OPERATION_PATH = 'lib/graphql/generated.operations'
export const GENERATED_OPERATION_PATH_TS = GENERATED_OPERATION_PATH + '.ts'

export const GENERATED_TYPE_NAME = `GeneratedTypes`
const IMPORT_LINE = `import type * as ${GENERATED_TYPE_NAME} from '${GENERATED_OPERATION_PATH}';`

const config: CodegenConfig = {
    schema: APOLLO_SERVER_URL,
    documents: ['**/*.graphql'],
    ignoreNoDocuments: true,
    generates: {
        [GENERATED_TYPES_PATH_TS]: {
            plugins: ['typescript'],
            config: { includeDirectives: true },
        },
        [GENERATED_OPERATION_PATH_TS]: {
            plugins: ['typescript-operations'],
            config: {
                includeDirectives: true,
                // preResolveTypes: false,
                useTypeImports: true,
            },
            preset: 'import-types',
            presetConfig: { typesPath: GENERATED_TYPES_PATH },
        },
        'lib/graphql/generated.hooks.ts': {
            plugins: ['typescript-react-apollo', { add: { content: IMPORT_LINE } }],
            config: {
                includeDirectives: true,
                importOperationTypesFrom: GENERATED_TYPE_NAME,
                useTypeImports: true,
            },
        },
        'lib/graphql/generated.mocks.ts': {
            plugins: ['typescript-mock-data'],
            config: { typesFile: GENERATED_TYPES_PATH_TS },
        },
    },
    hooks: {
        afterAllFileWrite: ['prettier --write'],
    },
}

export default config
