import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {

  constructor(mashineType) {
    this.mashineType = mashineType;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.square = [];
  }

  generateSquare() {
    for (let i = 0; i < this.alphabet.length; i++) {
        let row = this.alphabet.slice(i);
        row += this.alphabet.slice(0, i);
        this.square.push(row);
    }
  }

  repeatString(firstString, secondString) {
    let resultString = "";
    let firstStringLength = firstString.length;
    let it = 0;
    for (let i = 0; i < secondString.length; i++) {
        if (it === firstStringLength) {
            it = 0;
        }
        if (this.alphabet.indexOf(secondString[i].toUpperCase()) == -1) {
          resultString += ' ';
        } else {
          resultString += firstString[it];
          it++;
        }
    }
    return resultString;
  }

  encrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    if (!message || !key || arguments.length < 2) throw new Error('Incorrect arguments!');

    let encryptMessage = "";
    let newKey = this.repeatString(key, message);
    this.generateSquare();

    for(let it = 0; it < message.length; it++){ 
      let i = this.alphabet.indexOf(message[it].toUpperCase());
      if (i !== -1) {
        let j = this.alphabet.indexOf(newKey[it].toUpperCase());
        encryptMessage += this.square[i][j];
      } else {
        encryptMessage += message[it].toUpperCase();
      }
    }
    if (this.mashineType == false) {
      return encryptMessage.split('').reverse().join('').toUpperCase();
    } else {
      return encryptMessage.toUpperCase();
    }
  }

  decrypt(encryptedMessage, key) {
    //throw new NotImplementedError('Not implemented');
    if (!encryptedMessage || !key || arguments.length < 2) throw new Error('Incorrect arguments!');
    let decryptMessage = "";
    let newKey = this.repeatString(key, encryptedMessage);
    this.generateSquare();
    for (let it = 0; it < encryptedMessage.length; it++) {
        let i = this.alphabet.indexOf(newKey[it].toUpperCase());
        if (i !== -1) {
          let j = this.square[i].indexOf(encryptedMessage[it].toUpperCase());
          decryptMessage += this.alphabet[j];
        } else {
          decryptMessage += encryptedMessage[it].toUpperCase();
        }
    }
    if (this.mashineType == false) {
      return decryptMessage.split('').reverse().join('').toUpperCase();
    } else {
      return decryptMessage.toUpperCase();
    }
  }
}
