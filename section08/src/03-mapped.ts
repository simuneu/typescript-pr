//맵드

interface User{
    id:number 
    name:string
    age:number
}

type PartialUser={
   [key in "id"|"name"|"age"]?:User[key]
}

type ReadOnlyUser={
   readonly[key in "id"|"name"|"age"]:User[key]

}

type BooleanUser ={
    [key in keyof User]:boolean
}

function fetchUser():User{
    return {
        id:1, 
        name:'lee',
        age:20
    }
}

function updateUser(user:User){

}

// const user= fetchUser();
// user.id = 2

updateUser({
    id:1, 
    name:'park',
    age:20
})