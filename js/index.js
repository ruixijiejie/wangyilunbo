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
}
