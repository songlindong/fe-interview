class MyRouter {
    // 注册
    constructor(config) {
      // 参数组织
      // 路由配置列表
      this._routes = config.routes;

      // 路由历史栈
      this.routeHistory = [];
      this.currentUrl = '';
      this.currentIndex = -1;
      

      // 跳转中间变量
      this.changeFlag = false;
      // 流程调用
      this.init();
    }
    // 初始化
    init() {
      // 监听hash变化
      window.addEventListener('hashchange', this.refresh.bind(this), false);

      // load
      window.addEventListener('load', this.refresh.bind(this), false);
    }
    // 单页页面的更新
    refresh() {
     // 1.路由参数处理
       if (this.changeFlag) {
        this.changeFlag = false;
       } else {
        this.currentUrl = location.hash.slice(1) || '/';
        // 去除分叉路径
        this.routeHistory = this.routeHistory.slice(0, this.currentIndex + 1);
        this.routeHistory.push(this.currentUrl);
        this.currentIndex++;
       }

       // 2. 模块切换
       let path = MyRouter.getPath();
       let currentComponentName = '';
       let nodeList = document.querySelectorAll('[data-component-name]');

       // 查找当前路由名称对应
       // find()
       for (let i =0; i < this._routes.length; i++) {
         if (this._routes[i].path === path) {
            currentComponentName = this._routes[i].name;
            break;
         }
       }

       // 遍历控制节点模块展示
       nodeList.forEach(item => {
         if (item.dataset.componentName === currentComponentName) {
            item.style.display = 'block';
         } else {
            item.style.display = 'none';
         }
       })
    }
    push(option) {
      if (option.path) {
        MyRouter.changeHash(option.path, option.query);
      } else if (option.name) {
        let path = '';

        for (let i = 0; i < this._routes.length; i++) {
            if (this._routes[i].name === option.name) {
                path = this._routes[i].path;
                break;
            }
        }

        if (path) {
            MyRouter.changeHash(path, option.query);
        }
      }
    }
    back() {
        this.changeFlag = true;

    }
    front() {
        this.changeFlag = true;
    }
    static getPath(){
        let href = window.location.href;
        let index = href.indexOf('#');
        if (index < 0) {
            return ''
        }
        href = href.slice(index + 1)

        let searchIndex = href.indexOf('?');
        if (searchIndex < 0) {
            return href;
        } else {
            return href.slice(0, searchIndex);
        }
    }

    static changeHash(path, query) {
        if (query) {
            let str = '';
            for (let i in query) {
                str += '&' + i + '=' + query[i];
            }

            window.location.hash = str ? path + '?' + str.slice(1) : path;
        } else {
            window.location.hash = path;
        }
    }
}