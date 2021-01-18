module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("stringify", (obj) => JSON.stringify(obj, null, 2));
  eleventyConfig.addFilter("stripLeadingSlash", (urlPath = "") =>
    urlPath.startsWith("/") ? urlPath.slice(1) : urlPath
  );
  eleventyConfig.addLayoutAlias("base", "layouts/base.html");

  return {
    dir: {
      input: "src",
      output: "www",
    },
    pathPrefix: "/~pdehaan/",
  };
};
