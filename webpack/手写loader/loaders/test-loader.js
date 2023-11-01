function loader(content) {
  console.log('test-loader执行了')
  return content+'//test-loader'
}

module.exports = loader