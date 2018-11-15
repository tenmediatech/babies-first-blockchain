const Blockchain = require('./blockchain.js')
const Block = require('./block.js')

let masterCitizenVote = new Blockchain()
let clientChain1 = new Blockchain()
//console.log(isValid)
//console.log(CitizenVoteChain.chain)
const addVotes = function (CitizenVoteChain) {
CitizenVoteChain.addBlock(new Block(CitizenVoteChain.chain.length, "11/15/2018", {voter: 'person1', candidate: 'candidate1'}))

CitizenVoteChain.addBlock(new Block(CitizenVoteChain.chain.length, "11/16/2018", {voter: 'person2', candidate: 'candidate2'}))

CitizenVoteChain.addBlock(new Block(CitizenVoteChain.chain.length, "11/17/2018", {voter: 'person3', candidate: 'candidate3'}))

CitizenVoteChain.addBlock(new Block(CitizenVoteChain.chain.length, "11/18/2018", {voter: 'person4', candidate: 'candidate4'}))

CitizenVoteChain.addBlock(new Block(CitizenVoteChain.chain.length, "11/18/2018", {voter: 'person5', candidate: 'candidate5'}))

}

const checkValidity = function (chain) {
  let isValid = chain.isChainValid()
  if (!isValid) {
    chain = masterCitizenVote

    checkValidity(chain)
  } else if (isValid) {
    console.log(chain.chain[clientChain1.chain.length - 1].data)
    console.log(chain.chain[clientChain1.chain.length - 3].data)
    console.log(chain.chain)
  }
}
addVotes(masterCitizenVote)
addVotes(clientChain1)

// Tests start here

// Downloads blockchain to client
// console.log(clientChain1.chain[clientChain1.chain.length - 1].data)
// console.log(clientChain1.chain[clientChain1.chain.length - 3].data)
// Changes the values in two different blocks
// clientChain1.chain[clientChain1.chain.length - 1].data.candidate = 'candidate4'
// clientChain1.chain[clientChain1.chain.length - 3].data.candidate = 'candidate8'
// Prints the changed data before the validation check
// console.log(clientChain1.chain[clientChain1.chain.length - 1].data)
// console.log(clientChain1.chain[clientChain1.chain.length - 3].data)
// Checks validity of all blocks
// checkValidity(clientChain1)
// Prints corrected data
// console.log(clientChain1)
