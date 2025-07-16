//함수 타입 호환성

//반환값 호환?
type A =()=>number
type B =()=>10

let a:A =()=>10;
let b:B =()=>10;

a=b
// b=a b는 10리터럴이라 10외의 값은 넣을 수 없음

//매개변수 호환?
type C =(value:number)=>void
type D =(value:10)=>void

let c:C =(value)=>{}
let d:D =(value)=>{}

// c=d //매개변수 기준으로 호환성을 판단할 땐 다운캐스팅만 됨
d=c

type Animal={
    name:string, 
}
type Dog={
    name:string, 
    color:string
}

let animalFunc=(animal:Animal)=>{
    console.log(animal.name)
}
let dogFunc=(dog:Dog)=>{
    console.log(dog.name)
    console.log(dog.color)
}

// animalFunc = dogFunc error

let testFunc=(animal:Animal)=>{
    console.log(animal.name)
    // console.log(animal.color) animal(슈퍼)에 color는 없기에 업캐스팅으로 호환되는 것을 막는 것.
}

let testFunc2=(dog:Dog)=>{
    console.log(dog.name)
}

//매개변수 개수가 다를 때
type Func1=(a:number, b:number)=>void
type Func2=(a:number)=>void

let func1 :Func1 =(a,b)=>{}
let func2 :Func2 =(a)=>{}

func1=func2
// func2=func1