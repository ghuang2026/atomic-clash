import type { Atom, Molecule } from "./types"

export function createMolecule(id:number, atom:Atom): Molecule{
    return {id, atoms: [atom], bonds: []};
}

export function findAtom(id:number, molecule:Molecule): Atom | null{
    for(const atom of molecule.atoms){
        if(atom.id === id){
            return atom;
        }
    }
    return null;
}

export function remainingBondingDomains(id:number, molecule:Molecule): number{
    let sum = 0;
    for(const bond of molecule.bonds){
        if(bond.id1 === id || bond.id2 === id){
            sum += bond.order;
        }
    }
    return 4 - sum;
}

export function fullMolecule(molecule:Molecule): boolean{
    for(const atom of molecule.atoms){
        if(remainingBondingDomains(atom.id, molecule) !== 0){
            return false;
        }
    }
    return true;
}

export function toString(molecule:Molecule): string{
    const count: Record<string, number> = {};
    for(const atom of molecule.atoms){
        if(count[atom.element] === undefined){
            count[atom.element] = 1;
        }
        else{
            count[atom.element] += 1;
        }
    }

    const keys = Object.keys(count);
    keys.sort();

    let formula = "";
    for(const symbol of keys){
        formula += symbol + count[symbol];
    }

    return formula;
}

export function formBond(atom:Atom, molecule:Molecule): Molecule | null{
    return null;
}

//export function formBond(atom1:Atom, atom2:Atom): Bond{
//    return  {atom1, atom2, }
//}

