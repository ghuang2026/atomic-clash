import {describe, it, expect} from "vitest"
import type { Atom, Element } from "./types"
import * as molecule from "./molecules"

describe("hydrogen gas", () =>{
    it("two hydrogens with single bonds to each other", () => {
        const h: Atom = Atom{1, "H"};
        
        const h2 = molecule.createMolecule(1, Atom{2, "H"})
    })
})