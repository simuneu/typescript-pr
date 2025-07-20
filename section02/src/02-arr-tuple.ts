//array
let numArr:number[] = [1,2,3];

let strArr:string[] = ["t","g","d"]

let boolArr :boolean[] = [true,false, true]

let boolArr2:Array<boolean> = [true, false, true]
let str2Arr:Array<string> = ["g", "gf", "f"]

//다양한 데이터타입의 배열
let multiArr:(string|number)[] =[1, "hello"]

//다차원 배열
let doubleArr:number[][] = [
    [1,2,3],
    [4,5],
]

//튜플
//길이와 타입이 고정된 배열(순서 지정할 때 편리)
let tup1:[number, number] =[1,2]
// tup1=[1,2,3]
// tup1=["g", "e"]

let tup2:[number, string, boolean]=[1,"2", true]

tup1.push(1)//배열 메소드 사용시 길이 제한에 오류 안남
tup1.pop()
tup1.pop()
tup1.pop()