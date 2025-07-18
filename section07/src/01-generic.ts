//제네릭
function func<T>(value:T):T{ //타입변수를 범용적으로 사용할 수 있음
    return value;
}

let num = func(10)

if(typeof num ==="number"){
    num.toFixed()
}

let bool = func(true)
let str = func("string")
let arr = func<[number,number, number]>([1,2,3]) 