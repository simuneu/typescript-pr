//인덱스드 엑세스 타입 - 배열

type PostList={
    title:string
    content:string
    author:{
        id:number
        name:string
    }
}[]

function printAuthorInfo(author:PostList[number]["author"]){ //<<(author:Post["author"]) 타입만 명시할 수 있음. 변수로 넣으면 안됨
    console.log(`${author.id} = ${author.name}`)
}

const post:PostList[number]={
    title:"title",
    content:"content",
     author:{
        id:1,
        name:'lee'
    }
}

printAuthorInfo(post.author)