let num1:number =123;
let num2:number = -123;
let num3:number = -0.123;
let num4:number = 0.123;
let num5:number = Infinity;
let num6:number = -Infinity;
let num7:number = NaN;

// num1 = 'eee' //error
num1.toFixed() 

//string
let str1="hello";
let str2=`hello`;
let str3='hello';
let str4=`hello ${num1}`;

str1.toUpperCase()

//boolean
let bool1 :boolean =true;
let bool2 :boolean =false;

//null
let null1:null  = null


//undefined
let und1:undefined = undefined;

// let numA:number = null //number 타입엔 null을 넣을 수 없음 null은 null타입
//이럴 땐 strictNullChecks를 false로 변경(tsconfig에서)

//리터럴 타입(숫자, 문자, boolean)
let numA:10 = 10;
// numA = 20//error