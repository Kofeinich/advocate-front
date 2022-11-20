
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/fedorkon/Projects/WebStorm/advocate/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/fedorkon/Projects/WebStorm/advocate/src/pages/index.js")),
  "component---src-templates-dsg-js": preferDefault(require("/Users/fedorkon/Projects/WebStorm/advocate/src/templates/dsg.js"))
}

