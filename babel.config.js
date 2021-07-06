module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-graphql',
    'babel-plugin-inline-import',
    {
      extensions: ['.svg'],
    },
  ],
};
