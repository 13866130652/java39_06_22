/**
 * Created by WangJingJing on 2017/6/22.
 */
//获得当前元素的属性值
function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}
//点击键盘操作的时候，执行的操作
document.onkeydown = function move(event) {
    var box = document.getElementById("box");
    event = event || window.event;//设置事件的值
    var left = parseFloat(getStyle(box, 'left'));//拿到属性值，转成数值
    var top = parseFloat(getStyle(box, 'top'));
    var keyNum = event.keyCode;//获得键盘按键的对应数值
    if (keyNum == 38) {//按上建
        if (top >= 10) {
            box.style.top = top - 10 + "px";
        }
    }
    else if (keyNum == 40) {//按下建
        if (top < 390) {
            box.style.top = top + 10 + "px";
        }
    }
    else if (keyNum == 37) {//按左建
        if (left >= 10){
            box.style.left = left - 10 + "px";
        }
    }
    else if (keyNum == 39) {//按右建
        if (left < 890){
            box.style.left = left + 10 + "px";
        }
    }
}
//通过js对元素box进行设置样式
function shape() {
    var box = document.getElementById("box");
//alert(box);
    box.style.borderWidth = "1px";
    box.style.borderStyle = "solid";
    box.style.borderColor = "black";
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.backgroundColor = "blue";
}
shape();