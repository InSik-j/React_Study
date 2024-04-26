// Truthy와 Falsy

// 1. Falsy한 값
// Falsy한 값으로 조건문에서 거짓으로 평가됨
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy 한 값
//  - 위 Falsy한 값들을 제외한 나머지 또는 값
// ex)
let t1 = "hello"
let t2 = 123;

// 3. 활용 사례
function printName(person){
    if(person === undefined || person === null){
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person;
printName(person);

 // Truthy와 Falsy를 활용한 리팩터링
 //  - 조건문을 단순화 가능
 function printName2(person1){
    if(!person1){
        console.log("person의 값이 없음");
        return;
    }
    console.log(person1.name);
}

let person1;
printName(person);
