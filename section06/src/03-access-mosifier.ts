//접근제어자 기본 public

class Employee{
    private name:string; //클래스 내부에서만 접근 가능
    protected age:number;
    position:string; //public

    constructor(name:string, age:number, position:string){
        this.name =name
        this.age =age
        this.position =position
    }
    //메서드
    work(){
        console.log("working ...")
    }
}

class ExecutiveOfficer extends Employee{
    officeNumber:number;
    constructor(name:string, age:number, position:string, officeNumber:number){
        super(name, age, position)
        this.officeNumber = officeNumber
    }

    //메서드
    func(){
        // this.name //파생 클래스에서도 접근이 안됨
        this.age
    }
}


const employee = new Employee('lee', 30, 'developer')
// employee.name='kim'
// employee.age=30; //protected 외부에서는 접근안되고 파생은 가능
employee.position='ceo'


//접근제어자를 생성자에 직접 정의하는 경우
class Employee2{
    constructor( 
        private name:string, 
        protected age:number, 
        public position:string
    ){
    }
    //메서드
    work(){
        console.log("working ...")
    }
}