const Prism = require('prismjs');
const externalLinks = require('markdown-it-link-attributes');

module.exports = {
 content: [
   ["articles", {
     page: '/articles/_article',
     permalink: 'articles/:slug',
     isPost: false,
     generate: [ 'get', 'getAll' ]
   }],
   ["narration", {
    page: '/_narration',
    permalink: 'narration/:slug',
    isPost: false,
    generate: [ 'get', 'getAll' ]
   }],
   ["translations", {
    page: '/_translations',
    permalink: 'translations/:slug',
    isPost: false,
    generate: [ 'get', 'getAll' ]
   }],
   ["projects", {
     page: '/_projects',
     permalink: "projects/:slug",
     isPost: false,
     generate: [ 'get', 'getAll' ]
   }],
   ["courses", {
    page: '/_courses',
    permalink: '/courses/:slug',
    isPost: false,
    generate: [ 'get', 'getAll' ]
   }],
   ["events", {
    page: '/_events',
    permalink: '/events/:slug',
    isPost: false,
    generate: [ 'get', 'getAll' ]
   }],
 ],
 api: isStatic => {
   return {
     browserBaseURL: isStatic ? 'https://sacred-traditions' : '',
   }
 },
 parsers: {
   md: {
     extend(config) {
       config.highlight = (code, lang) => {
         return Prism.highlight(
           code,
           Prism.languages[lang] || Prism.languages.markup
         )
       }
     },
     plugins: [
       [
         externalLinks,
         {
           target: '_blank',
           rel: 'noopener'
         }
       ]
     ]
   }
 }
};