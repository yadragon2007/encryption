const letterToBinary = {
  A: "01000001",
  B: "01000010",
  C: "01000011",
  D: "01000100",
  E: "01000101",
  F: "01000110",
  G: "01000111",
  H: "01001000",
  I: "01001001",
  J: "01001010",
  K: "01001011",
  L: "01001100",
  M: "01001101",
  N: "01001110",
  O: "01001111",
  P: "01010000",
  Q: "01010001",
  R: "01010010",
  S: "01010011",
  T: "01010100",
  U: "01010101",
  V: "01010110",
  W: "01010111",
  X: "01011000",
  Y: "01011001",
  Z: "01011010",
  a: "01100001",
  b: "01100010",
  c: "01100011",
  d: "01100100",
  e: "01100101",
  f: "01100110",
  g: "01100111",
  h: "01101000",
  i: "01101001",
  j: "01101010",
  k: "01101011",
  l: "01101100",
  m: "01101101",
  n: "01101110",
  o: "01101111",
  p: "01110000",
  q: "01110001",
  r: "01110010",
  s: "01110011",
  t: "01110100",
  u: "01110101",
  v: "01110110",
  w: "01110111",
  x: "01111000",
  y: "01111001",
  z: "01111010",
  " ": "00100000", // Space character
  "!": "00100001", // Exclamation mark
  "@": "01000000", // At symbol
  "#": "01000011", // Hash/Pound symbol
  $: "01000100", // Dollar symbol
  "%": "01001001", // Percent symbol
  "^": "01011110", // Caret symbol
  "&": "01010011", // Ampersand symbol
  "*": "00101010", // Asterisk symbol
  "+": "00101011",
  ",": "00101100",
  "-": "00101101",
  ".": "00101110",
  "/": "00101111",
  ":": "00111010",
  ";": "00111011",
  "<": "00111100",
  "=": "00111101",
  ">": "00111110",
  "?": "00111111",
  "@": "01000000",
  "[": "01011011",
  "\\": "01011100",
  "]": "01011101",
  "^": "01011110",
  _: "01011111",
  "`": "01100000",
  "{": "01111011",
  "|": "01111100",
  "}": "01111101",
  "~": "01111110",
  "€": "11100010 10000000", // Euro symbol
  "£": "10110000", // Pound symbol
  "¥": "10110001", // Yen symbol
  "©": "10101100", // Copyright symbol
  "®": "10101101", // Registered trademark symbol
  "™": "11101001", // Trademark symbol
  µ: "11011000", // Micro symbol
  "§": "10100111", // Section symbol
  "±": "10110010", // Plus-minus symbol
  "°": "11011111", // Degree symbol
  "×": "10110101", // Multiplication symbol
  "÷": "10110111", // Division symbol
  "≠": "10110011", // Not equal to symbol
  "≤": "10111100", // Less than or equal to symbol
  "≥": "10111101", // Greater than or equal to symbol
  "¢": "10100011", // Cent symbol
  "¤": "10100100", // Currency symbol
  "¦": "10111010", // Broken vertical bar symbol
  "¨": "10111000", // Diaeresis symbol
  "«": "10110011", // Left-pointing double angle quotation mark symbol
  "¬": "10110110", // Not symbol
  "¯": "10111111", // Macron symbol
  "°": "11011111", // Degree symbol
  "±": "10110010", // Plus-minus symbol
  "²": "11000010 10000010", // Superscript two symbol
  "³": "11000010 10000011", // Superscript three symbol
  "´": "10110100", // Acute accent symbol
  µ: "11011000", // Micro symbol
  "¶": "11011010", // Pilcrow symbol
  "·": "10111011", // Middle dot symbol
  "¸": "10111100", // Cedilla symbol
  "¹": "11000010 10000001", // Superscript one symbol
  º: "11000010 10110100", // Masculine ordinal indicator symbol
  "»": "10110101", // Right-pointing double angle quotation mark symbol
  "¼": "11000010 10000101", // Fraction one quarter symbol
  "½": "11000010 10000110", // Fraction one half symbol
  "¾": "11000010 10000111", // Fraction three quarters symbol
  "¿": "11000010 10111111", // Inverted question mark symbol
  "×": "10110101", // Multiplication symbol
  "÷": "10110111",
};
const binaryToLetter = {
  "01000001": "A",
  "01000010": "B",
  "01000011": "C",
  "01000100": "D",
  "01000101": "E",
  "01000110": "F",
  "01000111": "G",
  "01001000": "H",
  "01001001": "I",
  "01001010": "J",
  "01001011": "K",
  "01001100": "L",
  "01001101": "M",
  "01001110": "N",
  "01001111": "O",
  "01010000": "P",
  "01010001": "Q",
  "01010010": "R",
  "01010011": "S",
  "01010100": "T",
  "01010101": "U",
  "01010110": "V",
  "01010111": "W",
  "01011000": "X",
  "01011001": "Y",
  "01011010": "Z",
  "01100001": "a",
  "01100010": "b",
  "01100011": "c",
  "01100100": "d",
  "01100101": "e",
  "01100110": "f",
  "01100111": "g",
  "01101000": "h",
  "01101001": "i",
  "01101010": "j",
  "01101011": "k",
  "01101100": "l",
  "01101101": "m",
  "01101110": "n",
  "01101111": "o",
  "01110000": "p",
  "01110001": "q",
  "01110010": "r",
  "01110011": "s",
  "01110100": "t",
  "01110101": "u",
  "01110110": "v",
  "01110111": "w",
  "01111000": "x",
  "01111001": "y",
  "01111010": "z",
  "00100000": " ", // Space character
  "00100001": "!",
  "00100010": '"',
  "00100011": "#",
  "00100100": "$",
  "00100101": "%",
  "00100110": "&",
  "00100111": "'",
  "00101000": "(",
  "00101001": ")",
  "00101010": "*",
  "00101011": "+",
  "00101100": ",",
  "00101101": "-",
  "00101110": ".",
  "00101111": "/",
  "00111010": ":",
  "00111011": ";",
  "00111100": "<",
  "00111101": "=",
  "00111110": ">",
  "00111111": "?",
  "01000000": "@",
  "01011011": "[",
  "01011100": "\\",
  "01011101": "]",
  "01011110": "^",
  "01011111": "_",
  "01100000": "`",
  "01111011": "{",
  "01111100": "|",
  "01111101": "}",
  "01111110": "~",
  "11100010 10000000": "€", // Euro symbol
  10110000: "£", // Pound symbol
  10110001: "¥", // Yen symbol
  10101100: "©", // Copyright symbol
  10101101: "®", // Registered trademark symbol
  11101001: "™", // Trademark symbol
  11011000: "µ", // Micro symbol
  10100111: "§", // Section symbol
  10110010: "±", // Plus-minus symbol
  11011111: "°", // Degree symbol
  10110101: "×", // Multiplication symbol
  10110111: "÷", // Division symbol
  10110011: "≠", // Not equal to symbol
  10111100: "≤", // Less than or equal to symbol
  10111101: "≥", // Greater than or equal to symbol
  10100011: "¢", // Cent symbol
  10100100: "¤", // Currency symbol
  10111010: "¦", // Broken vertical bar symbol
  10111000: "¨", // Diaeresis symbol
  10110011: "«", // Left-pointing double angle quotation mark symbol
  10110110: "¬", // Not symbol
  10111111: "¯", // Macron symbol
  "11000010 10000010": "²", // Superscript two symbol
  "11000010 10000011": "³", // Superscript three symbol
  10110100: "´", // Acute accent symbol
  11011010: "¶", // Pilcrow symbol
  10111011: "·", // Middle dot symbol
  10111100: "¸", // Cedilla symbol
  "11000010 10000001": "¹", // Superscript one symbol
  "11000010 10110100": "º", // Masculine ordinal indicator symbol
  10110101: "»", // Right-pointing double angle quotation mark symbol
  "11000010 10000101": "¼", // Fraction one quarter symbol
  "11000010 10000110": "½", // Fraction one half symbol
  "11000010 10000111": "¾", // Fraction three quarters symbol
  "11000010 10111111": "¿", // Inverted question mark symbol
  10110101: "×", // Multiplication symbol
  10110111: "÷", // Division symbol
  // Add more binary representations and characters as needed
};
// encryption function
function encryptionToArray(text) {
  let encryption = [];
  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    encryption.push(letterToBinary[letter]);
  }
  return encryption;
}

function encryptionToText(text) {
  let encryption = "";
  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    encryption += letterToBinary[letter];
    encryption += ",";
  }
  return encryption;
}

// Decryption function

function decryption(encryptionData) {
  const encryption = handleData(encryptionData);
  let decryption = "";
  encryption.forEach((binary) => {
    decryption += binaryToLetter[binary];
  });
  return decryption;
}

function handleData(encryptionData) {
  if (typeof encryptionData == "string") {
    const encryption = encryptionData.split(",");
    return encryption;
  } else if (typeof encryptionData == "object") {
    return encryptionData;
  } else {
    throw new Error("Invalid data type");
  }
  return null;
}


module.exports = {
  encryptionToArray,
  encryptionToText,
  decryption,
}