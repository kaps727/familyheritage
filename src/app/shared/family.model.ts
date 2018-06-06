import { Festival } from "./festival.model";

export class Family{

    constructor(public name:string, 
                public noOfMember:string,
                public imagePath:string, 
                public festivals:Festival[]){
        this.name = name;
        this.noOfMember = noOfMember;
        this.imagePath = imagePath;
        this.festivals = festivals;
    }
    
}