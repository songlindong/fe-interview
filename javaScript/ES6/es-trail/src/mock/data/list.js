const Mock = require("mockjs")

const List = []
const count = 10

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    abstract: "测试-为了教育终将创造的所有美好",
    media_name: "央视网",
    title: "绘学习 | 测试-为了教育终将创造的所有美好",
    comment_count: 6355,
    datetime: "2023-06-10 18:17"
  }))
}

function getList() {
    // 接口逻辑 - 业务逻辑 or 排序 or 翻页
    return {
        total: List.length,
        data: List,
        has_more: false,
        html: null,
        page_id: "/__all__/",
        return_count: 8
    }
}



exports.getList = getList;