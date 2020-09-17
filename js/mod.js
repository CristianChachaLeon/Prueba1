// Elementos para cambiar color de la caja_regalo
const caja = document.getElementById('caja_pintar')
const stikers = document.getElementById('stiker')
var direccionColor = "imagenes/caja_blanca.png";
var direccionStiker = "imagenes/stiker_vacio.png"
const cajaPintada = document.getElementById('caja_pintada')
cajaPintada.src = "imagenes/caja_blanca.png";
const lazo = document.getElementById('lazo')
const stikerSobreCaja = document.getElementById('stiker_sobre_caja')

//ELEMENTOS CANVAS
var canvas = document.getElementById('canvas_gorras');
var contexto = canvas.getContext("2d");

const lazo1 = document.getElementById('btn_lazo')

var img1 = new Image();
img1.src = 'imagenes/obj1.png';
var img2 = new Image();
img2.src = 'imagenes/obj2.png';
var img3 = new Image();
img3.src = 'imagenes/obj3.png';
var img4 = new Image();
img4.src = 'imagenes/obj4.png';

var imgGorra1 = new Image();
imgGorra1.src = 'imagenes/gorra_1.png';
var imgGorra2 = new Image();
imgGorra2.src = 'imagenes/gorra_2.png';
var imgGorra3 = new Image();
imgGorra3.src = 'imagenes/gorra_3.png';
var imgGorra4 = new Image();
imgGorra4.src = 'imagenes/gorra_4.png';
var imgGorra5 = new Image();
imgGorra5.src = 'imagenes/gorra_5.png';
var imgGorra6 = new Image();
imgGorra6.src = 'imagenes/gorra_6.png';
var imgGorra7 = new Image();
imgGorra7.src = 'imagenes/gorra_7.png';
var imgGorra8 = new Image();
imgGorra8.src = 'imagenes/gorra_8.png';

//ELEMENTOS CANVAS2
var canvas2 = document.getElementById('canvas_gafas');
var contexto2 = canvas2.getContext("2d");
const lazo2 = document.getElementById('btn_lazo2');

var imgGafa1 = new Image();
imgGafa1.src = 'imagenes/gafa_1.png';
var imgGafa2 = new Image();
imgGafa2.src = 'imagenes/gafa_2.png';
var imgGafa3 = new Image();
imgGafa3.src = 'imagenes/gafa_3.png';
var imgGafa4 = new Image();
imgGafa4.src = 'imagenes/gafa_4.png';
var imgGafa5 = new Image();
imgGafa5.src = 'imagenes/gafa_5.png';
var imgGafa6 = new Image();
imgGafa6.src = 'imagenes/gafa_6.png';
var imgGafa7 = new Image();
imgGafa7.src = 'imagenes/gafa_7.png';
var imgGafa8 = new Image();
imgGafa8.src = 'imagenes/gafa_8.png';





//ELEMENTOS CANVAS3
var canvas3 = document.getElementById('canvas_gomas');
var contexto3 = canvas3.getContext("2d");
const lazo3 = document.getElementById('btn_lazo3')


// const lazo3=document.getElementById('btn_lazo3');

var imgGomita1 = new Image();
imgGomita1.src = 'imagenes/gomitas_1.png';
var imgGomita2 = new Image();
imgGomita2.src = 'imagenes/gomitas_2.png';
var imgGomita3 = new Image();
imgGomita3.src = 'imagenes/gomitas_3.png';
var imgGomita4 = new Image();
imgGomita4.src = 'imagenes/gomitas_4.png';



//MUSICA DE FONDO
function reproducir() {
  const audioArchivo = document.getElementById('background_audio')
  console.log('reproduccion de audio');
  audioArchivo.play();
}


// CAMBIAR COLOR DE CAJA
function cambiarColorCaja(Color) {
  console.log(Color);
  switch (Color) {
    case 'Rojo':
      caja.src = "imagenes/caja_roja.png";
      // cajaPintada.src="imagenes/caja_roja.png";
      direccionColor = "imagenes/caja_roja.png";
      console.log(direccionColor);
      break;
    case 'Beige':
      caja.src = "imagenes/caja_beige.png";
      cajaPintada.src = "imagenes/caja_beige.png";
      direccionColor = "imagenes/caja_beige.png";
      console.log(direccionColor);
      break;
    case 'Verde':
      caja.src = "imagenes/caja_verde.png";
      direccionColor = "imagenes/caja_verde.png";
      break;
    case 'Blanco':
      caja.src = "imagenes/caja_blanca.png";
      direccionColor = "imagenes/caja_blanca.png";
      break;
    case 'Azul':
      caja.src = "imagenes/caja_azul.png";
      direccionColor = "imagenes/caja_azul.png";
      break;
    case 'Negro':
      caja.src = "imagenes/caja_negra.png";
      direccionColor = "imagenes/caja_negra.png";
      break;
    case 'Rosa':
      caja.src = "imagenes/caja_rosa.png";
      direccionColor = "imagenes/caja_rosa.png";
      break;
    case 'Dorado':
      caja.src = "imagenes/caja_dorada.png";
      direccionColor = "imagenes/caja_dorada.png";
      break;
    case 'Espacial':
      caja.src = "imagenes/caja_espacial.png";
      direccionColor = "imagenes/caja_espacial.png";
      break;
    default:
  }
  cajaPintada.src = direccionColor;
}


