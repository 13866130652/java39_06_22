/**
 * Created by WangJingJing on 2017/6/22.
 */
//��õ�ǰԪ�ص�����ֵ
function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}
//������̲�����ʱ��ִ�еĲ���
document.onkeydown = function move(event) {
    var box = document.getElementById("box");
    event = event || window.event;//�����¼���ֵ
    var left = parseFloat(getStyle(box, 'left'));//�õ�����ֵ��ת����ֵ
    var top = parseFloat(getStyle(box, 'top'));
    var keyNum = event.keyCode;//��ü��̰����Ķ�Ӧ��ֵ
    if (keyNum == 38) {//���Ͻ�
        if (top >= 10) {
            box.style.top = top - 10 + "px";
        }
    }
    else if (keyNum == 40) {//���½�
        if (top < 390) {
            box.style.top = top + 10 + "px";
        }
    }
    else if (keyNum == 37) {//����
        if (left >= 10){
            box.style.left = left - 10 + "px";
        }
    }
    else if (keyNum == 39) {//���ҽ�
        if (left < 890){
            box.style.left = left + 10 + "px";
        }
    }
}
//ͨ��js��Ԫ��box����������ʽ
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