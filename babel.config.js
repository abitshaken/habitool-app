module.exports = (api) => {
  const isTest = api.env('test');
  if (isTest) {
    return {
      presets: ['@babel/preset-env', '@babel/preset-react'],

      plugins: ['@babel/plugin-transform-modules-commonjs'],
    };
  } else {
    return {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
        '@babel/preset-react',
      ],
    };
  }
};
