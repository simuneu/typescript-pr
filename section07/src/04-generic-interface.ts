//제네릭 인터페이스

interface KeyPair<K, V>{
    key:K
    value:V
}

let keyPair: KeyPair<string, number>={
    key:"key", 
    value:0
};

let keyPair2: KeyPair<boolean, string[]>={
    key:true, 
    value:["1"]
};

//인덱스 시그니처
interface NumberMap{
    [key:string]:number
}

let numberMap1:NumberMap={
    key:-123,
    key2:3345
}
///////
interface Map<V>{
    [key:string]:V
}

let stringMap:Map<string>={
    key:"value", 
}

let booleanMap:Map<boolean>={
    key:true,
}

//제네릭 타입 별칭
type Map2<V>={
    [key:string]:V
}

let stringMap2:Map2<string>={
    key:"hello",
}


//제네릭 인터페이스 활용 예시
interface Student{
    type:"student",
    school:string
}

interface Developer{
    type:"developer",
    skill:string
}

// interface User{
//     name:string
//     profile:Student|Developer
// }
interface User<T>{
    name:string
    profile:T
}

function goToSchool(user:User<Student>){
    // if(user.profile.type !== 'student'){
    //     console.log("잘 못 오셨음")
    //     return 
    // }
    const school = user.profile.school
    console.log(`${school}스쿨 등교`)
}

// goToSchool(developerUser) 애초에 사용못함

const developerUser:User<Developer>={
    name:"lee", 
    profile:{
        type:"developer", 
        skill:"ts"
    }
}

const studentUser:User<Student>={
    name:"park", 
    profile:{
        type:"student", 
        school:"high"
    }
}
