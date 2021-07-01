module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  theme: "@vuepress/blog",
  themeConfig: {
    logo: "/assets/img/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/", target: "_self", rel: "" },
      { text: "External", link: "https://google.com" },
    ],
  },
};
