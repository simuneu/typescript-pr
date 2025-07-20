//함수 오버로딩

//버전들 > 오버로드 시그니처
function func(a:number):void;
function func(a:number,b:number, c:number ):void

//실제구현부 
function func(a:number, b?:number, c?:number){ //오버로드 시그니처와 완전 같으면 의미가 없어지기에 ? 옵션을 줘야 함
    if(typeof b ==='number' && typeof c ==='number'){
        console.log(a+b+c)
    }else{
        console.log(a*20)
    }
} 

// func()
func(1)
// func(1,2) 
func(1,2,3)     
//오버로드 시그니처로 정의했을 때는 매개변수 개수를 맞춰야 함