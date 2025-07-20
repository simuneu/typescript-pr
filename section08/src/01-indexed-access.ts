//인덱스드 엑세스 타입

interface Post{
    title:string
    content:string
    author:{
        id:number
        name:string
    }
}

function printAuthorInfo(author:Post["author"]){ //<<(author:Post["author"]) 타입만 명시할 수 있음. 변수로 넣으면 안됨
                                                //id프로퍼티만 사용하고 싶을 때 (author:Post["author"]["id"])
    console.log(`${author.id} = ${author.name}`)
}

const post:Post={
    title:"title",
    content:"content",
     author:{
        id:1,
        name:'lee'
    }
}

printAuthorInfo(post.author)