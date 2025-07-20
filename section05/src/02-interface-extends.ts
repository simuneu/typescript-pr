//인터페이스 확장

interface Animal {
    name:string
    color:string
}
interface Dog extends Animal {
    // name:"hello" //리터럴로 다시 정의할 수 있음
    isBark:boolean
}

const dog :Dog ={
    name:"",
    color:"",
    isBark:true
}

interface Cat extends Animal{
    isScratch:boolean

}
interface Chicken extends Animal{
    isFly:boolean
}

interface DogCat extends Dog, Cat{

}

const dogCat : DogCat={
    name:"",
    color:"",
    isBark:true,
    isScratch:true
} //자둥확장 가능

