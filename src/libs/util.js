import cookies from './util.cookies';
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

export default util
