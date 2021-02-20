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

util.scrollTop = (el, from = 0, to, duration = 1000, endCallback) => {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  }
  const difference = Math.abs(from - to);
  const step = Math.ceil(difference / duration * 50);

  function scroll (start, end, step) {
    if (start === end) {
      endCallback && endCallback();
      return;
    }

    let d = (start + step > end) ? end : start + step;
    if (start > end) {
      d = (start - step < end) ? end : start - step;
    }

    // if (el === window) {
    window.scrollTo(d, d);
    // } else {
    //   el.scrollTop = d;
    // }
    // 优化浏览器的动画
    window.requestAnimationFrame(() => scroll(d, end, step));
  }
  scroll(from, to, step);
}

export default util
