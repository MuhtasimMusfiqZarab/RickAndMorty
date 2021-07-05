module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  webpack: (config, options) => {
    config.module.rules.push({
      //this rule is for importing graphql files
      rules: [
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader',
        },
      ],
    });

    return config;
  },
};
