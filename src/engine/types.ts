//element, symbol for identification and valence to check if you can add the element to the structure
export type Element = {symbol : string, valence : number}

//each element card currently in play
export type Atom = {id : number, element : string}

//bond between 2 elements, keep track of the bond order
export type Bond = {id1 : number, id2 : number, order : number}

//the molecule that was built on the board, needs to be checked if valid compound or not
export type Molecule = {id : number, atoms : Atom[], bonds : Bond[]}

//the available compounds that are able to be played
export type Compound = {id : number, atoms : Atom[], bonds : Bond[], effect : string}

//the players and their hands
export type Player = {hp : number, elements : Element[], compounds : Compound[]}