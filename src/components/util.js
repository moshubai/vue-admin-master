// 节流函数
export const throttle = (fn, delay = 100) => {
  let timer = null
  return data => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
}
