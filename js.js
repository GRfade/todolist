var i = 1;
function a(){
    var l = document.getElementById("change");  //得到无序列表对象
    var t = document.getElementById("t1");   //得到输入框对象
    var text = t.value;  //获取输入框内文字
    t.value = " ";  //输入框置为空
    l.innerHTML = l.innerHTML + "<li id=" + i +"  >"+ text + "</li>";  //获取消息框中的信息并放在li当中
    l.innerHTML = l.innerHTML + "<input  id="+ i + " type='button' onclick='remove("+i+")' value='删除'  >";//添加删除按钮
    i = i + 1;
}
function remove(i){
    var self = document.getElementById(i);//获得子节点
    var parent = self.parentElement;// 拿到父节点
    parent.removeChild(self);// 删除
    remove(i);

}
