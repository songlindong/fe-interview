// 抽象整棵树对象
class Ref {
    constructor(opts, tree) {
        let name = this.name = opts.name

        this.tree = tree
        this.refs = {}
        refs[name] = this
    }

    get(cid) {
        return cid ? this.refs[cid] : this.tree
    }

    set(vm) {
        let cid = vm.cid
        this.refs[cid] = vm
    }
}

// 整棵树
let refs = {}
// 初始化工厂生产实例
let init = (opts, tree) => {
    let name = opts.name
    if(!refs[name]) {
        return new Ref(opts, tree)
    }
    return refs[name]
}

// 销毁
let destroy = name => {
    refs[name] && delete refs[name]
}

// 获取
let get = (name, cid) => {
    return refs[name] && refs[name].get(cid)
}

// 设置
let set = (name, vm) => {
    refs[name] && refs[name].set(vm)
}

export default {
    init,
    destroy,
    get,
    set
}