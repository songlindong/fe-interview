// webpack 在运行时生成的路径会自动拼接上这个全局变量（如果有的话）
// __webpack_public_path__ = 'http://localhost:9008/'

if (window.__POWERED_BY_QIANKUN__) {
  // __INJECTED_PUBLIC_PATH_BY_QIANKUN__ 设置为子应用的 entry
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
