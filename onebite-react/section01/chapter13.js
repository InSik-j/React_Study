// 콜백함수
// - 자신이 아닌 다른 함수에 인수로써 전달된 함수
// - 당장 실행하는 것이 아닌 다른 함수에 인수로 전달해서 나중에 호출할 수 있도록 하는 것
// - 장점 - 함수를 재선언하지 않고 활용 가능
function main(value){
    value();
}

function sub(){
    console.log("sub함수 실행됨");
}
main(sub);

// -----------------------------------------

function main2(value){
    value();
}

function sub2(){
    console.log("sub2 함수 실행됨");
}

main2(sub2);

// -----------------------------------------
function main3(value){
    console.log(1);
    value();
    console.log(3);
}

main3(()=>{
    console.log("2 sub3 익명 콜백함수 실행됨");
});

// 2. 콜백함수의 활용
// -----------변경 전 -----------------
function repeat(count){
    for(let idx = 1; idx <= count; idx ++){
        console.log(idx);
    }
}

repeat(5);

function repeatDouble(count){
    for(let idx = 1; idx <= count; idx ++){
        console.log(idx * 2);
    }
}

repeatDouble(5);
// -----------변경 후 -----------------

function repeat2(count, callback){
    for(let idx = 1; idx <= count; idx ++){
        console.log(idx);
    }
};

repeat2(5, function (idx){
    console.log(idx);
});
repeat2(5, function (idx){
    console.log(idx*2);
})