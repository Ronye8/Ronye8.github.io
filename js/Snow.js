/**
 * Created by Administrator on 2016/9/30.
 */
var Snow=function(scale,speed){
// scale雪花边长，单位为像素
// speed下落1个像素的时间，单位为毫秒
    var top=0; //雪花定位的上边距
    var left=0; //雪花定位的下边距
    var element=null; //图片
    var n=0;
    var isLeftMove=false;
    var changeMoveArea=function(){ //更改移动方向
        setInterval(function(){
            isLeftMove=Math.random()>0.5;
        },1000);
    };

    var draw=function(){//绘制雪花
        element=new Image(); //当前构成雪花的这个图片元素
        element.src='img/xh2.png';
        element.setAttribute('style','position:absolute;');
        element.style.width=scale.toString()+'px';
        element.style.height=scale.toString()+'px';
        element.style.top=top.toString()+'px';
        //element.style.opacity=Math.random();
        left=parseInt(Math.random()*window.innerWidth);
        element.style.left=left.toString()+'px';
        document.body.appendChild(element);
    };
    var leftOrRight=function(){ //左右移动雪花
        if(isLeftMove){
            if(left>20)
                left--;
        }
        else{
            if(left<window.innerWidth-20)
                left++;
        }
        element.style.left=left.toString()+'px';
    };
    var drop=function(){//雪花往下掉
        top+=1;
        element.style.top=top.toString()+'px';
        if(top>=window.innerHeight){
            top=0;//document.body.removeChild(element);
//            if(n>0)
//                clearInterval(n);
        }
    };

    var piao=function(){
        draw();
        n=setInterval(function(){
            leftOrRight();
            drop();
        },speed);
        changeMoveArea();
    };
    piao();
}
