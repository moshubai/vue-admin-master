module.exports = {
  presets: [
    ['@vue/app', {
      useBuiltIns: 'entry'
    }]
  ],
  env: {
    production: {
      // presets: ['minify'],
      plugins: ['transform-remove-debugger', 'transform-remove-console']
    }
  }
}