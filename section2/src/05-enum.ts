//enum(여러가지 값들에 이름을 부여해 열거해두고 사용)

enum Role{
    ADMIN=0,
    USER=1,
    GUEST=2, //숫자 지워도 자동으로 0부터 들어감
}

enum Language{
    korean="ko",
    english="en"
}

const user1={
    name:"lee",
    role: Role.ADMIN,
    language: Language.korean
}
const user2={
    name:"park",
    role: Role.USER,
}
const user3={
    name:"kim",
    role: Role.GUEST,
}

console.log(user1, user2, user3)
