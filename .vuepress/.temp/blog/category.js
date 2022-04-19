export const categoryMap = {"category":{"/":{"path":"/category/","map":{"Guide":{"path":"/category/guide/","keys":["v-183b6767","v-1cebc43e","v-ee1417c4","v-f8ce875c","v-a44d2a0c","v-4eaf9f84","v-0978b044","v-fffb8e28"]},"CategoryA":{"path":"/category/categorya/","keys":["v-5deafbd7","v-5c362338","v-5a814a99","v-7beb5be1","v-0f7612e9","v-0dc13a4a","v-0c0c61ab","v-0a57890c","v-08a2b06d","v-06edd7ce","v-0538ff2f","v-03842690"]},"CategoryB":{"path":"/category/categoryb/","keys":["v-5deafbd7","v-5c362338","v-5a814a99","v-7beb5be1","v-0f7612e9","v-0dc13a4a","v-0c0c61ab","v-0a57890c","v-08a2b06d","v-06edd7ce"]}}}},"tag":{"/":{"path":"/tag/","map":{"Page config":{"path":"/tag/page-config/","keys":["v-183b6767","v-1cebc43e","v-ee1417c4","v-f8ce875c","v-a44d2a0c","v-4eaf9f84"]},"Guide":{"path":"/tag/guide/","keys":["v-183b6767","v-1cebc43e","v-ee1417c4","v-f8ce875c","v-a44d2a0c","v-4eaf9f84"]},"markdown":{"path":"/tag/markdown/","keys":["v-0978b044"]},"tag A":{"path":"/tag/tag-a/","keys":["v-5deafbd7","v-5c362338","v-5a814a99","v-7beb5be1","v-0f7612e9","v-0dc13a4a","v-0c0c61ab","v-0a57890c","v-08a2b06d","v-06edd7ce","v-0538ff2f","v-03842690"]},"tag B":{"path":"/tag/tag-b/","keys":["v-5deafbd7","v-5c362338","v-5a814a99","v-7beb5be1","v-0f7612e9","v-0dc13a4a","v-0c0c61ab","v-0a57890c","v-08a2b06d","v-06edd7ce","v-0538ff2f","v-03842690"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