//CAMBIAR STIKERS DE LA CAJA
function cambiarStik(TipoStiker) {
  switch (TipoStiker) {
    case 'Corazones':
      stikerSobreCaja.src = direccionStiker = "imagenes/stiker_corazon_rojo.png"
      break;

    case 'Estrellas':
      stikerSobreCaja.src = direccionStiker = "imagenes/stiker_estrella.png"
      break;

    case 'Planetas':
      stikerSobreCaja.src = direccionStiker = "imagenes/stiker_planeta.png"
      break;

    case 'Ositos':
      stikerSobreCaja.src = direccionStiker = "imagenes/stiker_oso.png"
      break;
    default:
  }
  document.getElementById('stiker_c').src = direccionStiker;
  document.getElementById('caja_c').src = direccionColor;
}



function ajustarcanvas(canvas_aux) {
  var s = getComputedStyle(canvas_aux);
  var w = s.width;
  var h = s.height;
  canvas_aux.width = w.split('px')[0];
  console.log(w);
  canvas_aux.height = h.split('px')[0];
  console.log(h);
}
function mostrarObjeto(flech) {
  console.log('fun para mostrarObjet');
  flech.style.display = 'block';
}

async function colocarObjetos(cantidad) {
  ajustarcanvas(canvas);
  for (var i = 0; i < cantidad; i++) {
    var eleccion = Math.floor(Math.random() * (8 - 0)) + 0;
    var x = Math.floor(Math.random() * (900 - 0)) + 0;
    var y = Math.floor(Math.random() * (600 - 0)) + 0;
    var escala = 25 * Math.floor(Math.random() * (5 - 1)) + 1;
    console.log(eleccion);
    switch (eleccion) {
      case 0:
        contexto.drawImage(imgGorra1, x, y, escala, escala);;
        break;
      case 1:

        contexto.drawImage(imgGorra2, x, y, escala, escala);
        break;
      case 2:
        contexto.drawImage(imgGorra3, x, y, escala, escala);
        break;
      case 3:
        contexto.drawImage(imgGorra4, x, y, escala, escala);
        break;
      case 4:
        contexto.drawImage(imgGorra5, x, y, escala, escala);
        break;

      case 5:
        contexto.drawImage(imgGorra6, x, y, escala, escala);
        break;
      case 6:
        contexto.drawImage(imgGorra7, x, y, escala, escala);
        break;
      case 7:
        contexto.drawImage(imgGorra8, x, y, escala, escala);
        break;


      default:
    }
    await sleep(75);
  }
  console.log('fuera de loop');
  document.getElementById('flecha_gorra').style.display = 'block';
}

async function colocarObjetos2(cantidad) {
  ajustarcanvas(canvas2);
  for (var i = 0; i < cantidad; i++) {
    var eleccion = Math.floor(Math.random() * (8 - 0)) + 0;
    var x = Math.floor(Math.random() * (900 - 0)) + 0;
    var y = Math.floor(Math.random() * (600 - 0)) + 0;
    var escala = 25 * (Math.floor(Math.random() * (4 - 1)) + 1);
    console.log('escala:' + escala);
    var rotacion = Math.floor(Math.random() * (2 - 1)) + 1;
    console.log(eleccion);
    switch (eleccion) {
      case 0:
        console.log('caso 0');
        contexto2.drawImage(imgGafa1, x, y, escala, escala);
        // contexto2.rotate(rotacion* Math.PI/ 180);
        break;
      case 1:
        console.log('caso 1');
        contexto2.drawImage(imgGafa2, x, y, escala, escala);
        break;
      case 2:

        console.log('caso 2');
        contexto2.drawImage(imgGafa3, x, y, escala, escala);
        break;
      case 3:
        console.log('caso 3');
        contexto2.drawImage(imgGafa4, x, y, escala, escala);
        break;
      case 4:
        contexto2.drawImage(imgGafa5, x, y, (escala * 2.68) / 2, (escala) / 2);
        break;
      case 5:
        contexto2.drawImage(imgGafa6, x, y, (escala * 2.25) / 2, escala / 2);
        break;
      case 6:
        contexto2.drawImage(imgGafa7, x, y, escala, escala);
        break;
      case 7:
        contexto2.drawImage(imgGafa8, x, y, (escala * 2.82) / 2, escala / 2);
        break;
      default:
    }
    contexto2.rotate(0);
    await sleep(50);
  }
  console.log('fuera loop dos');
  document.getElementById('flecha_gafa').style.display = 'block';
}

