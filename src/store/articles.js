const articles = {
  state: {
    allArticles: [],
    articles: []
  },
  getters: {
    getArticles: (state, getters) => {
      if (!Array.isArray(state.articles)) return []
      return state.articles.slice() //  copy of list
    },
    // full list of language articles sorted by popularity
    getPopularArticles: (state, getters) => {
      if (!Array.isArray(state.articles)) return []
      let list = state.articles.slice() //  copy
      list.sort((a,b) => b.node.likes-a.node.likes)
      return list
    },

    getAllArticles: (state, getters) => {
      if (!Array.isArray(state.allArticles)) return []
      let list = state.allArticles.slice() //  copy
      return list
    },

    getCategoryList: (state, getters) => {
      let cats = {}
      state.articles.forEach(a => a.node.category.split(',').forEach(cat =>  cats[cat] = 1 ))
      return Object.keys(cats)
    },

    getTagList: (state, getters) => {
      let tags = {}, total = 0
      state.articles.forEach(a => a.node.tags.split(',').forEach(tag => {
        if (tag in tags) tags[tag]++; else tags[tag] = 1
        total++
      }))
      Object.keys(tags).forEach(tag => {
        tags[tag] = Math.round(tags[tag]/total*100)
      })
      return tags
    }
  },
  mutations: {
    setAllArticles: (state, articles) => {
      state.allArticles = articles
      let lang = state.language || 'en'
      state.articles = state.allArticles.filter(a => a.node.language===lang)
    },

    setArticleLanguage: (state, lang) => {
      state.articles = state.allArticles.filter(a => a.node.language===lang)
    },
  },
  actions: {

  }
}

export default articles
