# painting
这是一个自己用js和canvas写的画板项目
我花了，还几天的时间写了一个简单的小项目，为了就是让自己感受这些代码的好处，这只是一个js文件写的
没有什么模块化，但是可以锻炼一下的基本功。可以让你更加的了解到期原理。。。。
## 接下来可以看一下完成之后的图片：
![image](https://github.com/Siyunlongshuai/image/blob/master/%E5%9B%BE%E7%89%87/painting.png)
## 第二张图：
![image](https://github.com/Siyunlongshuai/painting/blob/master/images/%E5%86%99%E5%AD%97%E6%BC%94%E7%A4%BA.png)
### 思想：
先把HTML、CSS文件写好，大体样式写出来之后。简单的说就是，写整出来一个画板出来，
然后在写后面的js部分。
```
其中最主要的还是，大量的js部分，里面用了很多的函数，一个函数就是一个简单的方法。
其次就是获取画板其它的部分，把获取画板的其它部分放在一个数组里面，方便在后面的调
用，用了最多的就是获取画笔的这个点的坐标。
```
获取在画板上的坐标点，随着鼠标点的移动，触发了onmousemove事件，从而获取不同的坐标点。
---
 canvas.onmousedown = function(e){
                var eve = window.event||e;
                var startX = eve.pageX - this.offsetLeft;
                var startY = eve.clientY - this.offsetTop;
                canvas.onmousemove = function(e){
                var eve = window.event||e;
                var endX = eve.pageX - this.offsetLeft;
                var endY = eve.clientY - this.offsetTop;
                }
                canvas.onmouseup = function(e){
                    canvas.onmouseup = null;
                    canvas.onmousemove = null;
                  }
            }
---
里面的函数比较多，使用时一定要注意，只要思路清晰了，也就好了。
这就是js的缺点没有模块化，以后的一些打包工具解决了这个问题
