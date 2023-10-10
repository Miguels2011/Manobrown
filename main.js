//Criar uma referência para tela
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Dê altura e largura específicas para a imagem do carro

carWidth = 75;
carHeight= 150;

bgImg = "parkingLot.jpg";
carImg = "car.png";

//Defina a posição inicial para uma imagem de carro.

carX = 5;
carY = 400;

function add() {
	//carregar carro e imagens de fundo na tela.
	bgImgTag = new Image();
	bgImgTag.onload = uploadBg;
	bgImgTag.src = bgImg;

	carImgTag = new Image();
	carImgTag.onload = uploadCar;
	carImgTag.src = carImg;
}

function uploadBg() 
{
	//Defina a função ‘uploadBg’
	ctx.drawImage(bgImgTag, 0, 0, canvas.width, canvas.height);

}

function uploadCar() 
{
	//Defina a função ‘uploadCar’.
	ctx.drawImage(carImgTag, carX, carY, carWidth, carHeight);

}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Definir função para mover o carro para cima
	if(carY >=0)
	{
		carY = carY - 10;
		console.log("Quando cima é pressionado, x = " + carX + " | y = " + carY);
		uploadBg();
		uploadCar();
	}
}

function down()
{
	//Definir função para mover o carro para baixo
	if(carY <=500)
	{
		carY = carY + 10;
		console.log("Quando baixo é pressionado, x = " + carX + " | y = " + carY);
		uploadBg();
		uploadCar();
	}

}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
	if(carX >=0)
	{
		carX = carX - 10;
		console.log("Quando esquerda é pressionado, x = " + carX + " | y = " + carY);
		uploadBg();
		uploadCar();
	}

}

function right()
{
	//Definir função para mover o lado direito do carro
	if(carX <=700)
	{
		carX = carX + 10;
		console.log("Quando direita é pressionado, x = " + carX + " | y = " + carY);
		uploadBg();
		uploadCar();
	}
}
