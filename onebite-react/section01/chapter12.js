// 함수 표현식 과 화살표 함수

function funcA(){
    console.log("funcA 실행됨");
}

let varA = funcA;
varA();

// 1. 함수 표현식

// 변수 선언과 동시에 함수 생성 및 대입 가능 
// * 단 함수명으로는 호출 불가
// - 함수명 생략 가능
let varB = function funcB(){
    console.log("funcB 실행됨");
}
varB();

// 2. 화살표 함수 
// - 함수를 보다 빠르고 간결하게 생성하도록 도와주는 JS문법
let varC = () =>{
    return 1;
};
console.log(varC());

let varD = (value) =>{
    return value+ 1;
};

// - 만약 기능이 값을 반환하기만 하는 거라면 다음과 같이 생성 가능
let varE = () => 1;
let varF = (value) => value+1;


