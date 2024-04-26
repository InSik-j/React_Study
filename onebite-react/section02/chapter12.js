// 비동기 작업 처리하기 1. 콜백 함수

// function add(a, b, callback){
//     setTimeout(()=>{
//         const sum = a + b;
//         callback(sum);
//     }, 3000);
// }

// add(1, 2, (value)=>{
//     console.log(value);
// });

// 실행 과정
// 1. add 함수 호출
// 2. add 함수에서 setTimeout 함수 호출되며 3초 뒤에 콜백함수 실행
// 3. 콜백함수에서 sum 계산
// 4. 계산을 완료한 후 매개변수로 받은 callback함수 호출하여 sum 값을 전달
// 5. setTimeout 함수 종료되고 add함수 호출시 선언한 콜백함수의 매개변수에 sum값 전달되고 
//               내부 실행문 실행


// 음식을 주문하는 상황
function orderFood(callback){
    setTimeout(()=>{
        const food = "떡볶이";
        callback(food);
    },3000);
}

function coolDownFood(food, callback){
    setTimeout(()=>{
        const coolDownedFood = `식은 ${food}`;
        callback(coolDownedFood);
    },2000);
}

function freezeFood(food, callback){
    setTimeout(()=>{
        const freezedFood = `얼린 ${food}`;
        callback(freezedFood);
    },1500);
}

orderFood((food) =>{
    console.log(food);

    coolDownFood(food, (coolDownedFood)=>{
        console.log(coolDownedFood);

        freezeFood(coolDownedFood, (freezedFood)=>{
            console.log(freezedFood);
        })
    });
})