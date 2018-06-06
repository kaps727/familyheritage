import { Tradition } from "../shared/tradition.model";

export class Festival {

    constructor(public name: string,
                public description: string,
                public imagePath: string,
                public traditions: Tradition[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.traditions = traditions;
    }

}