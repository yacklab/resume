const { override, useBabelRc } = require("customize-cra");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = override(useBabelRc(), config => {
  config.plugins = (config.plugins || []).concat(new BundleAnalyzerPlugin());
  return config;
});

// ile sizes after gzip:

//   166.6 KB  build/static/js/2.ae41079b.chunk.js
//   16.5 KB   build/static/js/main.b54cf512.chunk.js
//   770 B     build/static/js/runtime-main.80a4f90a.js
//   257 B     build/static/css/main.7b8c899c.chunk.css
