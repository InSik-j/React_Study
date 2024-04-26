// 반복문으로 배열과 객체 순회

// 순회 
// - 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것

// 1. 배열 순회

    let arr = [1, 2, 3]

    // 1-1 배열 인덱스를 이용한 배열 순회
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }

// 1-2 for of 반복문을 이용한 배열 순회
    // for of 반복문 - 오직 배열을 순회하기 위해 존재하는 특수한 반복문
    //for(변수타입 변수명 of 순회할 배열명)
    for(let item of arr){
        console.log(item)
    }

    // 2. 객체 순환

    let person = {
        name : "홍길동",
        age : 27,
        hobby : "테니스"
    };

// 2-1 Object.keys를 사용한 객체 순회
    // Object.keys - 객체에서 key값들만 뽑아서 새로운 배열로 반환
    let keys = Object.keys(person); // keys = ["name", "age", "hobby"]

    // 배열 인덱스 이용
    for(let i=0; i<keys.length; i++){
        console.log(keys[i]);
    }

    //for of 반복문을 이용
    for(let key of keys){
        console.log(key);

        const value = person[key];
        console.log(key, value);
    }

// 2-2 Object.values를 사용한 객체 순환
    // Object.values - 객체에서 value값들만 뽑아서 새로운 배열로 반환
    let values = Object.values(person); // values = ["홍길동", 27, "테니스"]

    //for of 반복문을 이용
    for(let value of values){
        console.log( value);
    }

// 2-3 for in을 사용한 객체 순환
    // for in 오직 객체를 순회하기 위해 존재하는 특수한 반복문
    for(let key in person){
        console.log(key);
        
        const value = person[key];
        console.log(key, value);
    }