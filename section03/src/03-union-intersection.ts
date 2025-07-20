//대수타입

import { error } from "console";

//1.union(합집합)
let a:string|number;
a=1;
a="s";

type Dog = {
    name:string
    color:string
}

type Person={
    name:string
    language:string
}

type Union1 = Dog|Person

let union1:Union1={
    name:"",
    color:"",
}

let union2:Union1={
    name:"",
    language:"",
}

let union3:Union1={
    name:"",
    color:"",
    language:"",
}

// let union4:Union1={
//     name:"",
// } error

//교집합 intersection
// let variable :number & string; //never
type Intersection = Dog&Person
let intersection1:Intersection={
    name:"",
    color:"",
    language:""
}//교집합은 다 들어가야 함
