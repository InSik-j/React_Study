// 특수한 연산자

// 1. null 병합 연산자
// - 존재하는 값을 추려내는 기능
// - null, undefined가 아닌 값을 찾아내는 연산자
// - 만약 모두 null, undefined 값이 아니라면 첫 번째 피연산자 값 반환
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;


let userName = "홍길동";
let userNickName = "Mr.Hong";

let displayName = userName ?? userNickName;

// 2. typeof 연산자
// - 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
let t1 = typeof var7;
console.log(t1);

var7 = "hello";
let t2 = typeof var7;
console.log(t2);

// 3. 삼항 연산자
// - 항을 3개 사용하는 연산자
// - 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
// - 조건식 ? (참일 때 반환할 값) : (거짓일 때 반환할 값)
let var8 = 10;

    // 요구사항 : 변수 res에 var8의 값이 짝수이면 "짝", 홀수이면 "홀"

let res = var8 % 2 === 0 ? "짝수": "홀수";
