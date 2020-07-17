import E from '@wangeditor-team/we-next'

const editor = new E('#container')

editor.create()

// 显示版本
document.getElementById('span-version').innerHTML = VERSION // webpack 中定义的全局变量
