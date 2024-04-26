// 배열 메서드 2. 순회와 탐색

// 1. forEach
// - 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
    let arr1 = [1, 2, 3];

    arr1.forEach(function(item, idx, arr){
        //console.log(idx, item * 2);
    });

    // arr1의 모든 값에 *2한 값을 doubleArr 배열에 삽입
    let doubleArr = [];
    arr1.forEach((item)=>{
        doubleArr.push(item * 2);
    });


// 2. includes
// - 배열에 특정 요소가 있는지 확인하고 결과에 따라 boolean값을 반환 메서드
    let arr2 = [1, 2, 3];
    arr2.includes(2); // 있다면 true 반환, 없다면 false 반환

// 3. indexOf
// - 특정 요소의 인덱스를 찾아서 반환하는 메서드
//  * 만약 같은 값의 요소가 존재할 시 가장 첫번째 인덱스 값을 반환
//  * 추가로 존재하지 않는 요소를 입력하면 -1 반환
//  * 객체값의 인덱스는 찾아낼 수 없음
    let arr3 = [1, 2, 3];
    arr2.includes(2); // 2 요소의 인덱스 값 1 반환

// 4. findIndex
// - 모든 요소를 순화하면서 콜백함수를 만족(true)하는
//   특정 요소의 인덱스를 반환하는 메서드
//  * 추가로 존재하지 않는 요소를 입력하면 -1 반환
    let arr4 = [1, 2, 3];
    arr4.findIndex((item)=>{
        if(item === 2) return true; // 값이 2와 같은 요소의 인덱스값 1 반환
    });

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾고 요소를 그대로 반환

    let arr5 = [
        {name : "홍길동"},
        {name : "이순신"}
    ]

    // 조건에 맞는 값이 그대로 저장finded = {name : "이순신"}
    const finded = arr5.find(   
        (item) => item.name === "이순신" 
    );
    