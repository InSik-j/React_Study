// 형 변환 (Type Casting)

// 1. 묵시적 형 변환
// -  js 엔진이 자동으로 형 변환 하는 것

let num = 10;
let str = "문자";

const result = num + str;
// 결과
// 10문자

// 2. 명시적 형 변환
// - 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시하는 것
// - ex) 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);

let str3= "10개"
// let strToNum2 = Number(str2); // 수치연산 실패 오류 발생
let strToNum2 = parseInt(str2);


// - 숫자 -> 문자
let num1 = 20;
let numToStr1 = String(num1);