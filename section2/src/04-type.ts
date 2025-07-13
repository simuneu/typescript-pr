//타입 별칭
type User ={
    id:number;
    name:string;
    bio:string;
    location:string; 
}

let user:User={
    id:1,
    name:"lee",
    bio:"hi",
    location:"seoul",
}

//인덱스 시그니처
type CountryCodes={
    [key : string] : string
}

let countryCodes:CountryCodes={
    Korea:'ko',
    UnitedKingdom:"uk",
    UnitedState:"us"
}

type CountryNumberCodes={
    [key:string] : number,
    Korea:number //Korea property는 반드시 가져야 함
} //이 규칙을 위반하지만 않으면 에러가 나지 않음

let countryNumberCodes:CountryNumberCodes={
    Korea:410,
    UnitedKingdom:840,
    UnitedState:826,
}