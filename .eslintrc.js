module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'sort-imports': [
          'error',
          { ignoreCase: true, ignoreDeclarationSort: true },
        ],
        'import/order': [
          'error',
          {
            groups: [
              ['external', 'builtin'],
              'internal',
              ['sibling', 'parent'],
              'index',
            ],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
              {
                pattern:
                  '{react-native,expo*,expo,@expo/**,expo-*,@expo-*,@expo-**,@expo-google-fonts/**,@expo/*,expo/*}',
                group: 'external',
                position: 'before',
              },
              {
                pattern:
                  '{native-base,styled-components,styled-components/native,styled-components/primitives,styled-components/**}',
                group: 'external',
                position: 'before',
              },

              {
                pattern:
                  '{react*,react-*,@react*,@react-*,@react*/**,@react-*/**,styled-components/**,}',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '{@context/**,@hooks/**,@services/**}',
                group: 'internal',
                position: 'before',
              },
              {
                pattern:
                  '{@icons/**,@images/**,assets/**,../assets/**,../../assets/**}',
                group: 'internal',
                position: 'before',
              },

              {
                pattern: '{@routes/**,@screens/**}',
                group: 'internal',
                position: 'before',
              },
              {
                pattern:
                  '{@atoms/**,@molecules/**,@organisms/**,components/**,../components/**,../../components/**}',
                group: 'internal',
                position: 'before',
              },
              {
                pattern:
                  '{@styles/**,@utils/**,utils/**,../utils/**,../../utils/**}',
                group: 'internal',
                position: 'before',
              },
              {
                pattern:
                  '{@dtos/**,@translations/**,@dto/**,dto/**,../dto/**,../../dto/**}',
                group: 'internal',
                position: 'before',
              },
              {
                pattern:
                  '{./styles,@theme/**,theme/**,../theme/**,../../theme/**}',
                group: 'internal',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['internal', 'react'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'desc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
  ],
};
