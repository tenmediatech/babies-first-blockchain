'use strict'

const Block = require('./block.js')

class Blockchain {
  //section 1 Genesis block creation
  constructor() {
    this.chain = [this.createGenesisBlock()]
  }
  createGenesisBlock() {
    return new Block(0, "11/14/2018", "Genesis block", "0")
  }
  //section 2 adding new blocks

getLatestBlock()

{

return this.chain[this.chain.length - 1];

}

addBlock(newBlock) {

newBlock.previousHash = this.getLatestBlock().hash;

newBlock.hash = newBlock.calculateHash();

this.chain.push(newBlock);

}

//section 3 validating the chain

isChainValid()

{

for (let i = 1; i < this.chain.length; i++)

{

const currentBlock = this.chain[i];

const previousBlock = this.chain[i - 1];

if (currentBlock.hash !== currentBlock.calculateHash()) {


console.log('Detected invalid block. Redownloading Blockchain')
return false;

}

if (currentBlock.previousHash !== previousBlock.hash)

{

console.log('Detected invalid block. Redownloading Blockchain')
return false;

}

if (currentBlock.index !== i) {

  console.log('Detected invalid block. Redownloading Blockchain')
  return false
}

}
console.log('Chain is valid!')
return true;

}

}

module.exports = Blockchain
