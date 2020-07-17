
 window.addEventListener('load',function () {
     


   const canvas=document.getElementById('canvas')
   const ctx=canvas.getContext('2d') 
   canvas.height=window.innerHeight
   canvas.width=window.innerWidth
   var mousedown=false
   window.addEventListener('mousedown',function( ){
     mousedown=true;
     //console.log('down')
 })
 window.addEventListener('mouseup',function( ){
    mousedown=false;
})
   

   var mouse={
       x:null,
       y:null 
        
   }
   var colourlist=['red','green','yellow','violet','indigo','blue','orange']

 
   window.addEventListener('resize',function(e){
       canvas.height=window.innerHeight;
       canvas.width=window.innerWidth;
       
   })
   window.addEventListener('mousemove',function(e){
    mouse.x=e.clientX;
    mouse.y=e.clientY;  
    //console.log(e.clientX,e.clientY)
    })

    const edge=80;
   class root{
       constructor(x,y,colorstroke,colorfill,centerX,centerY){
           this.x=x;
           this.y=y;
           this.speedX=0;
           this.speedY=0;
           this.centerX=centerX;
           this.centerY=centerY;  
           this.colorstroke=colorstroke;
           this.colorfill=colorfill;  
             
       }
       draw(){

        this.speedX+=(Math.random()-.5)/2;
        this.speedY+=(Math.random()-.5)/2;
        this.x+=this.speedX;
        this.y+=this.speedY;
        var distanceX=this.x-this.centerX;
        var distanceY=this.y-this.centerY;
        var distance=Math.sqrt(distanceX*distanceX+distanceY*distanceY);
         
        var radius=(1-distance/(5*edge))*edge/8;
 
        if( radius >0 ){
            requestAnimationFrame(this.draw.bind(this))
            ctx.beginPath()
            ctx.arc(this.x,this.y,radius,0,2*Math.PI,false);
            ctx.fillStyle=this.colorfill;
            ctx.fill()
            ctx.strokeStyle=this.colorstroke;
            ctx.stroke()

        } 

       }
    }

    function branchOut(){
        const centerX=mouse.x;
        const centerY=mouse.y;
        for(i=0;i<3;i++){
            const r=new root(mouse.x,mouse.y,'black', colourlist[Math.floor(Math.random()*colourlist.length)],centerX,centerY);
            r.draw();

        } 

    }

    window.addEventListener('mousemove',function( ){
        ctx.fillStyle='rgb(255,255,255,.0002)'
        ctx.fillRect(0,0,canvas.width,canvas.height);
       //ctx.clearRect(0,0,canvas.width,canvas.height);
       if(mousedown){
        branchOut()
       }
       
     })
        
 



















})