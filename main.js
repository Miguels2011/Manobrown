canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

carWidth = 75;
carHeight = 150;

bgImg = "parkingLot.jpg";
carImg = "car.png";

carX = 5;
carY = 400;

function add()
{
    bgImg = new Image();
    bgImg.onload = uploadBg;
    bgImg.src = bgImg

    carImg = new Image();
    carImg.onload = uploadCar;
    carImg.src = carImg;
}
	
function uploadBg()
{
    ctx.drawImage(bgImg, 0, 0, canvas.Width, canvas.height);
}

function uploadCar()
    {
        ctx.drawImage(carImg, carX, carY, carWidth, carHeight);
    }

window.addEventListener("keydown", myKeyDown)

function myKeyDown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
}
//Definir função para mover o carro para cima
    
//Definir função para mover o carro para baixo

//Definir função para mover o carro para o lado esquerdo

//Definir função para mover o lado direito do carro
