window.onload = function () {
    function $(id) {
        return document.getElementById(id)
    }
    // 获取元素
    var slider = $("slider");
    var slider_main_block = $("slider_main_block");
    var imgs = slider_main_block.children;
    var slider_ctrl = $("slider_ctrl");

    // 1.创建span元素
    for (var i = 0; i < imgs.length; i++) {
        var span = document.createElement("span");
        span.className = "slider-ctrl-con";
        span.innerHTML = imgs.length - i;  // 倒着排序
        slider_ctrl.insertBefore(span,slider_ctrl.children[1]);
    }

    // 2. 高亮第一个
    var spans = slider_ctrl.children;
    spans[1].setAttribute("class","slider-ctrl-con current");

    // 3. 图片移动
    var scrollWidth = slider.clientWidth
    for (var i = 1; i < imgs.length; i++) {
        imgs[i].style.left = scrollWidth + "px"
    }

    // 4.按钮点击事件
    var iNow = 0;
    for (var k in spans) {
       spans[k].onclick = function () {

           if (this.className == "slider-ctrl-prev") {

               animate(imgs[iNow],{left: scrollWidth});

               --iNow < 0 ? iNow = imgs.length-1 : iNow

               imgs[iNow].style.left = -scrollWidth + "px"

               animate(imgs[iNow],{left: 0})

               setSquare()

           } else if (this.className == "slider-ctrl-next") {

              autoplay()

           } else {

               var that = this.innerHTML - 1;

               if (that > iNow) {

                   animate(imgs[iNow],{left: -scrollWidth});

                   imgs[that].style.left = scrollWidth + "px"

               } else if (that < iNow) {

                   animate(imgs[iNow],{left: scrollWidth});

                   imgs[that].style.left = -scrollWidth + "px"

               }
               iNow = that

               animate(imgs[that],{left: 0})

               setSquare()
           }
       }
    }
    function setSquare() {

        for (var i = 1; i < spans.length-1; i++) {

            spans[i].className = "slider-ctrl-con"

        }
        spans[iNow+1].className = "slider-ctrl-con current"
    }
    // 5. 添加定时器
    var timer = null;

    timer = setInterval(autoplay,1000);

   function autoplay() {

       animate(imgs[iNow],{left: -scrollWidth});

       ++iNow > imgs.length-1 ? iNow = 0 : iNow

       imgs[iNow].style.left = scrollWidth + "px"

       animate(imgs[iNow],{left: 0})

       setSquare()
   }

   // 6. 清除定时器
    slider.onmouseover = function () {

        clearInterval(timer)

    }
    slider.onmouseout = function () {

       timer = setInterval(autoplay,1000)

    }
}
