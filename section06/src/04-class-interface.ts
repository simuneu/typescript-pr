//인터페이스와 클래스

interface CharacterInterface{
    name:string
    moveSpeed:number
    move():void
}

class Character implements CharacterInterface{
    name:string
    moveSpeed: number

    constructor (name:string, moveSpeed:number){ //역시 이곳에 접근제어자 써서 깔끔하게 구현도 가능 
                                                // 근데 인터페이스는 모두 public이어야 함
        this.name = name
        this.moveSpeed = moveSpeed
    }

    move(): void {
        console.log(`${this.moveSpeed}속도로 이동`)
    }
}
