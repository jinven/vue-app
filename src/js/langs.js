
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
export default {
    en: {
      Login: 'Login',
      Language: 'Language',
      name: 'name',
      password: 'password',
      submit: 'submit',
      Home: 'Home',
      About: 'About',
      Route: 'Route',
      Redirect: 'Redirect',
      Crypto: 'Crypto',
      Dynamic: 'Dynamic',
      message: 'hello',
      HasLogin: 'Logged In',
      NotLogin: 'Not Logged In',
      Logout: 'Logout',
      ...enLocale // 或者用 Object.assign({ message: 'hello' }, enLocale)
    },
    zh: {
      Login: '登录',
      Language: '语言',
      name: '名称',
      password: '密码',
      submit: '提交',
      Home: '主页',
      About: '关于',
      Route: 'Route',
      Redirect: '重定向',
      Crypto: '加解密',
      Dynamic: '动态页面',
      message: '你好',
      HasLogin: '已登录',
      NotLogin: '未登录',
      Logout: '退出',
      ...zhLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
    }
  }