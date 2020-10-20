
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// dev 模式可以输出提示 work默认没有输出
let mode = 'dev'

// let mode = 'work'

// 主动提示函数
function logError(error) {
    if (mode === 'work') return;
    let date = new Date()
    console.log('全局组件加载：', error, date.toLocaleTimeString().replace('T', ' : '))
}

const requireComponent = require.context(
    // 其组件目录的相对路径
    '',
    // 是否查询其子目录
    true,
    // 匹配基础组件文件名的正则表达式
    /.*\.vue/
)

// 全量注册函数
function init(app) {
    if (!app) return console.log('组件注册失败,未能获取到Vue对象')
    requireComponent.keys().forEach(fileName => {
        const componentConfig = requireComponent(fileName)
        // 获取组件的 PascalCase 命名
        const componentName = upperFirst(
            camelCase(
                fileName
                .split('/')
                .pop()
                .replace(/\.\w+$/, '')
            )
        )
        // 全局注册组件
        app.component(
            componentName,
            componentConfig.default || componentConfig
        )
    })
}






export default {
    init,
    logError
};