// 객체 2

// 1. 상수 객체
// - 추가 수정 삭제 가능
const animal = {
    type : "고양이",
    name : "나비",
    color : "black"
};

animal.age = 2; // 추가
animal.name = "까망이" // 수정
delete animal.color; // 삭제

// animal = 123; // 새로운 값 생성 불가

// 2. 메서드
// - 값이 함수인 프로퍼티

const person = {
    name : "홍길동",
    sayHi1 : function(){
        console.log("프로퍼티 함수 실행됨");
    },sayHi2 : () => {
        console.log("프로퍼티 화살표 함수 실행됨");
    },sayHi3() {
        console.log("메서드 선언");
    },
};

person.sayHi1();
person.sayHi2();
person.sayHi3();

console.log("-------------------------------------")

person["sayHi1"]();
person["sayHi2"]();
person["sayHi3"]();