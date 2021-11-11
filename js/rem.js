//param 直接输入设计图大小即可
const initRem = (clientSize=1080) => {
    const doc = document;
    const win = window;
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            debugger
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= clientSize) {
                docEl.style.fontSize = '3.29px';
            } else {
                docEl.style.fontSize = 3.29 * (clientWidth / clientSize) + 'px';
            }
            console.log(docEl.style.fontSize);
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    recalc()
    doc.addEventListener('DOMContentLoaded', recalc, false);
    /*DOMContentLoaded文档加载完成不包含图片资源 onload包含图片资源*/
}

initRem(375)