//  구조 분해 할당
// - 배열이나 객체에 저장된 값들을 말 그대로 분해해서 각각 다른 변수에 할당하는 문법


// 1. 배열의 구조 분해 할당

let arr = [1, 2, 3];

// index값을 이용한 할당
let one = arr[0];
let two = arr[1];

// 구조 분해 할당을 이용한 할당
let [one2, two2] = arr;

// 만약 배열 원소의 값을 넘는 변수를 추가하면 undefined 값이 저장됨
let [one3, two3, three3, four3] = arr;

// 그러나 원소의 값을 넘어도 기본값 설정 가능
let [one4, two4, three4, four4=4] = arr;

// 2. 객체의 구조 분해 할당
let person = {
    name : "홍길동",
    age : 27,
    hobby: "테니스"
}

let name = person.name;
let age = person.age;

// 구조 분해 할당을 이용하면 다음과 같이 할당 가능
// 배열과는 다르게 {} 중괄호 사용 
let {name2, age2, hobby2} = person

// 다음과 같이 프로퍼티명 변경 가능
let {name2:name3, age3, hobby3} = person

// 3. 객체 구조 분해 할당을 이용하여 함수의 매개변수 받는 방법
//   * 객체를 넘길때만 구조 분해 할당 가능 
const func = ({name, age, hobby})=>{
    console.log(name, age, hobby);
}

func(person);