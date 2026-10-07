export default {
  // Served from https://two-go-testing.github.io/two-go-docs/, so every asset
  // and link needs the repository name as its base path.
  base: "/two-go-docs/",
  title: "two-go",
  description:
    "Documentation for two-go, a zero-dependency fluent service and API testing library for Node.",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "GitHub", link: "https://github.com/two-go-testing/two-go" }
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "Assertions", link: "/guide/assertions" }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/two-go-testing/two-go" }
    ]
  }
};
