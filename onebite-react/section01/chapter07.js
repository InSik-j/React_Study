// 연산자

// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자;
let num1 = 3 + 2;

// 3. 복합 대입 연산자 (산술+대입)
let num2 = 10;
num2 += 20; // num = num + 20;


// 4. 증감 연산자 ( ++, --)
let num3 = 10;
++num3; // 전위 연산 : 라인 시작과 함께 증가
num3++; // 후위 연산 : 라인이 끝나고 증가

// 5. 논리 연산자 (||, &&, ! )
let or = true || false; // or : 둘 중 하나만 참이여도 true
let and = true && false; // and : 둘 중 모두 참이여야 true
let not = !true; // not : 반대 값으로 반환 

// 6. 비교 연산자 (==, ===, !=, <= ...)
let comp1 = 1 === 2;
let comp2 = 2 != 2;
    // == : 값만 비교
    // === : 자료형까지 비교

