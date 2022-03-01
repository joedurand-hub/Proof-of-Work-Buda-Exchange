"use strict";

const calcHash = require("./calculateHash");
const calculateHash = calcHash.calculateHash;

class Block {
  constructor(index, dateTime, data, previusHash = "") {
    this.index = index;
    this.dateTime = dateTime;
    this.previusHash = previusHash;
    this.data = data;
    this.nonce = 0;
    this.hash = calculateHash(this);
  }
  miningBlocks(difficulty) {
    while (this.hash.substring(0, difficulty) !== "b00da") {
      //
      this.nonce++;
      this.hash = calculateHash(this);
    }
  }
}

module.exports = {
  Block,
};
