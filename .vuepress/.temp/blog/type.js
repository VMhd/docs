export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-183b6767","v-1cebc43e","v-ee1417c4","v-f8ce875c","v-a44d2a0c","v-4eaf9f84","v-5deafbd7","v-5c362338","v-5a814a99","v-7beb5be1","v-0f7612e9","v-0dc13a4a","v-0c0c61ab","v-0a57890c","v-08a2b06d","v-06edd7ce","v-0538ff2f","v-03842690","v-184f4da6","v-0978b044","v-fffb8e28"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slides/","keys":[]}},"star":{"/":{"path":"/star/","keys":["v-183b6767","v-1cebc43e","v-ee1417c4","v-f8ce875c","v-a44d2a0c","v-4eaf9f84","v-5deafbd7","v-0c0c61ab","v-0538ff2f"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-183b6767","v-1cebc43e","v-ee1417c4","v-f8ce875c","v-a44d2a0c","v-5deafbd7","v-5c362338","v-5a814a99","v-7beb5be1","v-0f7612e9","v-0dc13a4a","v-0c0c61ab","v-0a57890c","v-08a2b06d","v-06edd7ce","v-0538ff2f","v-03842690","v-4eaf9f84"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
