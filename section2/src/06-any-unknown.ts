//any - 특정 변수 타입을 정확히 알지 못할 때
let anyVar:any = 10;
anyVar="hello";

let num:number=10;
num=anyVar

//unknown
let unknownVar:unknown

unknownVar=""
unknownVar=1
unknownVar=()=>{}

// unknownVar.toUpperCase()//error
if(typeof unknownVar ==='number'){
    num = unknownVar;
}

