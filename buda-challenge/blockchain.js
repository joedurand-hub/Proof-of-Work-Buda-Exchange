"use strict";

const block = require("./block");
const Block = block.Block;

class Blockchain {
  constructor() {
    this.difficulty = 5;
    const genesisBlock = new Block(0, new Date().getTime(), 1, null);
    genesisBlock.miningBlocks(this.difficulty);
    this.chain = [genesisBlock];
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  createNewBlock(data) {
    const latestBlock = this.getLatestBlock();
    const newBlock = new Block(
      latestBlock.index + 1,
      new Date().getTime(),
      data,
      latestBlock.hash
    );
    newBlock.miningBlocks(this.difficulty);
    this.addBlock(newBlock);
  }

  addBlock(newBlock) {
    this.chain.push(newBlock);
  }

  printBlock() {
    this.chain.forEach((block) => console.log(`${JSON.stringify(block)} \n`));
    console.log("-------------------------------");
  }
}

const blockchain = new Blockchain();

blockchain.printBlock();