// var imgGomita1=new Image();
// img1.src='imagenes/obj1.png';


function colocarObjetos3() {
  ajustarcanvas(canvas3);
  // var arrayImg=[]
  // var arrayX=[]
  // var arrayY=[]
  // for (var i = 0; i < 15; i++) {
  //   var aleatorio=Math.floor(Math.random() * (4 - 0)) + 0;
  //   switch (aleatorio) {
  //     case 0:
  //         arrayImg.push(img1);
  //       break;
  //     case 1:
  //         arrayImg.push(img2);
  //
  //       break;
  //     case 2:
  //         arrayImg.push(img3);
  //
  //       break;
  //     case 3:
  //         arrayImg.push(img4);
  //       break;
  //     default:
  //     }
  // }
  // console.log(arrayImg);
  var arrayImg = [imgGomita1, imgGomita2, imgGomita3, imgGomita4, imgGomita1,
    imgGomita2, imgGomita3, imgGomita4, imgGomita1, imgGomita2,
    imgGomita3, imgGomita4, imgGomita1, imgGomita2, imgGomita3,
    imgGomita4, imgGomita1, imgGomita2, imgGomita3, imgGomita4
  ];
  // for (var i = 0; i < 15; i++) {
  //   var espacio=150*(Math.floor(Math.random() * (6 - 0)) + 0);
  //   arrayX.push(espacio);
  // }
  var arrayX = [0, 200, 400, 600, 800,
    100, 300, 500, 700, 900,
    0, 200, 400, 600, 800,
    100, 300, 500, 700, 900
  ];
  // for (var i = 0; i < 15; i++) {
  //   var espacio=-100*(Math.floor(Math.random() * (5 - 0)) + 0);
  //   arrayY.push(espacio);
  // }
  var arrayY = [0, 0, 0, 0, 0,
    -100, -100, -100, -100, -100,
    -300, -300, -300, -300, -300,
    -500, -500, -500, -500, -500,
  ];

  for (var i = 0; i < arrayImg.length; i++) {
    contexto3.drawImage(arrayImg[i], arrayX[i], arrayY[i]);
  }
  // contexto3.drawImage(arrayImg[0],arrayX[0],arrayY[0]);
  // contexto3.drawImage(arrayImg[1],arrayX[1],arrayY[1]);
  // contexto3.drawImage(arrayImg[2],arrayX[2],arrayY[2]);
  // contexto3.drawImage(arrayImg[3],arrayX[3],arrayY[3]);

  desplazar(contexto3, canvas3, arrayImg, arrayX, arrayY);
  document.getElementById('flecha_goma').style.display = 'block';
}

async function desplazar(contexto3, canvas3, arrayImg, arrayX, arrayY) {
  for (var i = 0; i < 3000; i++) {
    desAbajo(contexto3, canvas3, arrayImg, arrayX, arrayY);
    await sleep(1);

  }
}

function desAbajo(ctx, canv, aI, aX, aY) {
  ctx.clearRect(0, 0, canv.width, canv.height);
  var eleccion = Math.floor(Math.random() * (aI.length - 0)) + 0;
  var dy = 15;
  aY[eleccion] += dy;
  for (var i = 0; i < aI.length; i++) {
    contexto3.drawImage(aI[i], aX[i], aY[i]);
  }


}

function moverAbajo(x, y, dy) {
  contexto.clearRect(0, 0, canvas.width, canvas.height);
  contexto.drawImage(img1, x, y + dy);
  contexto.drawImage(img2, x, y + dy);
  contexto.drawImage(img3, x, y + dy);
  contexto.drawImage(img4, x, y + dy);
  y += dy;
}


function ocultarObjeto(objeto) {
  objeto.style.display = 'none';
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



console.log('ejecutada funcion');
