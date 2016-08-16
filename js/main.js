// Next steps:
// test each part
// convert input into an array
// count number of characters in the array
// use 'for' method to apply full function multiple times to each character in array
// Clamp initialization for each carousel title item
 //  // 1- Setup array and find each carousel-title instance in homepage DOM, get ID attribute
 //  var carouselItemArray = [];
 //  $('.carousel-title').each(function( index ) {
 //    carouselItemArray[index] = $(this).attr('id');
 //  });

 //  // 2- Iterate through carouselItemArray and create $clamp instance for each array item
 //  var index, len;
 //  for (index = 0, len = carouselItemArray.length; index < len; ++index) {
 //    var clampTarget = document.getElementById(carouselItemArray[index]);
 //    $clamp(clampTarget, {clamp: 'auto'});
 //  }


// Taking input letter from user and making it lowercase
//$('#').val().trim().toLowerCase();

 
function encode(inputLetter) {
var numericInput; // assigning letters to numbers in order to apply a mathematical function
switch (inputLetter) {
  case 'a':
    numericInput = 1;
    break;
  case 'b':
    numericInput = 2;
    break;    
  case 'c':
    numericInput = 3;
    break;
  case 'd':
    numericInput = 4;
    break;    
  case 'e':
    numericInput = 5;
    break;
  case 'f':
    numericInput = 6;
    break;
  case 'g':
    numericInput = 7;
    break;        
  case 'h':
    numericInput = 8;
    break;
  case 'i':
    numericInput = 9;
    break;
  case 'j':
    numericInput = 10;
    break;
  case 'k':
    numericInput = 11;
    break;
  case 'l':
    numericInput = 12;
    break;
  case 'm':
    numericInput = 13;
    break;
  case 'n':
    numericInput = 14;
    break;    
  case 'o':
    numericInput = 15;
    break;
  case 'p':
    numericInput = 16;
    break;    
  case 'q':
    numericInput = 17;
    break;
  case 'r':
    numericInput = 18;
    break;
  case 's':
    numericInput = 19;
    break;        
  case 't':
    numericInput = 20;
    break;
  case 'u':
    numericInput = 21;
    break;
  case 'v':
    numericInput = 22;
    break;
  case 'w':
    numericInput = 23;
    break;
  case 'x':
    numericInput = 24;
    break; 
  case 'y':
    numericInput = 25;
    break;
  case 'z':
    numericInput = 26;
    break;
  default:
  return inputLetter;
    ;    // if not a letter such as # " ' etc., return same value
};
var key = 200; // $('#key');
// applying very simple function based on the key from the user (number from 1-10)
var keyedInput = numericInput + key;
// trimming that number so it will always be within 1-26
var trimmedInput;

if (keyedInput > 26) {
		trimmedInput = keyedInput % 26 + 1;
	}
	else {
		trimmedInput = keyedInput;
	}

// taking that number and reversing it back to a letter using the same scheme
var encodedOutput;
switch (trimmedInput) { 
  case 1:
    encodedOutput = 'a';
    break;
  case 2:
    encodedOutput = 'b';
    break;    
  case 3:
    encodedOutput = 'c';
    break;
  case 4:
    encodedOutput = 'd';
    break;    
  case 5:
    encodedOutput = 'e';
    break;
  case 6:
    encodedOutput = 'f';
    break;
  case 7:
    encodedOutput = 'g';
    break;        
  case 8:
    encodedOutput = 'h';
    break;
  case 9:
    encodedOutput = 'i';
    break;
  case 10:
    encodedOutput = 'j';
    break;
  case 11:
    encodedOutput = 'k';
    break;
  case 12:
    encodedOutput = 'l';
    break;
  case 13:
    encodedOutput = 'm';
    break;
  case 14:
    encodedOutput = 'n';
    break;    
  case 15:
    encodedOutput = 'o';
    break;
  case 16:
    encodedOutput = 'p';
    break;    
  case 17:
    encodedOutput = 'q';
    break;
  case 18:
    encodedOutput = 'r';
    break;
  case 19:
    encodedOutput = 's';
    break;        
  case 20:
    encodedOutput = 't';
    break;
  case 21:
    encodedOutput = 'u';
    break;
  case 22:
    encodedOutput = 'v';
    break;
  case 23:
    encodedOutput = 'w';
    break;
  case 24:
    encodedOutput = 'x';
    break; 
  case 25:
    encodedOutput = 'y';
    break;
  case 26:
    encodedOutput = 'z';
    break;
  default:
    inputLetter = encodedOutput;    
}

return encodedOutput;
}

function encodeThis () {
  var practiceText = document.getElementById('readable').value; 
  var inputText = practiceText.split('');
  var encodedText = '';
  var i;
  for ( i = 0; i < inputText.length; i++) {
  encodedText += encode(inputText[i]);
  }
  document.getElementById('encoded').value = encodedText;
}