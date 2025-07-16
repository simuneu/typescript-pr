//함수타입 정의

function func(a:number,b:number):number{
    return a+b
}

//
const add =(a:number,b:number):number =>{
    return a+b
}

function introduce(name="lee", tall?:number){ //선택적 매개변수는 뒤에 배치해야 함
    console.log(`name:${name}`)
    console.log(`tall:${tall}`) //
    if(typeof tall ==="number"){
        console.log(`tall:${tall+10}`) //
    }
}

introduce("park", 184)
introduce("park") //?- option설정으로 error안남

function getSum(...rest:number[]){ //...:rest가변적 길이 인수를 배열로 묶어 저장
    let sum =0;
    rest.forEach((it)=>(sum+=it))

    return sum
}   
getSum(1,2,3) //6

