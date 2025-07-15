//서로소 유니온
//교집합이 없는 타입들로만 만든 유니온 타입
//공통적으로 포함되는 값이 없는 것

type Admin={
    tag:"ADMIN",
    name:string, 
    kickCount:number
}
type Member={
    tag:"MEMBER",
    name:string,
    point:number
}
type Guest={
    tag:"GUEST",
    name:string, 
    visitCount:number
}

type User = Admin|Member|Guest;

//로그인하면 출력되는 메세지가 다름
// function login(user:User){
//     if('kickCount' in user){
//         console.log(`${user.name}님 현재까지  ${user.kickCount}명 강퇴했습니다.`)
//     }else if('point' in user){
//         console.log(`${user.name}님 현재까지  ${user.point}점 모았습니다.`)
//     }else{
//         console.log(`${user.name}님 현재까지  ${user.visitCount}번 방문했습니다.`)
//     }
// }

function login(user:User){
    if(user.tag ==='ADMIN' ){
        console.log(`${user.name}님 현재까지  ${user.kickCount}명 강퇴했습니다.`)
    }else if(user.tag ==='MEMBER' ){
        console.log(`${user.name}님 현재까지  ${user.point}점 모았습니다.`)
    }else{
        console.log(`${user.name}님 현재까지  ${user.visitCount}번 방문했습니다.`)
    }
} //switch문으로 바꿔서 쓰는 것도 직관적

//비동기 작업 결과 처리하는 객체


type LoadingTask={
    state:"LOADING"
}
type FailedTask={
    state:"FAIlED"
    error:{
        msg:string
        
    };
}
type SuccessTask={
    state:"SUCCESS"
    response:{
        msg:string
    }
}
type AsyncTask = LoadingTask|FailedTask|SuccessTask

function processResult(task:AsyncTask){
    switch(task.state){
        case "LOADING":
            console.log("로딩 중...")
            break
        case "FAIlED":
            console.log(`에러 발생 ${task.error.msg}`)
            break
        case "SUCCESS":
            console.log(`에러 발생 ${task.response.msg}`)
            break
    }
}

const loading:AsyncTask ={
    state:"LOADING"
}

const failed:AsyncTask={
    state:"FAIlED",
    error:{
        msg:"error~~!!"
    },
}

const success:AsyncTask={
    state:"SUCCESS",
    response:{
        msg:"data:~~~~~~~~~~"
    },
}