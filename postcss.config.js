module.exports = {
  plugins: {
    // 自动加上私有前缀
    'autoprefixer': {},
    // px自动换算rem单位
    'postcss-pxtorem': {
      rootValue: 37.5,
      // 所有的都自动换算
      propList: ['*']
    }
  }
}
