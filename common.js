/**
 * Created by Administrator on 2016/12/22.
 */
/**
 * 该函数的作用是根据id的值返回对应的元素对象
 * @param id  参数
 * @returns {Element} 返回值
 */
function my$(id) {
    return document.getElementById(id);
}

function setInnerText(element,text) {
    if(typeof (element,text)=='undefined'){
        //IE8没有这个属性
        return element.innerText;
    }else{
        //支持（不是IE8，要么是谷歌，要么是火狐）
        return element.textContent;
    }



}
// /**
//  * 设置元素的innerText或者textContent
//  * @param element 要设置的元素
//  * @param content 要设置的内容
//  */
// function setInnerText(element,content) {
//     if(typeof (element.textContent)=='undefined'){
//         //IE8没有这个属性
//         element.innerText=content;
//     }else{
//         //不是IE8,要么是谷歌要么是火狐
//         element.textContent=content;
//     }
// }
// function getInnerText(element) {
//     if(element.textContent==undefined){
//         return element.innerText;
//     }else{
//         return element.textContent;
//     }
// }
//
// //获取任意元素中的第一个子元素

function getFirstElement(element) {
    if(element.firstElementChild){//浏览器支持这个属性
        return element.firstElementChild;//直接返回第一个子元素
    }else{
        var node=element.firstChild;//保存第一个子节点
        while(none&&node.nodeType!=1){
            node=node.nextSibling;
        }
        return node ;//这才是第一个子元素（标签）
    }
}
//
// //获取任意元素中的最后一个子元素

function getLastElement(element) {
    if(element.lastElementChild){
        return element.lastElementChild;
    }else{
        var node=element.lastChild;
        while(node&&node.type!=1){
            node=node.previousSibling;
        }
        return node;
    }
}
//


// //获取任意元素的下一个兄弟元素

function getNextElementSibling(element) {
    if(element.nextElementSibling){
        return element.nextElementSibling
    }else{
        var node=element.nextSibling
        while(node&&node.nodeType!=1){
            node=node.nextSibling;
        }
        return node;
    }
}
// //console.log(getNextElementSibling(my$("three")).innerText);
//
// //获取任意元素的前一个兄弟元素

function getPreviousElementSibling(element) {
    if(element.previousElementSibling){
        return element.previousElementSibling
    }else{
        var node =element.previousSibling;
        while(node&&node.nodeType!=1){
            node=element.previousSibling;
        }
        return  node;
    }
}
//获取任意元素的下一个兄弟元素
function getNextElementSibling(element) {
    if(element.nextElementSibling){
        return element.nextElementSibling;
    }else{
        var node = element.nextSibling;
        while(node&&node.nodeType!=1){
            node=element.nextSibling;
        }
        return node;
    }
}