console.log("READY PLAYER ONE?");

var currentColor = 'white';
var colorPalette = [
  {
    color: 'red',
    className: 'palette-red'
  },
  {
    color: 'orange',
    className: 'palette-orange'
  },
  {
    color: 'yellow',
    className: 'palette-yellow'
  },
  {
    color: 'green',
    className: 'palette-green'
  },
  {
    color: 'blue',
    className: 'palette-blue'
  },
  {
    color: 'purple',
    className: 'palette-purple'
  },
  {
    color: 'black',
    className: 'palette-black'
  }
];


var allDivs = document.getElementsByClassName('canvas');

 for (var i = 0; i < allDivs.length; i++) {
   allDivs[i].addEventListener('click', function(){
     this.style.backgroundColor = currentColor;
   });
 }

var newDiv = undefined;
 
// Add divs with color to the palette
for ( var i = 0; i < colorPalette.length; i++){
  newDiv = document.createElement('div');
  newDiv.style.backgroundColor = colorPalette[i].color;
  newDiv.className = colorPalette[i].className;
  
  document.getElementsByTagName('section')[0].appendChild(newDiv); 
  
   newDiv.addEventListener('click', function(){
    currentColor = this.style.backgroundColor;
  });
} 
 
 
// append a single new color to the palette
// var newDiv = document.createElement('div');
// newDiv.style.backgroundColor = 'yellow';
// newDiv.className = "palette-yellow";
// document.getElementsByTagName('section')[0].appendChild(newDiv);
 
 // color palette
//  document.getElementsByClassName('palette-red')[0].addEventListener('click', function(){
//    currentColor = 'red';
//  });
//  
//   document.getElementsByClassName('palette-purple')[0].addEventListener('click', function(){
//    currentColor = 'purple';
//  });
//  
//    document.getElementsByClassName('palette-yellow')[0].addEventListener('click', function(){
//    currentColor = 'yellow';
//  });
 
