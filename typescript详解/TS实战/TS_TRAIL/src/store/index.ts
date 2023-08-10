import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

interface State {
    plates: StoreState.plate[]
    prodList: StoreState.prod[]
}

let state: State = {
    plates: [],
    prodList: []
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})