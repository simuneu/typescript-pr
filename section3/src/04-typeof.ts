//타입추론
let a =10;
let b = "string"
let c={
    id:1, 
    name:"lee",
}
function test(){
    return "bye" //반환값 기준 추론
}

function test1(msg="hello"){
    return 1 //매개변수 추론 가능
}

let d; //any
d=10 //number
d.toFixed()
// d.toUPperCase() error
d= "444" //string이 됨
d.toUpperCase()
// d.toFixed() error any타입이어서 가능한 것.

const num = 10; //literal 10으로 추론

let arr = [1,"str"] //union
