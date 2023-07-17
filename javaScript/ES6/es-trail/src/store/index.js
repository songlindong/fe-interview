import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

// 本地化维护的状态
const state = {
    ifReturnMsg: true,
    downLoadMore: true,
    routerChange: true,
    list: {
        __all__: [],
        news_hot: [],
        news_society: []
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})