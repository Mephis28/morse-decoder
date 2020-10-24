const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
	"**********": " "
};

function decode(expr) {
  let array = [];
  let newArray = [];
  let string = "";
  let newString = "";
  let result = "";

  for (let i = 0; i < expr.length; i = i + 10) {
    array.push(expr.slice(i, i + 10));
  }

  for (let i = 0; i < array.length; i++) {
    string = array[i];
    newString = "";
    for (let j = 0; j < string.length; j = j + 2) {
      if (string[j] + string[j + 1] === "10") {
        newString = newString + ".";
      }
      if (string[j] + string[j + 1] === "11") {
        newString = newString + "-";
      }
    }
    if (string === "**********") {
      newArray.push(string);
    } else {
      newArray.push(newString);
    }
  }
  
  for (let i = 0; i < newArray.length; i++) {
    result = result + MORSE_TABLE[newArray[i]];
  }

  return result;
}

module.exports = {
    decode
}