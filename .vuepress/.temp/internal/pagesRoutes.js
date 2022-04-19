import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-184f4da6","/intro.html",{"title":"Intro Page","icon":"info","type":"article","readingTime":{"minutes":0.03,"words":8},"excerpt":"Intro Page Place your introducation and profile here."},["/intro","/intro.md"]],
  ["v-8daa1a0e","/",{"title":"Accueil","icon":"home","type":"home","readingTime":{"minutes":0.17,"words":51},"excerpt":"This is an example of a normal homepage. You can place your main content here. To use this layout, you need to set home: true in the page front matter. For related descriptions of "},["/index.html","/README.md"]],
  ["v-183b6767","/guide/2%20-%20fond.html",{"title":"Fond","icon":"page","type":"article","readingTime":{"minutes":0,"words":0},"excerpt":"","date":"2022-04-19T00:00:00.000Z","category":["Guide"],"tag":["Page config","Guide"],"sticky":true,"star":true},["/guide/2 - fond.html","/guide/2%20-%20fond","/guide/2 - fond.md","/guide/2%20-%20fond.md"]],
  ["v-0978b044","/guide/markdown.html",{"title":"Markdown Enhance","icon":"markdown","type":"article","readingTime":{"minutes":2.21,"words":664},"excerpt":"<p>Every document page in VuePress is rendered by Markdown.</p>\n<p>You need to build your document or blog page by creating and writing Markdown in the corresponding path.</p>\n","category":["Guide"],"tag":["markdown"]},["/guide/markdown","/guide/markdown.md"]],
  ["v-4eaf9f84","/guide/page.html",{"title":"page config","icon":"page","type":"article","readingTime":{"minutes":0.39,"words":116},"excerpt":"<p>Content before <code>more</code> comment is regarded as page excerpt.</p>\n","date":"2020-01-01T00:00:00.000Z","category":["Guide"],"tag":["Page config","Guide"],"sticky":true,"star":true},["/guide/page","/guide/page.md"]],
  ["v-fffb8e28","/guide/",{"title":"Guides","icon":"creative","type":"article","readingTime":{"minutes":0.04,"words":13},"excerpt":"Guides Page Config; Markdown Enhance; Function Disable; Encryption Demo;","category":["Guide"]},["/guide/index.html","/guide/README.md"]],
  ["v-5a814a99","/posts/article10.html",{"title":"Article 10","icon":"edit","type":"article","readingTime":{"minutes":0.05,"words":14},"excerpt":"Article 10 Heading 2 Here is the content. Heading 3 Here is the content.","date":"2022-01-10T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"]},["/posts/article10","/posts/article10.md"]],
  ["v-5c362338","/posts/article11.html",{"title":"Article 11","icon":"edit","type":"article","readingTime":{"minutes":0.05,"words":14},"excerpt":"Article 11 Heading 2 Here is the content. Heading 3 Here is the content.","date":"2022-01-11T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"]},["/posts/article11","/posts/article11.md"]],
  ["v-5deafbd7","/posts/article12.html",{"title":"Article 12","icon":"edit","type":"article","readingTime":{"minutes":0.05,"words":14},"excerpt":"Article 12 Heading 2 Here is the content. Heading 3 Here is the content.","date":"2022-01-12T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"],"star":true},["/posts/article12","/posts/article12.md"]],
  ["v-7beb5be1","/posts/article9.html",{"title":"Article 9","icon":"edit","type":"article","readingTime":{"minutes":0.05,"words":14},"excerpt":"Article 9 Heading 2 Here is the content. Heading 3 Here is the content.","date":"2022-01-09T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"]},["/posts/article9","/posts/article9.md"]],
  ["v-1cebc43e","/guide/enquete/cadres_denquete.html",{"title":"Cadres d'enquête","icon":"page","type":"article","readingTime":{"minutes":8.29,"words":2486},"excerpt":"Cf fascicule ENM [Les enquêtes - août 2017](http://enm.intranet.justice.fr/Espaces_Fonctionnels/Parquet/I-%20Ressources%20p%C3%A9dagogiques/1-%20Fascicules/Attributions%20p%C3%A9na","date":"2022-04-19T00:00:00.000Z","category":["Guide"],"tag":["Page config","Guide"],"sticky":true,"star":true},["/guide/enquete/cadres_denquete","/guide/enquete/cadres_denquete.md"]],
  ["v-ee1417c4","/guide/enquete/competence.html",{"title":"Compétence","icon":"page","type":"article","readingTime":{"minutes":6.8,"words":2041},"excerpt":"Compétence territoriale classique Cf [circ. du 11 mai 2017](http://intranet.justice.gouv.fr/site/dacg/artpix/circulaireCT11052017close.pdf) Les critères de compétence territoriale ","date":"2022-04-19T00:00:00.000Z","category":["Guide"],"tag":["Page config","Guide"],"sticky":true,"star":true},["/guide/enquete/competence","/guide/enquete/competence.md"]],
  ["v-f8ce875c","/guide/enquete/",{"title":"Enquête","icon":"page","type":"article","readingTime":{"minutes":0,"words":0},"excerpt":"","date":"2022-04-19T00:00:00.000Z","category":["Guide"],"tag":["Page config","Guide"],"sticky":true,"star":true},["/guide/enquete/index.html","/guide/enquete/README.md"]],
  ["v-a44d2a0c","/guide/enquete/services_denquetes.html",{"title":"Services d'enquête","icon":"page","type":"article","readingTime":{"minutes":20.82,"words":6246},"excerpt":"Cf fascicule ENM [Les services d'enquête - avril 2021](http://enm.intranet.justice.fr/Espaces_Fonctionnels/Parquet/I-%20Ressources%20p%C3%A9dagogiques/1-%20Fascicules/Attributions%","date":"2022-04-19T00:00:00.000Z","category":["Guide"],"tag":["Page config","Guide"],"sticky":true,"star":true},["/guide/enquete/services_denquetes","/guide/enquete/services_denquetes.md"]],
  ["v-03842690","/posts/article/article1.html",{"title":"Article 1","icon":"edit","type":"article","readingTime":{"minutes":0.05,"words":14},"excerpt":"Article 1 Heading 2 Here is the content. Heading 3 Here is the content.","date":"2022-01-01T00:00:00.000Z","category":["CategoryA"],"tag":["tag A","tag B"]},["/posts/article/article1","/posts/article/article1.md"]],
  ["v-0538ff2f","/posts/article/article2.html",{"title":"Article 2","icon":"edit","type":"article","readingTime":{"minutes":0.05,"words":14},"excerpt":"Article 2 Heading 2 Here is the content. Heading 3 Here is the content.","date":"2022-01-02T00:00:00.000Z","category":["CategoryA"],"tag":["tag A","tag B"],"star":true},["/posts/article/article2","/posts/article/article2.md"]],
  ["v-06edd7ce","/posts/article/article3.html",{"title":"Article 3","icon":"edit","type":"article","readingTime":{"minutes":0.05,"words":14},"excerpt":"Article 3 Heading 2 Here is the content. Heading 3 Here is the content.","date":"2022-01-03T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"]},["/posts/article/article3","/posts/article/article3.md"]],
  ["v-08a2b06d","/posts/article/article4.html",{"title":"Article 4","icon":"edit","type":"article","readingTime":{"minutes":0.05,"words":14},"excerpt":"Article 4 Heading 2 Here is the content. Heading 3 Here is the content.","date":"2022-01-04T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"]},["/posts/article/article4","/posts/article/article4.md"]],
  ["v-0a57890c","/posts/article/article5.html",{"title":"Article 5","icon":"edit","type":"article","readingTime":{"minutes":0.05,"words":14},"excerpt":"Article 5 Heading 2 Here is the content. Heading 3 Here is the content.","date":"2022-01-05T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"]},["/posts/article/article5","/posts/article/article5.md"]],
  ["v-0c0c61ab","/posts/article/article6.html",{"title":"Article 6","icon":"edit","type":"article","readingTime":{"minutes":0.05,"words":14},"excerpt":"Article 6 Heading 2 Here is the content. Heading 3 Here is the content.","date":"2022-01-06T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"],"star":10},["/posts/article/article6","/posts/article/article6.md"]],
  ["v-0dc13a4a","/posts/article/article7.html",{"title":"Article 7","icon":"edit","type":"article","readingTime":{"minutes":0.05,"words":14},"excerpt":"Article 7 Heading 2 Here is the content. Heading 3 Here is the content.","date":"2022-01-07T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"]},["/posts/article/article7","/posts/article/article7.md"]],
  ["v-0f7612e9","/posts/article/article8.html",{"title":"Article 8","icon":"edit","type":"article","readingTime":{"minutes":0.05,"words":14},"excerpt":"Article 8 Heading 2 Here is the content. Heading 3 Here is the content.","date":"2022-01-08T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"]},["/posts/article/article8","/posts/article/article8.md"]],
  ["v-3706649a","/404.html",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/404"]],
  ["v-5bc93818","/category/",{"title":"Category","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/index.html"]],
  ["v-744d024e","/tag/",{"title":"Tags","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/index.html"]],
  ["v-e52c881c","/article/",{"title":"Articles","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/article/index.html"]],
  ["v-75ed4ea4","/encrypted/",{"title":"Encrypted","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/encrypted/index.html"]],
  ["v-2897d318","/slides/",{"title":"Slides","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/slides/index.html"]],
  ["v-154dc4c4","/star/",{"title":"Star","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/star/index.html"]],
  ["v-01560935","/timeline/",{"title":"Timeline","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/timeline/index.html"]],
  ["v-ac0c2a6a","/category/guide/",{"title":"Guide Category","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/guide/index.html"]],
  ["v-26f8293d","/tag/page-config/",{"title":"Page config Tags","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/page-config/index.html"]],
  ["v-3e5b7b84","/category/categorya/",{"title":"CategoryA Category","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/categorya/index.html"]],
  ["v-30e296fe","/tag/guide/",{"title":"Guide Tags","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/guide/index.html"]],
  ["v-3e5b7ba3","/category/categoryb/",{"title":"CategoryB Category","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/categoryb/index.html"]],
  ["v-484552dc","/tag/markdown/",{"title":"markdown Tags","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/markdown/index.html"]],
  ["v-06bbb262","/tag/tag-a/",{"title":"tag A Tags","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/tag-a/index.html"]],
  ["v-06bbb224","/tag/tag-b/",{"title":"tag B Tags","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/tag-b/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
