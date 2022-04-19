export const data = {
  "key": "v-4eaf9f84",
  "path": "/guide/page.html",
  "title": "page config",
  "lang": "en-US",
  "frontmatter": {
    "index": 4,
    "icon": "page",
    "title": "page config",
    "date": "2020-01-01T00:00:00.000Z",
    "category": [
      "Guide"
    ],
    "tag": [
      "Page config",
      "Guide"
    ],
    "sticky": true,
    "star": true,
    "summary": "Content before more comment is regarded as page excerpt.\n",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/guide/page.html"
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
          "content": "page config"
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
          "content": "Page config"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "Guide"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2020-01-01T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "<p>Content before <code>more</code> comment is regarded as page excerpt.</p>\n",
  "headers": [
    {
      "level": 2,
      "title": "Page Information",
      "slug": "page-information",
      "children": []
    },
    {
      "level": 2,
      "title": "Page Content",
      "slug": "page-content",
      "children": []
    },
    {
      "level": 2,
      "title": "Page Structure",
      "slug": "page-structure",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.39,
    "words": 116
  },
  "filePathRelative": "guide/page.md"
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
