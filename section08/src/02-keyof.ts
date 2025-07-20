//keyof

type Person = typeof person

function getPropertyKey(person:Person,key:keyof typeof person){
    return person[key]
}

const person ={
    name:'lee',
    age:20
}

getPropertyKey(person, 'name')
