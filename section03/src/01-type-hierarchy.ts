// unknown
function unknownExam(){
    let a :unknown =1;
    let b :unknown ="s";
    let c :unknown =true;
    let d :unknown =null;
    let e :unknown =undefined;

    let unknownVar :unknown

    // let num :number =unknownVar //down-casting
}

//never
function neverExam(){
    function neverFunc():never{
        while (true){
        }
    let num :number = neverFunc()
    let str :string = neverFunc()
    let bool :boolean = neverFunc() //up casting = 가능 never는 계층 최하위!
    }
}

//void
function voidExam(){
    function voidFunc():void{
        console.log("hi")
    }

    let voidVar:void = undefined
}

//any- 타입 계층도 무시
function anyExam(){
    let unknownVar:unknown
    let anyVar:any
    let undefinedVar:undefined
    let neverVar:never

    anyVar = unknownVar
    undefinedVar = anyVar
    // neverVar = anyVar //never는 다 안됨
}



