//타입 단언
type Person ={
    name:string
    age:number
}

// let person:Person={}
// person.name = "lee"
// person.age = 10 //값을 나중에 넣고 싶을 때는?

let person={} as Person; 
person.name = "lee"
person.age = 10 

type Dog={
    name:string
    color:string
}

// let dog:Dog = {
//     name:"mung",
//     color:"red"
//     breed:"pome" <<
// }
let dog= {
    name:"mung",
    color:"red",
    breed:"pome"
} as Dog

//타입 단언 규칙
//값 as 단언
// A as B (A가 B의 슈퍼타입이거나 서브타입이어야 함)

let num1 = 10 as never; 
let num2 = 10 as unknown; //모든 타입의 super타입

// let num3 = 10 as string // 10은 이미 number, 겹치는 부분이 없음~
let num3 = 10 as unknown as string //error안남  unknown의 슈퍼타입을 이용

let num4 = 10 as const //literal타입으로 추론

let cat={
    name:"meow",
    color:"red"
} as const //객체에 const 붙이면 readonly가 됨

//non null
type Post = {
    title:string,
    author?:string
}

let post:Post={
    title:"1",
    // author:"lee"
}

// const len :number = post.author?.length; //option값은 undefined이 발생할 수 있어서 number를 반환할 수 없음
const len :number = post.author!.length; //!로 값이 있다고 단언해줌