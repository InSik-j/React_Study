// 객체( Object )
// - 원시 타입이 아닌 객체 타입의 자료형
// - 여러가지 값을 동시에 저장할 수 있는 자료형을 의미 ex) 배열, 함수 ...

// 1. 객체 생성

    // 1.1 객체 생성자와 같은 내장함수를 이용한 생성
    let obj1 = new Object() // 객체 생성자

    // 1.2 {}를 이용한 생성 
    //  * 대부분 이 방법을 사용
    let obj2 = {} // 객체 리터럴

// 2. 객체 프로퍼티 (객체 속성)
    // 객체내의 각 속성들을 의미 ex) name, age ...
    // key값 : value값
    // key값에는 문자열이나 숫자만 사용 가능
    // 단, 띄어쓰기 사용시 " " 사용
    let person = {
        name : "홍길동", // 객체 프로퍼티
        age : 28,
        hobby:"도둑질",
        job : "의적",
        extra : {}
    };

// 3. 객체 프로퍼티를 다루는 방법
    // 3.1 특정 프로퍼티에 접근 ( 점 표기법,  괄호 표기법)
        // 동적인 프로퍼티 활용엔 괄호 표기법 추천
        // - 존재하지 않는 key값 사용시 undefined 반환
        // 점 표기법
        //  - 객체명.key값;
    let name = person.name; // 점 표기법

        // 괄호 표기법
        // - 객체명["key값"];
        // * key값은 ""로 감싸서 입력
    let age = person["age"];

    let property = "hobby";
    let hobby = person[property];
    console.log("hobby : "+ hobby);

    // 3.2 새로운 프로퍼티를 추가하는 방법
    person.dream = "fe developer"; // 점 표기법
    person["favoriteFood"] = "떡볶이"; // 괄호 표기법

    // 3.3 프로퍼티를 수정하는 방법
    person.dream = "educator";
    person["favoriteFood"] = "초콜릿";

    // 3.4 프로퍼티를 삭제하는 방법
    delete person.dream;
    console.log(person);

    // 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
    // 존재하면 true 반환, 존재하지 않으면 false 반환 
    let result1 = "name" in person;
    console.log(result1);
    