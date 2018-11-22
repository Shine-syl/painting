let canvas = document.getElementById('canvas');
let cxt = canvas.getContext('2d');
//获取工具下的标签
const Brush = document.getElementById('means_Brush');
const Eraser = document.getElementById('means_Eraser');
const Paint = document.getElementById('means_Paint');
const Straw = document.getElementById('means_Straw');
const text = document.getElementById('means_text');
const Magnifier = document.getElementById('means_Magnifier');
//获取形状的标签
const Line = document.getElementById('shape_line');
const Arc = document.getElementById('shape_arc');
const Rect = document.getElementById('shape_rect');
const Poly = document.getElementById('shape_poly');
const Arcfill = document.getElementById('shape_arcfill');
const Rectfill = document.getElementById('shape_rectfill');
let actions = [Brush,Eraser,Paint,Straw,text,Magnifier,Line,Arc,Rect,Poly,Arcfill,Rectfill]

//线宽的获取
const line_1 = document.getElementById('size_line1px');
const line_2 = document.getElementById('size_line3px');
const line_3 = document.getElementById('size_line5px');
const line_4 = document.getElementById('size_line8px');
let lineArr = [line_1,line_2,line_3,line_4];

//颜色的获取
const colorRed = document.getElementById('red');
const colorGreen = document.getElementById('green');
const colorBlue = document.getElementById('blue');
const colorYellow = document.getElementById('yellow');
const colorWhite = document.getElementById('white');
const colorBlack = document.getElementById('black');
const colorPink = document.getElementById('pink');
const colorPurple = document.getElementById('purple');
const colorCyan = document.getElementById('cyan');
const colorOrange = document.getElementById('orange');
let colorArr = [colorRed, colorGreen,colorBlue,colorYellow,colorWhite,colorBlack,colorPink,colorPurple,colorCyan,colorOrange]
const saveCanvas = document.getElementById('saveing');
const clearCanvas = document.getElementById('clearing');
        function saveing(){
           
    }
        function clearing(){
            cxt.clearRect(0,0,880,400);
        }
//设置一个函数只能改变其中一个颜色"
 function setColor(Arr,num,type){
     for(let i = 0;i < Arr.length;i++){
         if(i == num){
             Arr[i].style.backgroundColor = "deeppink";
         }else{
             Arr[i].style.backgroundColor = "#ccc";
         }
     }
 }
 function setColor1(Arr,num,type){
    for(let i = 0;i < Arr.length;i++){
        if(i == num){
            Arr[i].style.backgroundColor = "blue";
        }else{
            Arr[i].style.backgroundColor = "#ccc";
        }
    }
}
 function setBorder(Arr,num,type){
    for(var i = 0;i < Arr.length;i++){
        if(i == num){
            Arr[i].style.border = "1px solid #fff";
        }else{
            Arr[i].style.border = "1px solid #000";
        }
    }
 }

