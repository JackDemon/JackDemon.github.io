/**
 * Created by Administrator on 2016/10/17 0017.
 */
(function () {

    var autoSetRem = (function(doc, win) {
        var docEl = doc.documentElement,
            done = false,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            set = function(paper) {
                if(paper==null){
                    paper=1280;
                }
                var clientWidth = docEl.clientWidth || win.innerWidth || screen.width;
                var clientHeight = docEl.clientHeight || win.innerHeight || screen.Height;
                // var bgColor = document.getElementsByClassName("bgColor");
                // bgColor.style.width = clientWidth;
                // bgColor.style.height = clientHeight;

                if (!clientWidth) return;
                docEl.style.fontSize = 22 * (clientWidth / paper) + 'px';
                done = true;
                return done;
            };
        return {
            set:set
        };
        //AbortifbrowserdoesnotsupportaddEventListener
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, set, false);
        doc.addEventListener('DOMContentLoaded', set, false);
    })(document, window);

})();