//타입 스크립트의 클래스

const employee={
    name:"lee",
    age:40,
    position:"developer",
    work(){
        console.log("working...")
    }
}

class Employee{
    name:string;
    age:number;
    position:string;

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
}

const employeeA = new Employee("lee", 23, "developer")
    console.log(employeeA)


const employeeC:Employee={
    name:"",
    age:0,
    position:"",
    work(){}
}