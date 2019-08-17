var yyy = document.getElementById('xxx');
var context = yyy.getContext("2d");  //获取上下文
autoSetCanvasSize(yyy);
ListenToMouse(yyy);




// context.fillStyle = "red";  //设置背景
// context.fillRect(0,0,100,100);  //只以填充内部绘图 矩形:
// //context.strokeRect(0,0,0,0);  //只描边
// //context.clearRect(50,50,50,50);  //橡皮擦

// context.fillStyle = 'yellow';  //和它最近的颜色
// context.beginPath();     //开始绘制
// context.moveTo(240,240);
// context.lineTo(300,240);   //画线移动
// context.lineTo(300,300);
// context.fill();            //闭合填充



var eraserEnable = false;
eraser.onclick = function(){
    eraserEnable = true;
    actions.className = 'actions x';
    // if( eraserEnable){
    //     eraserEnable.textContent = "画笔";
    // }else{
    //     eraserEnable.textContent = "橡皮擦";
    // }
}
brush.onclick = function(){
    eraserEnable = false;
    actions.className = 'actions';
}



/********************************/ 
function autoSetCanvasSize(canvas){
    setCanvasSize();
    window.onresize = function(){
    setCanvasSize();
    }
    function setCanvasSize(){  //设置canvans 宽高
    var pageWidth = document.documentElement.clientWidth;
    var pageHeight = document.documentElement.clientHeight;
    canvas.width = pageWidth;
    canvas.height = pageHeight;
}
}

/************************ */
function ListenToMouse(canvas){


var using = false;  //是否是绘画模式
var lastPoint = {x:undefined,y:undefined};

if(document.body.ontouchstart !== undefined){
    //触屏设备
}
else{
    //非触屏设备
}

canvas.onmousedown = function(aaa){
    var x = aaa.clientX;  //相对于视口（窗口）的位置
    var y = aaa.clientY;
    using = true;
    if(eraserEnable){ 
        context.clearRect(x-5,y-5,10,10);
    }
    lastPoint = {x:x,y:y};
    console.log(lastPoint);
   // drawCircle(x,y,1);
}
canvas.onmousemove= function(aaa){
    var x = aaa.clientX;  
    var y = aaa.clientY;
    if(!using){
        return ;
    }
    if(eraserEnable){
        context.clearRect(x-5,y-5,10,10); 
    }else{
            var newPoint = {x:x,y:y};
            //drawCircle(x,y,1);
            drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
            lastPoint = newPoint;  //上一个节点等于下一个节点
    }
}
canvas.onmouseup= function(aaa){
    using = false;
}

function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.strokeStyle ="black"; //线的颜色
    context.moveTo(x1,y1); //起点
    context.lineWidth = 5; //线的宽度
    context.lineTo(x2,y2); //线的终点
    context.stroke();
    context.closePath();
}
}


function drawCircle(x,y,radius){
    context.beginPath();
    context.fillStyle = "black";
    context.arc(x,y,radius,0,Math.PI*2);
    context.fill(); //填充
}



// yyy.ontouchstart = function(){
//     console.log("开始摸我了");
// }
// yyy.ontouchmove = function(){
//     console.log("边摸变动")
// }
// yyy.ontouchend = function(){
//     console.log("摸完了");
// }