//object - 객체 리터럴 타입
let user:{
    id:number, 
    name:string
} ={
    id:1, 
    name:"lee",
}

user.id

let dog:{
    name?:string, 
    color:string
}={
    // name:"mung",
    color:"brown"
}
dog.color
dog.name

let config : {
    readonly apiKey:string
}={
    apiKey:"myApi"
}
