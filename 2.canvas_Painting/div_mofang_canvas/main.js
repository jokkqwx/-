var div = document.getElementById('canvas');
var ifPainting = false;   // 标志位，是否开启绘画模式
// 按下鼠标  document.onmousedown
div.onmousedown=function(a){
    ifPainting = true ;

    var x = a.clientX;
    var y = a.clientY;
    var divA = document.createElement("div");
    divA.style = "width:5px;height:6px"
     + "background:black;border-radius:3px"
      +"position:absolute;left:"+(x-3)+"px;"+"top:"+(y-3)+"px";
    div.appendChild(divA);

};

//动鼠标 document.onmousemove 
div.onmousemove= function(a){
    if(ifPainting){
        var x = a.clientX;
        var y = a.clientY;
        var divA = document.createElement("div");
        divA.style = "width:5px;height:6px"
         + "background:black;border-radius:3px"
          +"position:absolute;left:"+(x-3)+"px;"+"top:"+(y-3)+"px";
        div.appendChild(divA);
    }else{

    }
    
}

//松开鼠标 document.onmouseup
div.onmouseup= function(x){
    ifPainting = false;
} 