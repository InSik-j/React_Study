// 동기와 비동기

// 동기
// - 여러개의 작업을 순서대로 한 개씩만  처리하는 것
// 단점 : 만약 한 곳의 작업이 오래 걸린다면 전체적인 성능이 저하됨
// 보완 방법 : 멀티 쓰레드 사용하면 되지만 js에는 지원 x, 
//            *비동기 방식으로 보완 가능

// 비동기 
// - 작업을 순서대로 처리하지 않음


    console.log(1);
    console.log(3);

// -> 순서대로 1,3이 출력됨

// setTimeout과 같이 비동기적으로 작동하는 함수 사용
// setTimeout - 특정 시간 이후에 비동기적으로 실행
//              setTimeout는 JS가 아닌 WebAPIs에서 지원하는 함수
//              JS엔진이 아닌 WebAPIs에서 실행됨   
    console.log(1);

    setTimeout(()=>{    
        console.log(2); 
    }, 3000);

    console.log(3);
// 실행 순서
// 1. console.log(1) 실행 
// 2. setTimeout()함수가 호출되지만 타이머만 실행되고 바로 다음 라인으로 넘김
// 3. console.log(3) 실행 
// 4. 설정한 시간이 지나면 setTimeout()함수 내부의 콜백함수를 호출하여 console.log(2) 실행




