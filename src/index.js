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
  let result = "";

  for (let i = 0; i < expr.length; i = i + 10) {
    array.push(expr.slice(i, i + 10));
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i]
      .replaceAll("10", ".")
      .replaceAll("11", "-")
      .replaceAll("00", "");
  }

  for (let i = 0; i < array.length; i++) {
    result = result + MORSE_TABLE[array[i]];
  }

  return result;
}

module.exports = {
    decode
}