import E from 'wangeditor'

const editor = new E('#container')

editor.create()

// 显示版本
document.getElementById('span-version').innerHTML = VERSION // webpack 中定义的全局变量
