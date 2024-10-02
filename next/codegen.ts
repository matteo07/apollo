import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3000/api/graphql',
  documents: ['**/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    'lib/graphql/generated.types.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        includeDirectives: true
      }
    }
  }
};

export default config;