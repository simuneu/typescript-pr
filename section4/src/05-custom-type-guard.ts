//사용자 정의 타입 가드
type Dog={
    name:string
    isBark:boolean
}

type Cat={
    name:string
    isScratch:boolean
}


type Animal = Dog|Cat

function isDog(animal:Animal):animal is Dog{ //참이면 반환값을 Dog타입으로 알아듣는 것.
    return (animal as Dog).isBark !==undefined
}

function isCat(animal:Animal):animal is Cat{ //참이면 반환값을 Cat타입으로 알아듣는 것.
    return (animal as Cat).isScratch !==undefined
}

function warning(animal:Animal){
    if("isBark" in animal){
        animal;
    }else if("isScratch" in animal){

    }
}