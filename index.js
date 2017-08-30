/**
 * 修改
 */
window.$docsify = {
  search: {
    maxAge: 86400000, // 过期时间，单位毫秒，默认一天
    paths: [], // or 'auto'
    placeholder: '搜索',
    noData: '啊哦！你要找的东西不存在'
  },
  name: '前端笔记本',
  repo: 'hua03/lite',
  loadSidebar: true,
  maxLevel: 3,
  subMaxLevel: 2
}

if (typeof navigator.serviceWorker !== 'undefined') {
  navigator.serviceWorker.register('sw.js')
}