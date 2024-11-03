const config = {
  plugins: [
    require("@csstools/postcss-sass")({
      style: "expanded",
      sourceMap: true,
    }),
  ],
  syntax: "postcss-scss",
  map: { annotation: true },
};

module.exports = config;
