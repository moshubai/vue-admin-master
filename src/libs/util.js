import cookies from './util.cookies';
import Setting from '@/project.config';
const util = {
  cookies
};
// 节流函数

util.throttle = (fn, delay = 100) => {
  let timer = null
  return data => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
}
util.title = (title) => {
  window.document.title = `${title} - ${Setting.titleContent}`
}

export default util
