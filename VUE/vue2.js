export function Vue(option = {}){
    this._init(options)
}

// initMixin
Vue.prototype._init = function(options){
    this.$options = options;
    this.$el = options.el;
    this.$data = options.data;
    this.$methods = options.methods;
    // data处理
    proxy(this, this.$data)
}
// this.$data.msg // this.msg
function proxy(target, data){
    Object.keys(data).forEach(key =>{
        Object.defineProperty(targets, key, {
            enumerable: true,
            configurable: true,
            get() {
                return data[key];
            },
            set(newVal) {
                if(newVal !== data[key]){
                    data[key] = newVal;
                }
            }
        })
    })
}
