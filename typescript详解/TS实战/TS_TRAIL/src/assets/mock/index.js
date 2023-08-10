// 接口整理
import Mock from 'mockjs'
import plates from './plates'
import prodList from './prod_list'

Mock.mock('/plates', 'get', () => {
    return {
        code: 200,
        result: plates
    }
})

Mock.mock('/prodList', 'get', () => {
    return {
        code: 200,
        result: prodList
    }
})