import type {CodegenConfig} from '@graphql-codegen/cli';

export const GENERATED_TYPES_PATH = 'lib/graphql/types.generated'
export const GENERATED_TYPES_PATH_TS = 'lib/graphql/types.generated' + '.ts'
export const GENERATED_TYPE_NAME = `GeneratedTypes`
const IMPORT_LINE = `import type * as ${GENERATED_TYPE_NAME} from 'lib/graphql/operations.generated';`

const config: CodegenConfig = {
    schema: 'http://localhost:3000/api/graphql',
    documents: ['**/*.graphql'],
    ignoreNoDocuments: true,
    generates: {
        [GENERATED_TYPES_PATH_TS]: {
            plugins: ['typescript'],
            config: {includeDirectives: true}
        },
        'lib/graphql/operations.generated.ts': {
            preset: 'import-types',
            plugins: ['typescript-operations'],
            config: {includeDirectives: true, useTypeImports: true},
            presetConfig: {typesPath: GENERATED_TYPES_PATH},
        },
        'lib/graphql/hooks.generated.ts': {
            plugins: ['typescript', 'typescript-react-apollo', {add: {content: IMPORT_LINE}}],
            config: {
                includeDirectives: true,
                importOperationTypesFrom: GENERATED_TYPE_NAME,
                useTypeImports: true,
            },
        },
        'mock.generated.ts': {
            plugins: ['typescript-mock-data'],
            config: {typesFile: GENERATED_TYPES_PATH_TS}
        },
    },
};

export default config;