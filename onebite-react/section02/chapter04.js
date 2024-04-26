// Spread 연산자& Rest 매개변수

// 1. Spread 연산자
// - 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

// 배열 arr1의 값을 다른 배열에 추가하는 예시 
    let arr1 = [1, 2, 3];

    // Spread 연산자 사용 전
    let arr2 = [4, arr[0], arr[1],5, 6];

    // Spread 연산자 사용
    let arr3 = [4, ...arr1,5, 6];

// obj1 객체의 값을 다른 객체에 추가하는 예시 
    let obj1 = {
        a:1,
        b:2
    };

    // Spread 연산자 사용 전
    let obj2 = {
        a: obj1.a,
        b: obj1.b,
        c:3,
        d:4
    };

    // Spread 연산자 사용
    let obj3 = {
        ...obj1,
        c:3,
        d:4
    };

// 함수 활용 예시
function funcA(p1, p2, p3){
    console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// - 나머지 매개변수
// - 여러개의 매개변수를 받아야 할 때 배열 형태로 한 번에 매개변수를 받아오도록 해주는 문법
// - ...매개변수명 으로 사용 Ex) ...restNum
// * rest 매개변수 뒤에는 매개변수 추가 X

function funcB(...rest){ // 받아온 인수는 rest에 배열 형태로 값이 저장됨
    console.log(rest);
}

funcB(...arr1);

// 만약 one, two와 같이 매개변수 명을 변경하려 추가하면
// 그 둘을 제외한 나머지 인수가 rest에 배열 형태로 저장됨
function funcC(one, two, ...rest){ 
    console.log(rest);
}

funcC(...arr1);