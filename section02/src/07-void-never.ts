//void 아무것도 없음 (리턴문에 아무것도 반환하지 않을 때)

function func1():string{
    return "hi"
}
function func2():void{
    console.log("hi")
}
let a :void;
// a=1;
// a="hi"
// a={}
// a=undefined

//never(불가능한 타입/정상적으로 종료될 수 없어서 반환을 할 수 없을 때 사용)
function func3():never{
    while(true){}
}

function func4():never{
    throw new Error();
}

let anyVar:any;
let b:never;
// b=1;
// b="hi"
// b={}
// b=undefined
// b=anyVar any타입고 never가 될 수 없음
