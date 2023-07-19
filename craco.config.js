const path = require('path');
const Cracolessplugin = require('craco-less');
module.exports = {
  plugins: [
    {
      plugin: Cracolessplugin,
    },
  ],
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
