var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
  
// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');


colorPersonalizado.addEventListener('change', 
  (function(){
    colorActual = colorPersonalizado.value;
    $('#indicador-de-color').css("background-color", colorActual);
  })
);


var paleta = document.getElementById("paleta");
var grillaPixel = document.getElementById("grilla-pixeles");

function paletaDinamica(){
  for (var i = 0; i < nombreColores.length; i++){

  var divCreado = document.createElement("div");
  divCreado.className = ("color-paleta");
  divCreado.style.backgroundColor = nombreColores[i];
  paleta.appendChild(divCreado);
}

}

function grillaDinamica(){
  for (var i = 0; i <1750; i++){
    var grilla = document.createElement("div");
    grillaPixel.appendChild (grilla);

  }

}


$(document).ready(function(){
    
  var $colorActual = $("#indicador-de-color");
  var $coloresPaleta = $(".color-paleta");
  $($coloresPaleta).click(function(){
    var $color = $(this).css("background-color");
    $colorActual.css("background-color", $color);
  });
  


  var $grilla = $("#grilla-pixeles").children();

  function clickPintar(){
      
    $($grilla).click(function(){
    var colorPintar = $colorActual.css("background-color");
    $(this).css("background-color", colorPintar);
  
  });
  }

clickPintar();




function mouseOver(){
  
var checkMouse = false;
  $grilla.mouseup(function(){
    checkMouse = false;
   /*  console.log(checkMouse);
    return checkMouse; */
  });
  
    $grilla.mousedown(function(){
    checkMouse = true;
    /* console.log(checkMouse);
    return checkMouse; */
  });
  $grilla.addEventListener("mouseover", function(event){
        if(checkMouse){     
        var colorPintar = $colorActual.css("background-color");
        event.target.style.backgroundColor = colorPintar;
        }
  });
}

mouseOver();

});




grillaDinamica();
paletaDinamica();