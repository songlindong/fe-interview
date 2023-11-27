import { makeObservable, observable, action, computed } from 'mobx';


class Store {
    constructor() {
        makeObservable(this);
    }

    // 定义被观察的属性
    @observable count = 0;
    @observable info = {name: 'luyi'};

    @action.bound
    add_count() {
        this.count = this.count + 1;
    }

    @action.bound
    setInfo(info) {
        this.info = info;
    }

    @computed get double () {
        return this.count * 2;
    }
}

export default new Store();