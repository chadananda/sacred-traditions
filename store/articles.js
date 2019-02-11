// store/articles.js
// vuex functionality for articles



export const state = () => ({
  articles: [],
})

export const getters = {
  getArticles: (state, getters) => { // filter by current language and move to articles module
    if (Array.isArray(state.articles)) return state.articles.slice() // returns copy, not state object
      else return []
  },
  getRecentArticles:  (state, getters) => { // filter by current language and move to articles module
    if (!Array.isArray(state.articles)) return []
    let list = state.articles.slice() // because 'sort' will sort the original object in place
    list.sort((a,b) => compareDate(a.pubdate, b.pubdate))
    return list
  },
}

export const mutations = {
  setArticles: (state, payload) => {
    state.articles = payload;
  },
}

export const actions = {


}






/* =============================== article tools =================================== */

function compareDate(a,b) {
  // Compare two dates (could be of any type supported by the convert
  // function above) and returns:
  //  -1 : if a < b
  //   0 : if a = b
  //   1 : if a > b
  // NaN : if a or b is an illegal date
  // NOTE: The code inside isFinite does an assignment (=).
  return (
    isFinite(a= convert(a).valueOf()) &&
    isFinite(b= convert(b).valueOf()) ?
    (a>b)-(a<b) :
    NaN
  )
}
function convert(d) {
  // Converts the date in d to a date-object. The input can be:
  //   a date object: returned without modification
  //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
  //   a number     : Interpreted as number of milliseconds
  //                  since 1 Jan 1970 (a timestamp)
  //   a string     : Any format supported by the javascript engine, like
  //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
  //  an object     : Interpreted as an object with year, month and date
  //                  attributes.  **NOTE** month is 0-11.
  return (
    d.constructor === Date ? d :
    d.constructor === Array ? new Date(d[0],d[1],d[2]) :
    d.constructor === Number ? new Date(d) :
    d.constructor === String ? new Date(d) :
    typeof d === "object" ? new Date(d.year,d.month,d.date) :
    NaN
  )
}

