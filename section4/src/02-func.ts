//함수 타입 표현식

type Add = (a:number, b:number)=>number

const add = (a:number, b:number):number =>a+b

type Operation = (a:number,b:number)=>number

const sub =(a:number,b:number)=>a-b //type없을 경우 
const multiply:Operation =(a,b)=>a*b //type Operation을 쓸 경우

//호출 시그니처
type Operation2 ={
    (a:number, b:number):number;
}

const sub2:Operation2 =(a,b)=>a-b 
const multiply2:Operation2 =(a,b)=>a*b 
