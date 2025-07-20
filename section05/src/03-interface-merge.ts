//선언 합침

interface Person{
    name:string
}

interface Person{
    age:number
}

const Person:Person={
    name:"",
    age:20
}

//인터페이스는 두번 정의 가능하며, 합쳐서 사용할 수 있음
//단 동을 프로퍼티 중복 정의시 타입을 다르게 정의하면 충돌이 남
//리터럴로 재정의도 안됨 ! 


//모듈 보강
interface Lob{
    a:number 
    b:number
}

interface Lib{
    c:string
}

const lib={
    a:1,
    b:2
}

