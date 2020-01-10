module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-pxtorem': {
      rootValue: 37.5, // 按照 1rem转化
      propList: ['*']
    }
  }
}
