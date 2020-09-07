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
}// 所有含有动画的element集合对象
    /*给所有元素添加动画的起始样式*/
function setScreenAnimate(screen_class) {
    var screen=document.querySelector(screen_class),
        animateElements=screenAnimates[screen_class],
        isTransition=false,
        animateElement;
    screen.addEventListener('click',function () {
        // 给动画添加开始样式
        if (isTransition===false){
            for (var i=0;i<animateElements.length;i++){
                animateElement =document.querySelector(animateElements[i]);
                animateElement.className=animateElement.className.replace(' '+animateElements[i].substr(1) +'-done',"")
                animateElement.className+=' '+animateElements[i].substr(1) +'-init';
            }
            isTransition=true;
            return;
        }
        // 给动画添加结束样式
        if (isTransition===true){
            for (var j=0;j<animateElements.length;j++){
                animateElement =document.querySelector(animateElements[j]);
                animateElement.className=animateElement.className.replace(' '+animateElements[j].substr(1) +'-init',"")
                animateElement.className+=' '+animateElements[j].substr(1) +'-done';
            }
            isTransition=false;
        }
    })
}
for (var k in screenAnimates){
    setScreenAnimate(k);
}
