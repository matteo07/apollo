import type { CodegenConfig } from '@graphql-codegen/cli'

export const GENERATED_TYPE_NAME = `GeneratedTypes`
export const GENERATED_TYPES_PATH = 'lib/graphql/types.generated.ts'
const IMPORT_LINE = `import type * as ${GENERATED_TYPE_NAME}} from "${GENERATED_TYPES_PATH}";`

const config: CodegenConfig = {
    schema: 'http://localhost:3000/api/graphql',
    documents: ['**/*.graphql'],
    ignoreNoDocuments: true,
    generates: {
        [GENERATED_TYPES_PATH]: {
            plugins: ['typescript', 'typescript-operations', { add: { content: IMPORT_LINE } }],
            config: { includeDirectives: true },
        },
        'lib/graphql/hooks.generated.ts': {
            plugins: ['typescript', 'typescript-react-apollo'],
            config: {
                includeDirectives: true,
                importOperationTypesFrom: 'GeneratedTypes',
                useTypeImports: true,
            },
        },
        'mock.generated.ts': {
            plugins: ['typescript-mock-data'],
            config: { typesFile: GENERATED_TYPES_PATH },
        },
    },
}

export default config
