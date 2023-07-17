const express = require('express')
const app = express()

let Mock = require('mockjs')

// 写接口
let listApi = require('./data/list')
app.get('/api/article/list', function(req, res) {
    res.json(
        Mock.mock(
            listApi.getList(req)
        )
    )
})

app.listen(3000)
