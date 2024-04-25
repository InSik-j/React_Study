// 조건문

// 1. if문
// - if( 조건문 ){
//      참일 때 실행할 문장 
//   }else if( 조건문 ){
//      참일 때 실행할 문장 
//   }
//   else{
//      그 외 거짓일 때 실행할 문장     
//   }
let num = 10;

if(num>= 10){
    console.log("num은 10 이상입니다.");
}else if(num>=5){
    console.log("num은 10 미만 5 이상입니다.");
}else{
    console.log("num은 5 미만입니다.");
}

// 2. Switch 문
// - if문과 기능 자체는 동일하나 
// - 다수의 조건을 처리할 때 if보다 더 직관적이다.
let animal = "cat";
switch(animal){
    case "cat" : {
        console.log("고양이");
        break;
    }
    case "dog" : {
        console.log("강아지");
        break;
    }
    default : {
        console.log("동물이 아닙니다.");
    }
}