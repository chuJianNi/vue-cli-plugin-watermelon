// this is generator index.js(generator.js)

module.exports = (api, options) => {

  if (options.addWatermelon) {
    api.render('./template')
    api.exitLog('Congratulation! You have a watermelon!')
  } else {
    api.exitLog('Nothing added!')
  }
}