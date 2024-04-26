// 비동기 작업 처리하기 2. Promise

// Promise
// - 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 JS 내장 객체
// - 비동기 작업을 감싸는 객체
// - Promise가 제공하는 기능
//    1. 비동기 작업 실행
//    2. 비동기 작업 상태 관리
//    3. 비동기 작업 결과 저장
//    4. 비동기 작업 병렬 실행
//    5. 비동기 작업 다시 실행 등등 
// - Promise는 비동기 작업을 진행 단계에 따라 대기 - 성공 or 실패 이 3가지 상태로 나누어 관리
//    대기 : 아직 작업이 완료되지 않은 상태
//    성공 : 비동기 작업이 성공적으로 마무리 된 상태 
//          * 해결(resolve) : 대기 -> 성공으로 가는 과정
//    실패 : 비동기 작업이 실패한 상태
//          * 거부(reject) : 대기 -> 실패로 가는 과정

// Promise 사용
// - new Promise(비동기 작업을 진행할 콜백함수)

// const promise = new Promise((resolve, reject)=>{
//     // executor : 비동기 작업을 실행하는 함수
//     setTimeout(()=>{
//         console.log("안녕");

//         // Promise의 상태를 성공 상태로 변경하고 인수로 보낸 결과값 출력
//         resolve("Promise 상태 : 성공"); 
//     }, 2000);
// });

// setTimeout(()=>{
//     console.log(promise);
// }, 3000);

const promise = new Promise((resolve, reject)=>{
    // executor : 비동기 작업을 실행하는 함수
    setTimeout(()=>{
        const num = 10;
        
        if(typeof num == "number"){
            resolve(num+10); 
        }else{
            resject("num이 숫자가 아닙니다."); 
        }
        
    }, 2000);
});


// then 메서드
// - Promise에서 작업이 성공했을 때 호출되는 함수

promise.then((value) =>{
    console.log(value);
});

// catch 메서드
// - Promise에서 작업이 실패했을 때 호출되는 함수
promise.catch((error) =>{
    console.log(error);
});

// then 메서드는 호출한 promise를 다시 반환하기 때문에
// 다음과 같이 사용 가능
// 이를 Promise Chaining이라고 함

promise.then((value) =>{
    console.log(value);
}).catch((error) =>{
    console.log(error);
});

// -------------------------------------------------------

function add10(num){
    const promise = new Promise((resolve, reject)=>{
        // executor : 비동기 작업을 실행하는 함수
        setTimeout(()=>{
            
            if(typeof num == "number"){
                resolve(num+10); 
            }else{
                resject("num이 숫자가 아닙니다."); 
            }
            
        }, 2000);
    });

    return promise;
}

add10(0)
    .then((result)=>{
        console.log(result);

        return add10(result);
    }).then((result)=>{
        console.log(result);
    }).catch((error) =>{
        console.log(error);
    });
