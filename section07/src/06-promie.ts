import { resolve } from "path"

//promise
const promise = new Promise<number>((resolve, reject)=>{
    setTimeout(()=>{
        // resolve(20)
        reject(`@@때문에 실패`)
    },3000)
})
//resolve비동기가 성공했을 때 호출
//reject비동기가 실패했을 때 호출

promise.then((response)=>{
    console.log(response) //20
})

promise.catch((err)=>{
    if(typeof err ==="string"){
        console.log(err)
    }
})

//프로미스 반환하는 함수의 타입을 정의
interface Post{
    id:number
    title:string
    content:string
}

function fetchPost():Promise<Post>{
    return new Promise<Post>((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                id:1, 
                title:"게시글 제목", 
                content:"게시글 컨텐츠"
            })
        },3000)
    })
}

const postRequest = fetchPost()

postRequest.then((post)=>{
    post.id
})


