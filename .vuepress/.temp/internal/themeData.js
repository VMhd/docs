export const themeData = {
  "blog": {
    "description": "A FrontEnd programmer",
    "intro": "/intro.html",
    "medias": {
      "Baidu": "https://example.com",
      "Bitbucket": "https://example.com",
      "Dingding": "https://example.com",
      "Discord": "https://example.com",
      "Dribbble": "https://example.com",
      "Email": "https://example.com",
      "Evernote": "https://example.com",
      "Facebook": "https://example.com",
      "Flipboard": "https://example.com",
      "Gitee": "https://example.com",
      "GitHub": "https://example.com",
      "Gitlab": "https://example.com",
      "Gmail": "https://example.com",
      "Instagram": "https://example.com",
      "Lines": "https://example.com",
      "Linkedin": "https://example.com",
      "Pinterest": "https://example.com",
      "Pocket": "https://example.com",
      "QQ": "https://example.com",
      "Qzone": "https://example.com",
      "Reddit": "https://example.com",
      "Rss": "https://example.com",
      "Steam": "https://example.com",
      "Twitter": "https://example.com",
      "Wechat": "https://example.com",
      "Weibo": "https://example.com",
      "Whatsapp": "https://example.com",
      "Youtube": "https://example.com",
      "Zhihu": "https://example.com"
    }
  },
  "encrypt": {
    "global": false,
    "config": {
      "/guide/encrypt.html": [
        "$2a$10$Nqg.0zzGf4..qP.Tb9hhCuetLHchRfOhCGs4G9nAirQRhZuUq0/My"
      ]
    }
  },
  "pure": false,
  "iconPrefix": "iconfont icon-",
  "darkmode": "auto-switch",
  "themeColor": {
    "red": "#e74c3c",
    "blue": "#3498db",
    "green": "#3eaf7c",
    "orange": "#f39c12",
    "purple": "#8e44ad"
  },
  "fullscreen": true,
  "locales": {
    "/": {
      "blog": {},
      "repoDisplay": true,
      "navbarIcon": true,
      "navbarAutoHide": "mobile",
      "hideSiteNameonMobile": true,
      "sidebar": [
        "/",
        {
          "icon": "creative",
          "text": "Enquète",
          "prefix": "/guide/enquete/",
          "link": "/guide/enquete/",
          "collapsable": false,
          "children": "structure"
        }
      ],
      "sidebarIcon": true,
      "headerDepth": 2,
      "author": {
        "name": "VicM"
      },
      "logo": "/logo.svg",
      "repo": "vuepress-theme-hope/vuepress-theme-hope",
      "docsDir": "demo/src",
      "navbar": [
        "/",
        {
          "text": "Guide",
          "icon": "creative",
          "link": "/guide/"
        }
      ],
      "footer": "Default footer",
      "displayFooter": false,
      "pageInfo": [
        "Author",
        "Original",
        "Date",
        "Category",
        "Tag",
        "ReadingTime"
      ],
      "lang": "en-US",
      "navbarLocales": {
        "langName": "English",
        "selectLangText": "Language",
        "selectLangAriaLabel": "Select language"
      },
      "metaLocales": {
        "author": "Author",
        "date": "Writing Date",
        "origin": "Original",
        "views": "Page views",
        "category": "Category",
        "tag": "Tags",
        "readingTime": "Reading Time",
        "words": "Words",
        "toc": "On This Page",
        "prev": "Prev",
        "next": "Next",
        "lastUpdated": "Last update",
        "contributors": "Contributors",
        "editLink": "Edit this page"
      },
      "blogLocales": {
        "article": "Articles",
        "articleList": "Article List",
        "category": "Category",
        "tag": "Tags",
        "timeline": "Timeline",
        "timelineTitle": "Yesterday Once More!",
        "all": "All",
        "intro": "Personal Intro",
        "star": "Star",
        "slides": "Slides",
        "encrypt": "Encrypted"
      },
      "paginationLocales": {
        "prev": "Prev",
        "next": "Next",
        "navigate": "Jump to",
        "action": "Go",
        "errorText": "Please enter a number between 1 and $page !"
      },
      "outlookLocales": {
        "themeColor": "Theme Color",
        "darkmode": "Theme Mode",
        "fullscreen": "Full Screen"
      },
      "encryptLocales": {
        "title": "Please enter password",
        "errorHint": "Please enter the correct password!"
      },
      "routeLocales": {
        "404msg": [
          "There’s nothing here.",
          "How did we get here?",
          "That’s a Four-Oh-Four.",
          "Looks like we've got some broken links."
        ],
        "back": "Go back",
        "home": "Take me home",
        "openInNewWindow": "Open in new window"
      }
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
