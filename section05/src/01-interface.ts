//인터페이스
interface Person {
    readonly name:string
    age?:number,
    sayHi():void,
    sayHi(a:number, b:number):void, //오버로딩 하고 싶으면 =>가 아닌 :로
}

// type Type1 = number|string|Person;
// type Type2 = number&string&Person;



// type Func={
//     ():void
// }

const person :Person ={
    name:"lee", 
    age:18,
    sayHi : function(){
        console.log("hi")
    },
}

// person.name ="park" readonly=> error

person.sayHi()
person.sayHi(1,2)