//改变前12个框的颜色
        function drawBrush(num){
            setColor(actions,num,1);
            canvas.onmousedown = function(e){
                console.log('124')
                var eve = window.event||e;
                var startX = eve.pageX - this.offsetLeft;
                var startY = eve.clientY - this.offsetTop;
                cxt.beginPath();
                cxt.moveTo(startX,startY);
                canvas.onmousemove = function(e){
                var eve = window.event||e;
                var endX = eve.pageX - this.offsetLeft;
                var endY = eve.clientY - this.offsetTop;
                cxt.lineTo(endX,endY);
                cxt.stroke();
                }
                canvas.onmouseup = function(e){
                    canvas.onmouseup = null;
                    canvas.onmousemove = null;
                  }
            }
             document.onmouseup = function(e){
                    canvas.onmouseup = null;
                    canvas.onmousemove = null;
        }
    }
    //初始值是画笔
    drawBrush(0);
    drawLineColor(3);


        function drawEraser(num){
            setColor(actions,num,1);
            canvas.onmousedown = function(e){
                var eve = window.event||e;
                var startX = eve.pageX - this.offsetLeft;
                var startY = eve.clientY - this.offsetTop;
                cxt.clearRect(startX - cxt.lineWidth,startY - cxt.lineWidth, cxt.lineWidth*2 ,cxt.lineWidth*2 );
                canvas.onmousemove = function(e){
                    var eve = window.event||e;
                    var startX = eve.pageX - this.offsetLeft;
                    var startY = eve.clientY - this.offsetTop;
                    cxt.clearRect(startX - cxt.lineWidth,startY - cxt.lineWidth, cxt.lineWidth*2 ,cxt.lineWidth*2 );
                }
                canvas.onouseup = function(e){
                    canvas.onmouseup = null;
                    canvas.onmousemove = null;
                }
            }            
        } 
        function drawPaint(num){
            setColor(actions,num,1);
            canvas.onmousedown = function(){
                cxt.fillRect(0,0,880,400);
            }
        }
        function drawStraw(num){
            setColor(actions,num,1);
            canvas.onmousedown = function(e){
                var eve = window.event||e;
                var startX = eve.pageX - this.offsetLeft;
                var startY = eve.clientY - this.offsetTop;
                var obj = cxt.getImageData(startX,startY,1,1);
               //查文档，看属性
                var data = obj.data;
                var  color =' rgb('+data[0] +','+data[1]+','+data[2]+')';
                cxt.strokeStyle = color;
            }

        }
        function drawText(num){
            setColor(actions,num,1);
            canvas.onmousedown = function(e){
                var eve = window.event||e;
                var startX = eve.pageX - this.offsetLeft;
                var startY = eve.pageY - this.offsetTop;
                var val = window.prompt('这是我们想要的值','');
                if(val != null){
                    cxt.font="20px Lishu"
                    cxt.fillText(val,startX,startY);
                }
            }
        }
        function drawMagnifier(num){
            setColor(actions,num,1);
            var magnifier = window.prompt('请输入放大倍数（只能是整形）','100');
            var magnifierW = (magnifier)*880/100;
            var magnifierH = (magnifier)*400/100;
            canvas.style.width = parseInt(magnifierW) +"px";
            canvas.style.height = parseInt(magnifierH) + "px";
        }
        function drawLine(num){
            setColor(actions,num,1);
            //清空以前的函数，防止影响接下来的操作
            // canvas.onmousedown = null;
            // canvas.onmousemove = null;
            // canvas.onmouseup = null;
            canvas.onmousedown = function(eve){
                var eve = window.event||eve;
                var startX = eve.pageX - this.offsetLeft;
                var startY = eve.clientY - this.offsetTop;
                cxt.beginPath();
                cxt.moveTo(startX,startY);
                canvas.onmouseup = function(eve){
                    var eve = window.event||eve;
                    var endX = eve.pageX - this.offsetLeft;
                    var endY = eve.clientY - this.offsetTop;
                    cxt.lineTo(endX,endY);
                    cxt.stroke();
                    canvas.onmousemove = null;
                    canvas.onmouseup = null;
                }
            }
        }
        function drawArc(num){
            setColor(actions,num,1);
            // canvas.onmousedown = null;
            // canvas.onmousemove = null;
            // canvas.onmouseup = null;
            canvas.onmousedown = function(eve){
                var eve = window.event||eve;
                var arcX = eve.pageX - this.offsetLeft;
                var arcY = eve.pageY - this.offsetTop;
               
                canvas.onmouseup = function(eve){
                    var eve = window.event||eve;
                    var endX = eve.pageX - this.offsetLeft;
                    var endY = eve.pageY - this.offsetTop;
                    var a = endX - arcX;
                    var b = endY - arcY;
                    var c = Math.sqrt(a*a + b*b);
                    cxt.beginPath();
                    cxt.arc(arcX,arcY,c,0,360,false);
                    cxt.stroke(); 
                    canvas.onmousemove = null;
                    canvas.onmouseup = null;
                }
            }

        }
        function drawRect(num){
            setColor(actions,num,1);
            // canvas.onmousedown = null;
            // canvas.onmousemove = null;
            // canvas.onmouseup = null;
            canvas.onmousedown = function(eve){
                var eve = window.event||eve;
                var rectX = eve.pageX - this.offsetLeft;
                var rectY = eve.pageY - this.offsetTop; 
                canvas.onmouseup = function(eve){
                    var eve = window.event||eve;
                    var endX = eve.pageX - this.offsetLeft;
                    var endY = eve.pageY - this.offsetTop;
                    var w = endX - rectX;
                    var h = endY - rectY;
                    cxt.beginPath();
                    cxt.rect(rectX,rectY,w,h);
                    cxt.stroke();
                    canvas.onmousemove = null;
                    canvas.onmouseup = null;
                }
            }

        }
        function drawPoly(num){
            setColor(actions,num,1);
            // canvas.onmousedown = null;
            // canvas.onmousemove = null;
            // canvas.onmouseup = null;
            canvas.onmousedown = function(eve){
                var eve = window.event||eve;
                var polyX = eve.pageX - this.offsetLeft;
                var polyY = eve.pageY - this.offsetTop;
               
                canvas.onmouseup = function(eve){
                    //计算在草稿纸上自己算吧。哈哈。。。。
                    var eve = window.event||eve;
                    var endX = eve.pageX - this.offsetLeft;
                    var endY = eve.pageY - this.offsetTop;
                    cxt.beginPath();
                    cxt.moveTo(endX,endY);
                    var leftBx = 2*polyX - endX;
                    var leftBy = endY;
                    cxt.lineTo(leftBx,leftBy);
                    var topX = polyX;
                    var topY = endY - Math.sqrt(3*(endX-polyX)*(endX-polyX));
                    cxt.lineTo(polyX,topY);
                    cxt.closePath();
                    cxt.stroke();
                    canvas.onmousemove = null;
                    canvas.onmouseup = null;
                }
            }
        }
        function drawArcfill(num){
            setColor(actions,num,1);
            // canvas.onmousedown = null;
            // canvas.onmousemove = null;
            // canvas.onmouseup = null;
            canvas.onmousedown = function(eve){
                var eve = window.event||eve;
                var arcX = eve.pageX - this.offsetLeft;
                var arcY = eve.pageY - this.offsetTop;
               
                canvas.onmouseup = function(eve){
                    var eve = window.event||eve;
                    var endX = eve.pageX - this.offsetLeft;
                    var endY = eve.pageY - this.offsetTop;
                    var a = endX - arcX;
                    var b = endY - arcY;
                    var c = Math.sqrt(a*a + b*b);
                    cxt.beginPath();
                    cxt.arc(arcX,arcY,c,0,360,false);
                    cxt.fill(); 
                    canvas.onmousemove = null;
                    canvas.onmouseup = null;
                }
            }

        }
        function drawRectfill(num){
            setColor(actions,num,1);
            // canvas.onmousedown = null;
            // canvas.onmousemove = null;
            // canvas.onmouseup = null;
            canvas.onmousedown = function(eve){
                var eve = window.event||eve;
                var rectX = eve.pageX - this.offsetLeft;
                var rectY = eve.pageY - this.offsetTop;
               
                canvas.onmouseup = function(eve){
                    var eve = window.event||eve;
                    var endX = eve.pageX - this.offsetLeft;
                    var endY = eve.pageY - this.offsetTop;
                    var w = endX - rectX;
                    var h = endY - rectY;
                    cxt.beginPath();
                    cxt.rect(rectX,rectY,w,h);
                    cxt.fill();
                    canvas.onmousemove = null;
                    canvas.onmouseup = null;
                }
            }
        }
//让线宽背景变颜色。。。。。
        function drawLineColor(num){
            setColor1(lineArr,num,1);
            switch(num){
                case 0 :
                cxt.lineWidth = 1; 
                break;
                case 1 :
                cxt.lineWidth = 3; 
                break;
                case 2 :
                cxt.lineWidth = 5; 
                break;
                case 3 :
                cxt.lineWidth = 8; 
                break;
                default:
                cxt.lineWidth = 1;
            }
        }
//设置颜色的边框。。。。。
        function setBorderColor(obj,num){
                setBorder(colorArr,num,1)
                cxt.strokeStyle = obj.id;
                cxt.fillStyle = obj.id;
        }
      