
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/GLOW_LINE/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/GLOW_LINE"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5090, hash: '40772e4867f9f20951a74ebba31e5d9539b10bc0391fb29146e8b8c9aed32cfe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1206, hash: 'ea36d231fbf6ff90d669b784658ced11ce800a272823634dcb80efb554a2d199', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 85927, hash: 'b777ca407eac3bb95f5432ec5a48d3db2fcdd05e9c201f01183ff90b07b0eaef', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CQCKUAHT.css': {size: 231651, hash: 'GganuOuVPo0', text: () => import('./assets-chunks/styles-CQCKUAHT_css.mjs').then(m => m.default)}
  },
};
