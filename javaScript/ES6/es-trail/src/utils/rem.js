const setFontSize = () => {
    // 7.5根据设计稿的横向分辨率/100得来
    var deviceWidth = document.documentElement.clientWidth;
    // 获取浏览器宽度
    if(deviceWidth > 750) {
        deviceWidth = 750;
    } else if (!deviceWidth) {
         return;
    }
    document.documentElement.style.fontSize = `${deviceWidth / 7.5}px`;
    // 此时的fontSize大小为50px(375屏幕的时候)
    // 禁止双击放大
    document.documentElement.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, false);
    var lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', function (event) {
        var now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}
export default {
    setFontSize ,
}