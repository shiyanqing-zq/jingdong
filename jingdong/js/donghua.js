window.onload=function(){
var   box=$(".bnt")
var   imgs=$(".bannert")
var   lis=$(".yuanl")
var   left=$(".btnz")[0]
var   right=$(".btny")[0]
var   ow=parseInt(getStyle(box[0],"width"))
var  flag=true;
var  n=0;
var  next=0;
var  t=setInterval(move,5000)
function move(){
     if(flag==false){
      return;
     }
     flag=false;
      next=n+1;
     if(next>=imgs.length){
        next=0
     }
      
      imgs[next].style.left=ow+"px"
      animate(imgs[n],{left:-ow},600)
      animate(imgs[next],{left:0},600,function(){
        flag=true;
      })
      for(var i=0;i<lis.length;i++){
        lis[i].style.background="#fff"
      }
       lis[next].style.background="red"
       n=next;
}
function move1(){
  if(flag==false){
      return;
     }
     flag=false;
      next=n-1;
      if(next<0){
        next=imgs.length-1;
      }
      imgs[next].style.left=-ow+"px"
      animate(imgs[n],{left:ow},600)
      animate(imgs[next],{left:0},600,function(){
        flag=true;
      })
      for(var i=0;i<lis.length;i++){
        lis[i].style.background="#fff"
      }
       lis[next].style.background="red"
       n=next;
}

box[0].onmouseover=function(){
     clearInterval(t)
}
box[0].onmouseout=function(){
    t=setInterval(move,2000)
}
right.onclick=function(){
    move()
}
left.onclick=function(){
    move1()
}

for(var i=0;i<lis.length;i++){
lis[i].index=i;
lis[i].onclick=function(){
      if(this.index>n){
        if(flag==false){
      return;
     }
     flag=false;
          imgs[this.index].style.left=ow+"px"
          animate(imgs[n],{left:-ow},600)
          animate(imgs[this.index],{left:0},600,function(){
        flag=true;
      })
        
      }else if(this.index<n){
        if(flag==false){
      return;
     }
     flag=false;
          imgs[this.index].style.left=-ow+"px"
          animate(imgs[n],{left:ow},600)
          animate(imgs[this.index],{left:0},600,function(){
        flag=true;
      })
           
      }
      for(var i=0;i<lis.length;i++){
        lis[i].style.background="#fff"
      }
       lis[this.index].style.background="red"
   n=this.index;
   next=this.index;
}
}


// 标题选项卡
      var fbt=$("li",$(".f1bty"));
      console.log(fbt)









}