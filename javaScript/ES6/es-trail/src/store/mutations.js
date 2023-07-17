import * as type from './mutations-types'

export default {
    // 获取列表
    [type.GET_NEWSLIST](state, payload) {
        // 对于数据进一步操作
        for(let item in payload.data) {
            state.list[payload.kind].push(payload.data[item])
        }
        state.downLoadMore = true
    },
    [type.RETURN](state, flag) {
        state.ifReturnMsg = flag
    },
    [type.ROUTERCHANGE](state, sign) {
        state.routerChange = sign
    },
    [type.PULLDOWNBTN](state, sign) {
        state.downLoadMore = sign
    },
    [type.CHANGE_LOADING_STATE](state, flag) {
        state.loading = flag
    }
}