// 비동기 작업 처리하기 3. Async&amp;Await

// 1. async
//  - 어떤 함수를 비동기 함수로 만들어주는 키워드
//  - 함수가 promise를 반호나하도록 변환해주는 키워드

    // --------------------------------------------------------------
    async function getData(){
        return{
            name : "hong",
            id : "gildong"
        };
    }

    // 즉, 위 async function getData()는
    // { name : "hong", id : "gildong"}; 객체를 그대로 반환하는 함수가 아니라 
    // 객체를 결과값으로 갖는 새로운 promise를 반환하는 함수로 변환 

    // ---------------------------------------------------------------
    
    async function getData(){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve({
                        name : "hong",
                        id : "gildong"
                    });
                }, 1500);
        });
    }

    // 만약 다음과 같이 Promise 객체를 반환한다면,
    // 함수 생성시의 async는 별다른 일을 하지 않고 Promise 객체를 반환

    // ---------------------------------------------------------------

    // await
    // async 함수 내부에서만 사용이 가능한 키워드로
    // 비동기 함수가 다 처리되기를 기다리는 역할

    async function printData(){

        // getData()함수가 반환하는 Promise가 종료되길 기다림
        await getData();

        // getData()함수가 반환하는 Promise가 종료되길 기다리고
        // 종료가 되면 결과값을 data에 대입
        const data = await getData();
    }

    