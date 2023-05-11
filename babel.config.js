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
            '@icons': './assets/icons',
            '@context': './src/context',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@images': './assets/images',
            '@services': './src/services',
            '@atoms': './src/components/atoms',
            '@organisms': './src/components/organisms',
            '@molecules': './src/components/molecules',
          },
        },
      ],
    ],
  };
};
