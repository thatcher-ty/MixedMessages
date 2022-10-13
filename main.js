//Word objects for randomized message
const wordObj = {
    _nounList: ['dog'],
    addNoun (noun) {
        this._nounList.push(noun);
    },
    _adjList: ['hallowed'],
    addAdj (adj) {
        this._adjList.push(adj);
    },
    _verbList: ['shit'],
    addVerb (verb) {
        this._verbList.push(verb);
    },
};


//accessible lists of each type of word
const nounList = wordObj._nounList;
const adjList = wordObj._adjList;
const verbList = wordObj._verbList;

const mixedMessages = () => {
    let noun = nounList[Math.floor(Math.random() * nounList.length)];
    let adj = adjList[Math.floor(Math.random() * adjList.length)];
    let verb = verbList[Math.floor(Math.random() * verbList.length)];
    let sentence = `Your ${noun} says there is a ${adj} being behind you about to ${verb}.`;
    return sentence;
};

console.log(mixedMessages());
