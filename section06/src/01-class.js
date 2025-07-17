//클래스 - js



let studentA={
    name:"lee",
    grade:"A",
    age:20,
    study(){
        console.log("공부 중...")
    },
    introduce(){
        console.log("안녕")
    }
}

class Student{
    //필드
    name;
    grade;
    age;

    //생성자 - ㅋㄹ래스를 호출하면 객체를 실제로 생성하는 메서드
    constructor(name, grade, age){
        this.name=name, //this는 지금 생성하고 있는 객체 
        this.grade=grade,
        this.age=age
    }
    //메서드
    study(){
        console.log("공부 중...!")
    }
    introduce(){
        console.log(`안녕!! 저는 ${this.name}`)
    }
}

class StudentDeveloper {
    name
    grade
    age
    skill

    constructor(name, grade, age, skill){
        this.name=name
        this.grade = grade
        this.age = age
        this.skill = skill
    }
    study(){
        console.log("공부 중...!")
    }
    introduce(){
        console.log(`안녕!! 저는 ${this.name}`)
    }
    programming(){
        console.log(`${this.skill}로 프로그래밍 함`)
    }
}

class StudentDeveloper2 extends Student{
  
    skill

    constructor(name, grade, age, skill){ //매개변수는 지우면 안됨
        super(name, grade, age) //상속된 것은 super로 불러옴
        this.skill = skill
    }

    programming(){
        console.log(`${this.skill}로 프로그래밍 함`)
    }
}




//인스턴스(클래스를 이용해 만든 객체)
let studentB = new Student("park", "A+", 21) //new 키워드 필수, 인수 전달
console.log(studentB)
studentB.study();
studentB.introduce()


let studentDeveloper = new StudentDeveloper("kim", "B+", 22, "javaScript")
console.log(studentDeveloper)
studentDeveloper.introduce()
studentDeveloper.study()
studentDeveloper.programming()
