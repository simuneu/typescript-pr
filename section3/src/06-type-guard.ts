//타입 좁히기
//조건문 등을 이용해 넓은 타입에서 조은 타입으로, 상황에 따라 좁히는 방법을 이야기

type Person = {
    name:string, 
    age:number;
}

function func(value:number|string|Date|null|Person){
    if(typeof value ==="number"){
        console.log(value.toFixed())
    }else if(typeof value ==="string"){
        console.log(value.toUpperCase())
    }else if(value instanceof Date){
        console.log(value.getTime())
    }else if(value && "age" in value){ //instanceof는 타입이 들어가는건 안됨. 값을 확인하는 연산자임
        console.log(`${value.name}은 ${value.age}살 입니다.`)
    }
}