// * 중요

// 배열 메서드 1. 요소 조작

// 6가지의 요소 조작 메서드

    // 1. push
    // - 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
    // * 요소를 추가하고 즉시 배열의 길이를 반환함
    let arr1 = [1, 2, 3];
    arr1.push(4); // -> arr1 = [1, 2, 3, 4]

    // 2. pop
    // - 배열의 맨 뒤에 있는 요소를 제거하고 반환
    let arr2 = [1, 2, 3];
    arr2.pop(); // arr2 = [1, 2]가 되고 마지막 요소였던 3을 반환
    const poppedItem = arr2.pop(); // arr2 = [1]이 되고 마지막 요소였던 2가 poppedItem에 저장됨

    // 3. shift
    // - 배열의 맨 앞에 있는 요소를 제거하고 반환
    let arr3 = [1, 2, 3];
    arr3.pop(); // arr3 = [2, 3]가 되고 첫번째 요소였던 1을 반환
    const poppedItem2 = arr3.pop(); // arr3 = [3]이 되고 첫번째 요소였던 2가 poppedItem2에 저장됨

    // 4. unshift
    // - 배열의 맨 앞에 새로운 요소를 추가하는 메서드
    //  * 요소를 추가하고 즉시 배열의 길이를 반환함
    let arr4 = [1, 2, 3];
    arr4.unshift(4); // -> arr4 = [4, 1, 2, 3]

    // 5. slice
    // - 배열의 특정 법위를 잘라내서 새로운 배열로 반환
    // * slice를 해도 원본 배열의 값은 변하지 않음
    // 사용 예시 arr.slice(slice를 시작할 인덱스, slice를 끝낼 인덱스+1)
    // * 만약 배열의 끝까지 slice할거라면 slice를 끝낼 인덱스+1 생략 가능  Ex)arr.slice(2)
    // * 마지막부터 slice를 할거라면 음수값 설정 Ex) arr.slice(-1) 이면 뒤에서 부터 1개 반환
    let arr5 = [1, 2, 3, 4, 5];
    arr5.slice(2, 5); // arr5[2]부터 arr5[5-1] 까지의 값 3, 4, 5 를 반환
    
    // 6. concat
    // - 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

    let arr6 = [1, 2, 3];
    let arr7 = [4, 5];

    let concatedArr = arr6.concat(arr7) // -> concatedArr = [1, 2, 3, 4, 5]

    