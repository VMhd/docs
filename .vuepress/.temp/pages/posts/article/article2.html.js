export const data = {
  "key": "v-0538ff2f",
  "path": "/posts/article/article2.html",
  "title": "Article 2",
  "lang": "en-US",
  "frontmatter": {
    "icon": "edit",
    "date": "2022-01-02T00:00:00.000Z",
    "category": [
      "CategoryA"
    ],
    "tag": [
      "tag A",
      "tag B"
    ],
    "star": true,
    "summary": "Article 2 Heading 2 Here is the content. Heading 3 Here is the content.",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/posts/article/article2.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "Theme Demo"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "Article 2"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "en-US"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "tag A"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "tag B"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2022-01-02T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Heading 2",
      "slug": "heading-2",
      "children": [
        {
          "level": 3,
          "title": "Heading 3",
          "slug": "heading-3",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 0.05,
    "words": 14
  },
  "filePathRelative": "posts/article/article2.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
