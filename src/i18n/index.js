import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './zh/index.js'
import en from './en/index.js'
Vue.use(VueI18n)

const messages = {
    zh:{
        ...zh
    },
    en:{
        ...en
    }
}
const i18n = new VueI18n({
    // 默认语言
    locale: 'zh',
    // 引入对应的语言包文件
    messages
});

export default i18n;