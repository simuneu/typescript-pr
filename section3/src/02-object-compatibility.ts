// 기본 타입 호환성
let num1:number = 10;
let num2:10 =10;
num1=num2;

//객체 타입 호환성 
type Animal ={
    name:string, 
    color:string
} //더 추상적인 게 상위 타입

type Dog ={
    name:string, 
    color:string,
    gender:string
}

let animal :Animal ={
    name:"mung", 
    color:"white"
}

let dog :Dog ={
    name:"mung", 
    color:"white",
    gender:"f"
}

animal = dog;
// dog= animal; error

type Book = {
    name:string, 
    price:number
}

type BibleBook ={
    name:string, 
    price:number,
    language:string
}

let book :Book;
let bible:BibleBook={
    name:"정석",
    price:200,
    language:"en"
}

book = bible;
// bible = book error

let book2:Book={
    name:"정석",
    price:200,
    // language:"en"   error 초과 프로퍼티 검사
}