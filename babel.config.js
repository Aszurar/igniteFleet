module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.ts', '.tsx', '.json'],
          alias: {
            '@dtos': './src/dtos',
            '@hooks': './src/hooks',
            '@utils': './src/utils',
            '@types': './src/types',
            '@theme': './src/theme',
            '@routes': './src/routes',
            '@styles': './src/styles',
            '@icons': './src/assets/icons',
            '@context': './src/context',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@images': './src/assets/images',
            '@services': './src/services',
            '@atoms': './src/components/atoms',
            '@organisms': './src/components/organisms',
            '@molecules': './src/components/molecules',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          allowUndefined: false,
        },
      ],
    ],
  };
};
