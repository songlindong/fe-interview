import { ActionTree } from 'vuex'
import TYPES from './types'
import axios from 'axios'

const actions: ActionTree<any, any> = {
    // 全局初始化
    async initAjax({ dispatch }) {
        dispatch('getPlates')
        dispatch('getProdList')
    },

    // 获取板块
    async getPlates({ state, commit }) {
        const res: Ajax.AjaxResponse = await axios.get('/plates').then(
            (res) => res.data
        ).catch(
            (e: string) => console.log(e)
        )

        if(res && res.code == 200) {
            commit(TYPES.SET_PLATES, res.result.list)
        }
    },

    // 获取板块
    async getProdList({ state, commit }) {
        const res: Ajax.AjaxResponse = await axios.get('/prodList').then(
            (res) => res.data
        ).catch(
            (e: string) => console.log(e)
        )

        if(res && res.code == 200) {
            commit(TYPES.SET_PROD_LIST, res.result.list)
        }
    },
}

export default actions;