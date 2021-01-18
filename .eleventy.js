module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("stringify", obj => JSON.stringify(obj, null, 2));
  eleventyConfig.addLayoutAlias("base", "layouts/base.html");

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
