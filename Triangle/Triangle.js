function draw()
{
	var canvas = $('#can1')[0];
	ctx=canvas.getContext("2d");
	function Triangle()
	{	ctx.beginPath();     
		ctx.moveTo(75,25);
		ctx.lineTo(75,75);
		ctx.lineTo(50,50);
		ctx.fill();
	}
	function semidisc()
	{
		ctx.beginPath();
		ctx.arc(50,50,80,0,Math.PI/2,false);
		ctx.fill();
	}
	function arc()
	{
		ctx.beginPath(); 
		ctx.moveTo(20,20);
		ctx.arcTo(20,20,30,30,30);
		ctx.stroke();
	}
	function colorGrid()
	{
		for(var i=0;i<10;i++)
		{
			for(var j=0;j<10;j++)
			{
				ctx.fillStyle='rgb(0,'+Math.round(255-j*25.5)+','+Math.round(255-i*25.5)+')';
				ctx.fillRect(j*20,i*20,20,20);
			}
		}
	}
	function circularColorGrid()
	{
		for(var i=0;i<10;i++)
		{
			for(var j=0;j<10;j++)
			{
				ctx.strokeStyle='rgb('+Math.round(255-j*15.5)+','+Math.round(255-i*25.5)+',0';
				ctx.beginPath();
				ctx.arc(10+j*20,10+i*20,8,0,Math.PI*2,true);
				ctx.stroke();
			}
		}
	}
	function transparency()
	{
		ctx.fillStyle="yellow";
		ctx.fillRect(0,0,100,100);
		ctx.fillStyle="green";
		ctx.fillRect(100,0,100,100);
		ctx.fillStyle="blue";
		ctx.fillRect(0,100,100,100);
		ctx.fillStyle="red";
		ctx.fillRect(100,100,100,100);

		ctx.globalAlpha=0.2;
		ctx.fillStyle="white";
		for(var i=1;i<=10;i++)
		{
			ctx.beginPath();
			ctx.arc(100,100,10*i,0,Math.PI*2,true);
			ctx.fill();
		}
	}
	function transparentGrid()
	{
		ctx.fillStyle="yellow";
		ctx.fillRect(0,0,200,50);
		ctx.fillStyle="green";
		ctx.fillRect(0,50,200,50);
		ctx.fillStyle="blue";
		ctx.fillRect(0,100,200,50);
		ctx.fillStyle="black";
		ctx.fillRect(0,150,200,50);

		ctx.fillStyle="#ffffff";
		for(var i=0;i<4;i++)
		{
			for(var j=0;j<10;j++)
			{
				ctx.fillStyle='rgba(255,255,255,'+0.1*j+')';
				ctx.fillRect(25+j*15,10+i*50,15,30);
			}
		}
		
	}
	function lineWidth()
	{
		for(var i=0;i<9;i++)
		{
			ctx.lineWidth=1+1*i;
			ctx.beginPath();
			ctx.moveTo(10+i*20,0);
			ctx.lineTo(10+i*20,200);
			ctx.stroke();
		}
	}
	function linearGradient()
	{
		var linearg = ctx.createLinearGradient(0,0,0,200);
		linearg.addColorStop(0,"#00ABEB");
		linearg.addColorStop(0.5,"white");
		linearg.addColorStop(1,"#26C000");
		ctx.fillStyle=linearg;
		ctx.fillRect(0,0,200,200);

		var linearg1 = ctx.createLinearGradient(0,50,0,150);
		linearg1.addColorStop(0.5,"black");
		linearg1.addColorStop(1,'rgba(0,0,0,0)');
		ctx.strokeStyle=linearg1;
		ctx.beginPath();
		ctx.arc(100,100,50,0,Math.PI*2,true);
		ctx.stroke();
	}
	function radialGradient()
	{
		var radialg = ctx.createRadialGradient(90,90,20,100,100,50);
		radialg.addColorStop(0,"#A7D30C");
		radialg.addColorStop(0.9,'#019F62');
		radialg.addColorStop(1, 'rgba(1,159,98,0)');
		ctx.fillStyle=radialg;
		ctx.fillRect(50,50,100,100);
	}
	function createPatternImage()
	{
		var img = new Image();
		img.src="Arrow.png";
		img.onload = (function(){
			ctx.fillStyle=ctx.createPattern(img,'repeat');
			ctx.fillRect(0,0,200,200);
		})		
	}
	function Text()
	{
		ctx.shadowOffsetX=4;
		ctx.shadowOffsetY=2;
		ctx.showBlue=2;
		ctx.shadowColor="blue";
		ctx.font="32px Arial";
		ctx.textAlign="center";
		ctx.direction = "rtl";
		ctx.fillText("Punit",100,100);
		var text = ctx.measureText("Punit");
		console.log(text);
	}
	function drawImage()
	{
		var img = new Image();
		img.src="Arrow.png";
		ctx.imageSmoothingEnabled=true;
		img.onload=function(){
		ctx.drawImage(img,0,10,100,40,100,100,100,40);}
	}
	function saveAndRestore()
	{
		ctx.save();
		ctx.fillRect(0,0,200,200);

		ctx.fillStyle='#09F';
		ctx.save();
		ctx.fillRect(15,15,170,170);

		ctx.fillStyle='rgba(255,255,255,0.5)';
		ctx.fillRect(30,30,140,140);

		ctx.restore();
		ctx.fillRect(45,45,110,110);

		ctx.restore();
		ctx.fillRect(60,60,80,80);
	}
	function translate()
	{	var x=55;
		for(i=0;i<4;i++)
		{
			for (j = 0; j < 4; j++) 
			{
				ctx.save();
				ctx.translate(15+j*50,15+i*50);
				ctx.fillStyle='rgb(0,150,'+x+')';
				ctx.fillRect(0,0,20,20);
				ctx.restore();
				x +=12;
			}			
		}
	}
	function rotate()
	{
		ctx.fillStyle="#0095DD";
		ctx.fillRect(33,75,50,50);
		ctx.fillRect(116,75,50,50);
		ctx.fillStyle="#4D4E53";
		ctx.save();
		ctx.rotate(Math.PI/10);
		ctx.fillRect(33,75,50,50);
		ctx.restore();
		ctx.translate(116+25,75+25);
		ctx.rotate(Math.PI/4);
		ctx.translate(-116-25,-75-25);
		ctx.fillRect(116,75,50,50);
		//ctx.fillRect(-25,-25,50,50);
	}
	function scale()
	{
		ctx.scale(100,50);
		ctx.fillRect(1,1,10,10);
	}
	function solarSystem()
	{
		var canvas = $('#can1')[0];
		canvas.width=400;
		canvas.height=400;
		ctx=canvas.getContext("2d");

		x=400; //canvas width
		y=400; //canvas height
		orbitRadius=75;
		var sun = new Image();
		var moon = new Image();
		var earth = new Image();
		sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  		moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  		earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  		draw();
  		function draw()
  		{
  			ctx.restore();
	  		ctx.clearRect(0,0,x,y);
	  		var time=new Date();

	  		//sun
	  		ctx.drawImage(sun,0,0,x,y);

	  		//Orbit
	  		ctx.save();
	  		ctx.translate(x/2,y/2);
	  		ctx.strokeStyle='rgba(0,153,255,0.7)';
	  		ctx.beginPath();
	  		ctx.arc(0,0,orbitRadius,0,Math.PI*2,true);
	  		ctx.stroke();

	  		//Earth
	  		ctx.rotate(Math.PI*2*time.getSeconds()/60 + Math.PI*2*time.getMilliseconds()/60000);
	  		ctx.drawImage(earth,0,-(orbitRadius+earth.height/2));
	  		ctx.fillStyle='rgba(0,0,0,0.4)';
	  		ctx.fillRect(0,-(orbitRadius+2*earth.height),earth.width,2*earth.height); //Earth shadow

	  		//Moon
	  		ctx.translate(earth.width/2,-orbitRadius);
	  		ctx.rotate(Math.PI*2*time.getSeconds()/6 + Math.PI*2*time.getMilliseconds()/6000);
	  		ctx.drawImage(moon,0,-(earth.width));

	  		window.requestAnimationFrame(draw);
	  	}
	}
	function panorama()
	{
		var canvas = $('#can1')[0];
		canvas.width=800;
		ctx=canvas.getContext("2d");
		var img = new Image();
		img.src = 'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg';

		canvasHeight=200;
		canvasWidth=800;
		img.onload=function(){
			imageWidth=img.width;
			imageHeight=img.height;
			var counterx=0;
			setInterval(function(){counterx=draw(counterx);},20);
		}
		function draw(counter)
		{
			ctx.clearRect(0,0,800,200);
			ctx.drawImage(img,counter,0,imageWidth,imageHeight);
			if(counter===-imageWidth)
			{
				counter=0;
			}
			else if(counter<=-(imageWidth-canvasWidth))
			{
				ctx.drawImage(img,imageWidth+counter,0,imageWidth,imageHeight);
			}
			return counter-1;
		}
	}
	function ballGame()
	{	var canvas = $('#can1')[0];
		canvas.width=400;
		canvas.height=400;
		ctx=canvas.getContext("2d");
		var canvasWidth=400;
		var canvasHeight=400;

		//Corner boundry
		ctx.strokeRect(0,0,canvasWidth,canvasHeight);
		var ball = {
			x:100,
			y:100,
			radius:10,
			color:"blue",
			vx:5,
			vy:3,
			draw:function(){
				ctx.fillStyle=this.color;
				ctx.beginPath();
				ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
				ctx.fill();
			}
		}

		function draw()
		{
			// ctx.clearRect(0,0,canvasWidth,canvasHeight);      -- If no trailing effect neened
			//Trailing effect
			ctx.fillStyle="rgba(255,255,255,0.2)"
			ctx.fillRect(0,0,canvasWidth,canvasHeight);

			//Corner boundry
			ctx.strokeRect(0,0,canvasWidth,canvasHeight);

			//Ball motion
			ball.x+=ball.vx;
			ball.y+=ball.vy;

			//Bounce back
			if(ball.x+ball.radius>=canvasWidth||ball.x-ball.radius<=0)
				ball.vx=-ball.vx;
			else if(ball.y+ball.radius>=canvasHeight||ball.y-ball.radius<=0)
				ball.vy=-ball.vy;
			ball.draw();
			animframe=window.requestAnimationFrame(draw);
		}
		canvas.addEventListener("mousemove",function(e){
			//Corner boundry
			ctx.strokeRect(0,0,canvasWidth,canvasHeight);

			//Trailing effect
			ctx.fillStyle="rgba(255,255,255,0.2)"
			ctx.fillRect(0,0,canvasWidth,canvasHeight);

			ball.x=e.clientX;
			ball.y=e.clientY;
			ball.draw();
		})
		canvas.addEventListener("click",draw);

		canvas.addEventListener("mouseout",function(){ //Stops animation when cursor outside canvas area
			window.cancelAnimationFrame(animframe);
		})
	}
	function datePicker()
	{
		var canvas = $('#can1')[0];
		canvas.width=400;
		canvas.height=400;
		ctx=canvas.getContext("2d");

		//Randomly draw any image
		for(var i=0;i<10;i++)
		{
			for(var j=0;j<10;j++)
			{
				ctx.fillStyle='rgb(0,'+Math.round(255-j*25.5)+','+Math.round(255-i*25.5)+')';
				ctx.fillRect(j*20,i*20,20,20);
			}
		}

		canvas.addEventListener("mousemove",function(e){
			var imgdata = ctx.getImageData(e.layerX,e.layerY,1,1);
			var arr=imgdata.data;

			ctx.fillStyle='rgb('+arr[0]+','+arr[1]+','+arr[2]+')';
			ctx.fillRect(250,50,100,20);
			ctx.fillStyle='black';
			ctx.fillText('rgb('+arr[0]+','+arr[1]+','+arr[2]+')',260,60);
		})
	}
	function greyscaleAndInvert()
	{
		//Randomly draw any image
		function original()
		{
			for(var i=0;i<10;i++)
			{
				for(var j=0;j<10;j++)
				{
					ctx.fillStyle='rgb(0,'+Math.round(255-j*25.5)+','+Math.round(255-i*25.5)+')';
					ctx.fillRect(j*20,i*20,20,20);
				}
			}
		}
		function greyscale()
		{
			var imagedata = ctx.getImageData(0,0,200,200);
			var data = imagedata.data;
			for (var i = 0; i < data.length; i+=4) {
				var avg = (data[i]+data[i+1]+data[i+2])/3;
				data[i]=data[i+1]=data[i+2]=avg;
			}
			ctx.putImageData(imagedata,0,0)
		}
		function invert()
		{
			var imagedata = ctx.getImageData(0,0,200,200);
			var data = imagedata.data;
			for (var i = 0; i < data.length; i+=4) {
				data[i] = 255-data[i];
				data[i+1]= 255-data[i+1];
				data[i+2]= 255-data[i+2];
			}
			ctx.putImageData(imagedata,0,0)
		}
		$("body").append("<input type='button' id='greyscale' value='Greyscale'/>");
		$("body").append("<input type='button' id='invert' value='Invert'/>");
		$("body").append("<input type='button' id='original' value='Original'/>");

		$("#greyscale")[0].addEventListener("click",greyscale);
		$("#invert")[0].addEventListener("click",invert);
		$("#original")[0].addEventListener("click",original);
		original();
	}
	function Zoom()
	{
		var canvas = $('#can1')[0];
		canvas.width=400;
		canvas.height=400;
		ctx=canvas.getContext("2d");
		
		var img = new Image();
		img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
		img.onload = function() {
		  ctx.drawImage(img,0,0,200,200);	
		};

		ctx.imageSmoothingEnabled = false;
	    ctx.mozImageSmoothingEnabled = false;
	    ctx.msImageSmoothingEnabled = false;

		canvas.addEventListener("mousemove",function(e){
			x=e.layerX;
			y=e.layerY;
			ctx.drawImage(canvas,Math.abs(x),Math.abs(y),10,10,250,100,150,150);
		})
	}
	function saveImage()
	{
		for(var i=0;i<10;i++)
			{
				for(var j=0;j<10;j++)
				{
					ctx.fillStyle='rgb(0,'+Math.round(255-j*25.5)+','+Math.round(255-i*25.5)+')';
					ctx.fillRect(j*20,i*20,20,20);
				}
			}
			
		window.location.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
	}
	function hitRegion()
	{
		for(var i=0;i<10;i++)
			{
				for(var j=0;j<10;j++)
				{
					ctx.beginPath();
					ctx.fillStyle='rgb(0,'+Math.round(255-j*25.5)+','+Math.round(255-i*25.5)+')';
					ctx.rect(j*20,i*20,20,20);
					ctx.fill();
					ctx.addHitRegion({id: i+'_'+j});					
				}
			}
		canvas.addEventListener("mousemove", function(event){
			if(event.region) {
				ctx.clearRect(0,0,200,200);				
				for(var i=0;i<10;i++)
				{
					for(var j=0;j<10;j++)
					{
						ctx.beginPath();
					  	if(event.region.split("_")[0]==i && event.region.split("_")[1]==j)
							{
								ctx.fillStyle='rgb(255,255,255)';
								ctx.rect(j*20,i*20,20,20);
								ctx.fill();
								ctx.addHitRegion({id: i+'_'+j});								
							}
						else
						{
							ctx.fillStyle='rgb(0,'+Math.round(255-j*25.5)+','+Math.round(255-i*25.5)+')';
							ctx.rect(j*20,i*20,20,20);
							ctx.fill();
							ctx.addHitRegion({id: i+'_'+j});							
						}
					}
				}
			}
		});
	}



	function colorGame()
	{
		var canvas = $('#can1')[0];	
		canvas.height=600;
		canvas.width=800;
		ctx=canvas.getContext("2d");

		var canvas2 = $('#can2')[0];	
		canvas2.height=canvas.height;
		canvas2.width=canvas.width;
		ctx2=canvas2.getContext("2d");

		var x = canvas.width;
		var y = canvas.height;
		var vx=4;
		var vy=4;
		var anim;	

		var ball = {
			radius: 10,
			color:"blue",
			px:x/2-10,
			py:y-100,
			vx:5,
			vy:5,
			draw: function(){
				ctx.beginPath();
				ctx.arc(this.px,this.py,this.radius,0,Math.PI*2,true);
				ctx.fillStyle=this.color;
				ctx.fill();
			}
		};

		document.addEventListener("click",function(e){
			targetElement = e.target;
			if(e.target!=canvas && e.target!=menu.$resumeBtn[0]){
				window.cancelAnimationFrame(anim);
				menu.$menu.removeClass("hide");
			}
			else
				menu.$menu.addClass("hide");
		});

		document.addEventListener("keydown",function(e){
			e.preventDefault();
			if(targetElement==canvas || targetElement==menu.$menu[0] || targetElement==menu.$resumeBtn[0] || targetElement==menu.$newBtn[0])
			{	//Prevent speedup on every keydown
				if(anim!=null || anim!=undefined)
				window.cancelAnimationFrame(anim);

				if(menu.$menu.hasClass("hide")||e.keyCode==32)
				{
					switch(e.keyCode)
					{
						case 37 : //Left
								ball.vx = -vx;
								ball.vy=0;
								break;
						case 38 : //Top
								ball.vx=0;
								ball.vy=-vy;
								break;
						case 39 : //Right
								ball.vx=vx;
								ball.vy=0;
								break;
						case 40 : //Down
								ball.vy = vy;
								ball.vx=0;
								break;
						case 32 : //Spacebar - To pause
								menu.$menu.toggleClass("hide");
								if(!menu.$menu.hasClass("hide"))
								return;
								break;
						default: break;
					}
					draw();
				}
			}
		});

		var pattern={
			x:0,
			y:0,
			vx:2,
			vy:1,	//px per frame
			numberOfSections:7,
			sectionHeight:5,	//px
			spacing:150,	//px
			sectionColor:["#FF0080","green","#35E2F2","#F6DF0E","#404040","orange","#8C13FB"],
			storepattern:[],
			passColor:"#35E2F2",
			colourPattern:function(){
				if(this.y%(this.spacing+this.sectionHeight)==0) //New pattern form after previous one travelled no of pixels
				{	
					//Generate Random numbers to select colors from sectionColor array and push to storepattern array
					var arr=[];
					while(arr.length<this.numberOfSections)
					{
						var randomNum=Math.floor(Math.random()*this.sectionColor.length);
						found=false;
						for(var val in arr)
						{	
							if(randomNum==arr[val]){
								found=true;
								break;}
						}
						if(!found)
							arr[arr.length]=randomNum;
					}

					//If pass colour is not present in random array then
					var passindex=this.sectionColor.indexOf(this.passColor);
					if(arr.indexOf(passindex)==-1)
					{
						arr[Math.floor(Math.random()*arr.length)]=passindex;
					}
					this.storepattern=this.storepattern.concat(arr);
				}

				//Draw all patterns stored in array
				for(j=0;j<this.storepattern.length/this.numberOfSections;j++)
				{
					for(i=0;i<this.numberOfSections;i++)
					{	
						var xposition = (this.x+i*x/this.numberOfSections)%x;
						ctx.fillStyle=this.sectionColor[this.storepattern[i+j*this.numberOfSections]];
						ctx.fillRect(xposition,this.y-(this.spacing+this.sectionHeight)*j,x/this.numberOfSections,this.sectionHeight);
						if(xposition+x/this.numberOfSections>x)
						{	ctx.fillRect(0,this.y-(this.spacing+this.sectionHeight)*j,xposition+x/this.numberOfSections-x,this.sectionHeight);
							if(this.sectionColor[this.storepattern[i+j*this.numberOfSections]]==this.passColor && (ball.px-ball.radius>=xposition+x/this.numberOfSections-x && ball.px+ball.radius<=xposition) && ball.py-ball.radius<=this.y-(this.spacing+this.sectionHeight)*j+this.sectionHeight && ball.py+ball.radius>=this.y-(this.spacing+this.sectionHeight)*j)
								return true;
						}
						else
						{	//OUT condition
							if(this.sectionColor[this.storepattern[i+j*this.numberOfSections]]==this.passColor && (ball.px-ball.radius<=xposition || ball.px+ball.radius>=xposition+x/this.numberOfSections) && ball.py-ball.radius<=this.y-(this.spacing+this.sectionHeight)*j+this.sectionHeight && ball.py+ball.radius>=this.y-(this.spacing+this.sectionHeight)*j)
								return true;
						}
					}
				}

				//Clear stored Array
				if(this.y>=y)
				{
					this.storepattern.splice(0,this.numberOfSections);
					this.y -=(this.spacing+this.sectionHeight);
				}
				return false;	//isOut = false
			}
		}
		var score={
			x:x-60,
			y:30,
			score:0,
			color:"#EDEFBA",
			font:"20px Arial",
			displayScore:function(){
				ctx.fillStyle=this.color;
				ctx.font=this.font;
				ctx.fillText(this.score++,this.x,this.y);
			}
		}
		var background={
			numberOfStars:00,
			createStar:function(size,ctx){
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(Math.round(size/2),Math.round(size*1.73/2));
				ctx.lineTo(Math.round(size*3/2),Math.round(size*1.73/2));
				ctx.lineTo(Math.round(size*3/2-size*1.73/2),Math.round(size*1.73/2+size/2));
				ctx.lineTo(Math.round(size*2-size*1.73/2),Math.round(size*1.73+size/2));	
				ctx.lineTo(0,Math.round(size*1.73));
				ctx.lineTo(Math.round(-(size*2-size*1.73/2)),Math.round(size*1.73+size/2));
				ctx.lineTo(Math.round(-(size*3/2-size*1.73/2)),Math.round(size*1.73/2+size/2));
				ctx.lineTo(Math.round(-size*3/2),Math.round(size*1.73/2));
				ctx.lineTo(Math.round(-size/2),Math.round(size*1.73/2));	
				ctx.fill();
			},
			dynamicStars:function(ctx){
				ctx.fillRect(0,0,x,y);
				ctx.fillStyle="#fff";	

				for(var i=0;i<this.numberOfStars;i++)
				{
					ctx.save();
					ctx.translate(Math.floor(x*Math.random()),Math.floor(y*Math.random()));
					ctx.rotate(Math.random()*2*Math.PI);
					this.createStar(Math.floor(1+Math.random()*6),ctx);
					ctx.restore();
				}
			}
		}

		var menu={
			height:y,
			width:x,
			background:"rgba(255,255,255,0.3)",
			buttonHeight:50,
			buttonWidth:100,
			$menu:$("#menu"),
			$resumeBtn:$("#menu .resume_btn"),
			$newBtn:$("#menu .new_btn"),
			$label:$("#menu .label"),
			createMenu:function(){
				this.$menu.css({height:this.height+"px",width:this.width+"px",background:this.background});
				this.$resumeBtn.css({height:this.buttonHeight+"px",width:this.buttonWidth+"px",top:(this.height-this.buttonHeight)/2+"px",left:((this.width-this.buttonWidth)/2-100)+"px"});
				this.$newBtn.css({height:this.buttonHeight+"px",width:this.buttonWidth+"px",top:(this.height-this.buttonHeight)/2+"px",left:((this.width-this.buttonWidth)/2+100)+"px"});
				this.$label.css({top:(this.height-this.buttonHeight)/2+"px",left:((this.width)/2-150)+"px"});
				
				this.$resumeBtn[0].addEventListener("click",function(){draw();});
				this.$newBtn[0].addEventListener("click",function(){newGame();});
			}
		}

		function newGame(){
			score.score=0;
			pattern.y=0;
			ball.px=x/2-10;
			ball.py=y-100;
			menu.$label.addClass("hide");
			menu.$resumeBtn.removeClass("hide");
			draw();
		}

		function draw()
		{
			//ctx.clearRect(0,0,x,y);
			ctx.fillStyle="rgba(0,0,0,0.4)";
			ctx.fillRect(0,0,x,y);


			//Ball motion
			ball.px += ball.vx;
			ball.py += ball.vy;

			//When strike any wall
			if(ball.px+ball.radius>=x || ball.px-ball.radius<=0)
				ball.vx = -ball.vx;
			else if(ball.py+ball.radius>=y || ball.py-ball.radius<=0)
				ball.vy = -ball.vy;

			//Pattern motion
			var isOut = pattern.colourPattern();
			pattern.y += pattern.vy;
			pattern.x += pattern.vx;

			ball.draw();
			//Score
			score.displayScore();

			//If Out then no further animation
			if(isOut)
				{
					menu.$menu.removeClass("hide");
					menu.$label.removeClass("hide");
					menu.$resumeBtn.addClass("hide");
					menu.$label[0].innerHTML="Final Score: "+(score.score-1);
				}
			else
			anim = window.requestAnimationFrame(draw);
		}	
		//Creating Background (stars)
		background.dynamicStars(ctx2);

		menu.createMenu();
		ball.draw();	
	}
	colorGame();
}

$(document).ready(function(){
	draw();
})