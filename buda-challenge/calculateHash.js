"use strict";
const SHA256 = require("crypto-js/sha256");

const calculateHash = function (block) {
  const inputData =
    block.index +
    block.dateTime +
    block.previusHash +
    JSON.stringify(block.data) +
    block.nonce +
    block.hash;

  const inputToEncrypt = inputData.toString();
  console.log("stringToEncrypt:", inputToEncrypt);

  const resultPoW = SHA256(inputToEncrypt).toString();
  return resultPoW;
};

module.exports = {
  calculateHash,
};
