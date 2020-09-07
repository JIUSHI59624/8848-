var screenAnimates= {
    ".screen-1":
        [
            '.screen-1_heading',
            '.screen-1_shadow',
            '.screen-1_phone',
        ],
    ".screen-2":
        [
            '.screen-2_heading',
            '.screen-2_subheading',
            '.screen-2_phone',
            '.screen-2_phone_i_1',
            '.screen-2_phone_i_2',
            '.screen-2_phone_i_3',
        ],
    ".screen-3":
        [
            '.screen-3_heading',
            '.screen-3_subheading',
            '.screen-3_phone',
            '.screen-3_features',
        ],
    ".screen-4":
        [
            '.screen-4_heading',
            '.screen-4_subheading',
            '.screen-4_model_item-1',
            '.screen-4_model_item-2',
            '.screen-4_model_item-3',
            '.screen-4_model_item-4'
        ],
    ".screen-5":
        [
            '.screen-5_heading',
            '.screen-5_subheading',
            '.screen-5_bg',
        ]
}
var navItems_header=getElements(".header_nav-item");
var navItems_window=getElements(".nav_window-item");
var nav_underline=getElement(".header_nav-item_underline")

function getElement(Selector) {
    return document.querySelector(Selector);
}
function getElements(Selector) {
    return document.querySelectorAll(Selector);
}
function getClass(element) {
    return element.className;
}
function setClass(element,cls) {
    element.className=cls;
}
function addClass(element,cls){
    var baseCls=element.className;
    if (baseCls.indexOf(cls)===-1){
    setClass(element,baseCls+' '+cls);
    }
}
function deleteClass(element,cls){
    var baseCls=element.className;
    if (baseCls.indexOf(cls)!==-1){
        setClass(element,baseCls.split(cls).join(' ').replace(/\s+/g,' '));
    }
}
function addSwitch(elements){

    for(var i=0;i<elements.length;i++){
        elements[i].id=i;
        elements[i].addEventListener("click",function () {
            document.documentElement.scrollTop=this.id*800+1;
        })
    }
}//页面跳转
function switchNav_active(index) {
    for (var i=0;i<navItems_header.length;i++){
        deleteClass(navItems_header[i],'header_nav-item_status_active');
    }
    addClass(navItems_header[index],'header_nav-item_status_active')

    for (var i=0;i<navItems_window.length;i++){
        deleteClass(navItems_window[i],'nav_window-item_status_active');
    }
    addClass(navItems_window[index],'nav_window-item_status_active')
}//元素跳转至激活状态
function moveUnderline(index,elements) {
    var currentIdx = 0;
    elements[index].addEventListener("mouseover",function () {
        nav_underline.style.left=(index*70)+'px';
    })
    elements[index].addEventListener("mouseout",function () {
        for(var i=0;i<elements.length;i++){
            if( getClass( elements[i] ).indexOf('header_nav-item_status_active') > -1  ){
                currentIdx = i;
                break;
            }
        }
        console.log(currentIdx);
        nav_underline.style.left = ( currentIdx * 70 )+'px';
    })
}//移动导航窗下划线
function addMoveUnderline(elements) {
    for (var i=0;i<elements.length;i++){
        moveUnderline(i,elements);
    }
}//添加移动导航窗下划线函数

var setScreenAnimatesInit =function (screen_class) {
    var animateElements=screenAnimates[screen_class],
        animateElement;
    for (var i=0;i<animateElements.length;i++){
        animateElement =document.querySelector(animateElements[i]);
        animateElement.className=animateElement.className.replace(' '+animateElements[i].substr(1) +'-done',"")
        animateElement.className+=' '+animateElements[i].substr(1) +'-init';
    }
}//设置动画初始化
var playAnimatesDone=function (screen_class) {
    var animateElements=screenAnimates[screen_class],
        animateElement;
    for (var j=0;j<animateElements.length;j++){
        animateElement =document.querySelector(animateElements[j]);
        animateElement.className=animateElement.className.replace(' '+animateElements[j].substr(1) +'-init',"")
        animateElement.className+=' '+animateElements[j].substr(1) +'-done';
    }
}//播放动画

addSwitch(navItems_header);
addSwitch(navItems_window);
addMoveUnderline(navItems_header);

window.onload = function () {
    setTimeout(function () {
        playAnimatesDone(".screen-1");
    },500);//页面加载完成后播放第一屏动画
    /*初始化所有动画元素*/
    for(k in screenAnimates){
        setScreenAnimatesInit(k);
    }
    switchNav_active(0);
}
window.onscroll = function () {
    var top =  document.documentElement.scrollTop;
    if (top>80){
        addClass(getElement('.header'),'header_status_fixed');//头部导航栏固定
        addClass(getElement('.nav_window'),'nav_window_in');//侧边导航窗弹出
    }
    else {
        deleteClass(getElement('.header'),'header_status_fixed');//头部导航栏复原
        deleteClass(getElement('.nav_window'),'nav_window_in');//侧边导航窗收回
    }
    if (top>1){
        switchNav_active(0)//使头部导航、侧边导航元素跳转至激活状态
        playAnimatesDone(".screen-1");//第一屏动画播放
        nav_underline.style.left = ( 0 * 70 )+'px';//移动头部导航栏下划线至激活元素
    }
    if (top>800-100){
        playAnimatesDone(".screen-2");
        switchNav_active(1)
        nav_underline.style.left = ( 1 * 70 )+'px';
    }
    if (top>2*800-100){
        playAnimatesDone(".screen-3");
        switchNav_active(2)
        nav_underline.style.left = ( 2 * 70 )+'px';
    }
    if (top>3*800-100){
        playAnimatesDone(".screen-4");
        switchNav_active(3)
        nav_underline.style.left = ( 3 * 70 )+'px';
    }
    if (top>4*800-100){
        playAnimatesDone(".screen-5");
        switchNav_active(4)
        nav_underline.style.left = ( 4 * 70 )+'px';
    }
}