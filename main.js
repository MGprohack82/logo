
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "blue"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(328, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

color = "gold"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(370, 260, 40 ,0 , 2*Math.PI);
ctx.stroke();

color = "black"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(413, 203, 40 ,0 , 2*Math.PI);
ctx.stroke();

color = "green"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(460, 260, 40 ,0 , 2*Math.PI);
ctx.stroke();

color = "red"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth =3;
ctx.arc(500, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();