import { MutationTree } from 'vuex'
import TYPES from './types'

const mutations: MutationTree<any>  = {
    [TYPES.SET_PLATES](state, plates): void {
        state.plates = plates
    },

    [TYPES.SET_PROD_LIST](state, prodList): void {
        state.prodList = prodList
    }
}

export default mutations;